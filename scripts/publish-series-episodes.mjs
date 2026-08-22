// publish-series-episodes.mjs
// 이야기 철학사 · 심리학사 등 시리즈 에피소드를 Supabase essays 테이블에
// series + episode_number 를 지정해 업로드하는 공용 파이프라인
//
// 사용법:
//   node scripts/publish-series-episodes.mjs <시리즈키> [화번호...]
//   예) node scripts/publish-series-episodes.mjs philosophy          # 철학사 전체 화
//   예) node scripts/publish-series-episodes.mjs philosophy 1 2      # 철학사 1·2화만
//   예) node scripts/publish-series-episodes.mjs psychology 1 2      # 심리학사 1·2화만
//   node scripts/publish-series-episodes.mjs list                    # 시리즈키 목록
//
// 새 화 확정 시 해당 시리즈의 episodes 에 화 번호·파일명·제목·excerpt·카드 이미지를 추가하고 실행.
// 이미 업로드된 화는 title 중복 체크로 스킵된다.

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

// ── 시리즈 정의 ──
// 새 시리즈가 생기면 여기에 키 하나를 추가하면 된다 (예: philosophy, psychology, worldhistory ...).
const SERIES_MAP = {
  philosophy: {
    series: "철학사",
    volumeDir: "F:/wiki/manuscripts/philosophy/volume1",
    episodes: {
      1: {
        file: "1권_1화_01_철학의-탄생.md",
        title: "제1화 철학의 탄생",
        excerpt: "철학은 그리스에서 태어났다. 인류 최초의 학문이자 모든 학문의 토대인 철학은 어떻게 시작되었는가? 호메로스의 서사시에서 소크라테스의 대화까지, 그리스인의 정신적 여정을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=530&fit=crop",
      },
      2: {
        file: "1권_2화_01_신화가-문학이-되다.md",
        title: "제2화 신화가 문학이 되다 — 호메로스에서 비극까지",
        excerpt: "탈레스가 '만물의 근원은 물이다'라고 말하기까지, 그리스인들은 수백 년에 걸쳐 세상을 이야기하는 방식을 바꿔 왔다. 눈먼 시인 호메로스의 영웅들, 신들의 계보를 정리한 헤시오도스, '나는'이라고 처음 노래한 사포와 아르킬로코스, 무대 위에서 인간의 갈등을 연기한 비극까지 — 이야기 속에서 신이 차지하던 자리가 줄고 인간의 물음이 들어서는 과정을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=530&fit=crop",
      },
      3: {
        file: "1권_3화_01_왜-그리스인가.md",
        title: "제3화 왜 그리스인가? - 밀레토스의 기적 -",
        excerpt: "왜 하필 그리스, 그중에서도 밀레토스라는 작은 도시에서 철학이 태어났을까? 이집트와 바빌로니아의 선진 문명을 제치고 그리스에서 로고스가 꽃피울 수 있었던 조건들을 하나씩 풀어본다.",
        card_image_url: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=400&h=530&fit=crop",
      },
      4: {
        file: "1권_4화_01_밀레토스-학파.md",
        title: "제4화 탈레스 — 최초의 철학자",
        excerpt: "인류 최초의 철학자 탈레스. 그는 어떤 삶을 살았고, 어떻게 '만물의 근원은 물이다'는 대담한 문장에 이르렀을까? 일식 예측부터 올리브 압착기 일화까지, 안개 속의 인물을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=400&h=530&fit=crop",
      },
    },
  },
  psychology: {
    series: "심리학사",
    volumeDir: "F:/wiki/manuscripts/psychology/volume1",
    episodes: {
      1: {
        file: "1권_1화_01_심리학이라는-이름-psyche의-모험.md",
        title: "제1화 심리학이라는 이름 — psyche의 모험",
        excerpt: "프쉬케(psychē)와 로고스(logos), 영혼과 학문. '심리학'이라는 세 글자에 삼천 년에 가까운 여정이 숨어 있다. 숨결이 영혼이 되고, 영혼이 마음이 되고, 마음이 과학이 되기까지 — psyche의 모험을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=530&fit=crop&crop=center",
      },
      2: {
        file: "1권_2화_01_아리스토텔레스-영혼론의-지혜.md",
        title: "제2화 아리스토텔레스 — 『영혼론』의 지혜",
        excerpt: "세계 최초로 '영혼'이라는 주제를 하나의 학문으로 세운 아리스토텔레스. 『영혼론』에서 마음과 몸, 감각과 기억, 지성과 감정이 어떻게 다루어졌는지 — 심리학 최초의 교과서를 펼쳐 본다.",
        card_image_url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=530&fit=crop&crop=center",
      },
      3: {
        file: "1권_3화_01_영혼에서-마음으로.md",
        title: "제3화 영혼에서 마음으로 — 중세와 르네상스",
        excerpt: "영혼의 이야기가 신학의 그늘 아래로 들어가던 천 년. 아우구스티누스가 『고백록』에서 연 내면의 문은 아랍 세계의 지혜의 집을 지나 아퀴나스의 『신학대전』을 거쳐, 르네상스의 인간과 해부 극장의 시체 위로 이어진다. psyche가 '영혼'의 그림자를 벗고 '마음'의 실마리를 찾아가는 여정을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=530&fit=crop&crop=center",
      },
    },
  },
};

async function main() {
  const args = process.argv.slice(2);
  const key = args[0];

  // 시리즈키 없음 / list / --help → 사용법 출력
  if (!key || key === "list" || key === "--help" || key === "-h") {
    console.log("사용법: node scripts/publish-series-episodes.mjs <시리즈키> [화번호...]");
    console.log("시리즈키:");
    for (const [k, v] of Object.entries(SERIES_MAP)) {
      const eps = Object.keys(v.episodes).map(Number);
      console.log(`  ${k}  →  ${v.series} (${eps.join(",")}화 · ${v.volumeDir})`);
    }
    console.log("예: node scripts/publish-series-episodes.mjs philosophy 1 2");
    if (key) process.exit(0);
    process.exit(1);
  }

  const seriesInfo = SERIES_MAP[key];
  if (!seriesInfo) {
    console.error(`알 수 없는 시리즈키: ${key}. 가능한 키: ${Object.keys(SERIES_MAP).join(", ")}`);
    process.exit(1);
  }

  const { series, volumeDir, episodes } = seriesInfo;
  const episodeNumbers = args.length > 1
    ? args.slice(1).map(Number).filter((n) => episodes[n])
    : Object.keys(episodes).map(Number);

  if (episodeNumbers.length === 0) {
    console.error(`업로드할 화가 없습니다. 현재 등록: ${Object.keys(episodes).join(", ")}화`);
    process.exit(1);
  }

  console.log(`📤 ${series} 에피소드 업로드 시작: ${episodeNumbers.map((n) => `${n}화`).join(", ")}`);

  for (const ep of episodeNumbers) {
    const info = episodes[ep];
    const filePath = path.join(volumeDir, info.file);

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
      console.log(`  ⏭️  이미 업로드됨: ${info.title} (id: ${existing[0].id}, series: ${existing[0].series ?? "(없음)"}, ep: ${existing[0].episode_number ?? "-"})`);
      continue;
    }

    const body = {
      title: info.title,
      excerpt: info.excerpt,
      body_markdown: bodyMarkdown,
      card_image_url: info.card_image_url,
      series,
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
