// publish-psychology-episodes.mjs
// 이야기 심리학사 에피소드를 Supabase essays 테이블에 시리즈(series='심리학사')로 업로드
// 사용법: node scripts/publish-psychology-episodes.mjs [화번호...]
//   예: node scripts/publish-psychology-episodes.mjs 1 2 3
//   인자 없으면 등록된 모든 화 업로드 (이미 업로드된 화는 title 중복 체크로 스킵)
//
// 새 화 확정 시 EPISODES에 화 번호·파일명·제목·excerpt·카드 이미지를 추가하고 실행

import fs from "node:fs/promises";
import path from "node:path";

// .env 에서 SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY 로드 (Node 20.12+)
try { process.loadEnvFile(); } catch {}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("환경변수 누락: .env 에 SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY 를 설정하세요.");
  process.exit(1);
}

const VOLUME_DIR = "F:/wiki/manuscripts/psychology/volume1";
const SERIES = "심리학사";

const EPISODES = {
  1: {
    file: "1권_1화_심리학이라는-이름-psyche의-모험.md",
    title: "제1화 심리학이라는 이름 — psyche의 모험",
    excerpt: "프쉬케(psychē)와 로고스(logos), 영혼과 학문. '심리학'이라는 세 글자에 삼천 년에 가까운 여정이 숨어 있다. 숨결이 영혼이 되고, 영혼이 마음이 되고, 마음이 과학이 되기까지 — psyche의 모험을 좇는다.",
    card_image_url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=530&fit=crop&crop=center",
  },
  2: {
    file: "1권_2화_아리스토텔레스-영혼론의-지혜.md",
    title: "제2화 아리스토텔레스 — 『영혼론』의 지혜",
    excerpt: "세계 최초로 '영혼'이라는 주제를 하나의 학문으로 세운 아리스토텔레스. 『영혼론』에서 마음과 몸, 감각과 기억, 지성과 감정이 어떻게 다루어졌는지 — 심리학 최초의 교과서를 펼쳐 본다.",
    card_image_url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=530&fit=crop&crop=center",
  },
  // 3: {
  //   file: "1권_3화_....md",
  //   title: "제3화 ...",
  //   excerpt: "...",
  //   card_image_url: "...",
  // },
};

async function main() {
  const args = process.argv.slice(2);
  const episodeNumbers = args.length > 0
    ? args.map(Number).filter((n) => EPISODES[n])
    : Object.keys(EPISODES).map(Number);

  if (episodeNumbers.length === 0) {
    console.error(`업로드할 화가 없습니다. 현재 등록: ${Object.keys(EPISODES).join(", ")}화`);
    process.exit(1);
  }

  console.log(`📤 ${SERIES} 에피소드 업로드 시작: ${episodeNumbers.map((n) => `${n}화`).join(", ")}`);

  for (const ep of episodeNumbers) {
    const info = EPISODES[ep];
    const filePath = path.join(VOLUME_DIR, info.file);

    let bodyMarkdown;
    try {
      bodyMarkdown = await fs.readFile(filePath, "utf-8");
    } catch {
      console.error(`  ❌ 파일 없음: ${info.file}`);
      continue;
    }

    // title 중복 체크 (이미 업로드된 에피소드는 스킵)
    const checkRes = await fetch(
      `${SUPABASE_URL}/rest/v1/essays?title=eq.${encodeURIComponent(info.title)}&select=id,series,episode_number`,
      {
        headers: {
          apikey: SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        },
      }
    );
    const existing = await checkRes.json();
    if (existing && existing.length > 0) {
      console.log(`  ⏭️  이미 업로드됨: ${info.title} (id: ${existing[0].id})`);
      continue;
    }

    const body = {
      title: info.title,
      excerpt: info.excerpt,
      body_markdown: bodyMarkdown,
      card_image_url: info.card_image_url,
      series: SERIES,
      episode_number: ep,
    };

    const res = await fetch(`${SUPABASE_URL}/rest/v1/essays`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error(`  ❌ ${info.title} 업로드 실패: ${err}`);
      continue;
    }

    const result = await res.json();
    console.log(`  ✅ ${info.title} → id: ${result[0]?.id || "ok"} (series=${result[0]?.series}, ep=${result[0]?.episode_number})`);
  }

  console.log("\n📋 완료!");
}

main().catch((e) => {
  console.error("오류:", e.message);
  process.exit(1);
});
