// publish-philosophy-episodes.mjs
// 이야기 철학사 1권 에피소드를 Supabase essays 테이블에 업로드
// 사용법: node scripts/publish-philosophy-episodes.mjs [화번호...]
//   예: node scripts/publish-philosophy-episodes.mjs 1 2 3 4
//   인자 없으면 1~4화 모두 업로드

import fs from "node:fs/promises";
import path from "node:path";

const SUPABASE_URL = "https://qswzutgxtiuigrocqcmc.supabase.co";
const SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzd3p1dGd4dGl1aWdyb2NxY21jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzc3OTEyOSwiZXhwIjoyMDc5MzU1MTI5fQ.fqafiNy362gKs0X7dB594QlQXJ--M1Hqto1tvJjceow";

const VOLUME_DIR = "F:/wiki/manuscripts/philosophy/volume1";

const EPISODES = {
  1: {
    file: "1권_1화_철학의-탄생.md",
    title: "제1화 철학의 탄생",
    excerpt: "철학은 그리스에서 태어났다. 인류 최초의 학문이자 모든 학문의 토대인 철학은 어떻게 시작되었는가? 호메로스의 서사시에서 소크라테스의 대화까지, 그리스인의 정신적 여정을 좇는다.",
    card_image_url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=530&fit=crop",
  },
  2: {
    file: "1권_2화_신화에서-철학으로.md",
    title: "제2화 신화에서 철학으로",
    excerpt: "그리스인들은 '뮈토스'(전해 들은 이야기)와 '로고스'(근거를 대는 말)를 구분했다. 헤시오도스의 신화와 탈레스의 철학을 나란히 놓고 비교하며, 신화에서 철학으로의 전환을 살펴본다.",
    card_image_url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=530&fit=crop",
  },
  3: {
    file: "1권_3화_왜-그리스인가.md",
    title: "제3화 왜 그리스인가? - 밀레토스의 기적 -",
    excerpt: "왜 하필 그리스, 그중에서도 밀레토스라는 작은 도시에서 철학이 태어났을까? 이집트와 바빌로니아의 선진 문명을 제치고 그리스에서 로고스가 꽃피울 수 있었던 조건들을 하나씩 풀어본다.",
    card_image_url: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=400&h=530&fit=crop",
  },
  4: {
    file: "1권_4화_탈레스.md",
    title: "제4화 탈레스 — 최초의 철학자",
    excerpt: "인류 최초의 철학자 탈레스. 그는 어떤 삶을 살았고, 어떻게 '만물의 근원은 물이다'는 대담한 문장에 이르렀을까? 일식 예측부터 올리브 압착기 일화까지, 안개 속의 인물을 좇는다.",
    card_image_url: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=400&h=530&fit=crop",
  },
};

async function main() {
  const args = process.argv.slice(2);
  const episodeNumbers = args.length > 0
    ? args.map(Number).filter(n => EPISODES[n])
    : Object.keys(EPISODES).map(Number);

  if (episodeNumbers.length === 0) {
    console.error("업로드할 화가 없습니다. 1~4 사이의 숫자를 입력하세요.");
    process.exit(1);
  }

  console.log(`📤 철학사 에피소드 업로드 시작: ${episodeNumbers.map(n => `${n}화`).join(", ")}`);

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
      `${SUPABASE_URL}/rest/v1/essays?title=eq.${encodeURIComponent(info.title)}&select=id`,
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
    console.log(`  ✅ ${info.title} → id: ${result[0]?.id || "ok"}`);
  }

  console.log("\n📋 완료!");
}

main().catch((e) => {
  console.error("오류:", e.message);
  process.exit(1);
});
