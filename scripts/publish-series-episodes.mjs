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
        title: "제1화 철학의 탄생 — \"왜?\"라고 묻기 시작한 사람들",
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
      5: {
        file: "1권_5화_01_피타고라스-수의-신비.md",
        title: "제5화 피타고라스 — 수(數)의 신비",
        excerpt: "만져지고 보이는 물질이 아니라, 만져지지도 보이지도 않는 수와 비례 그 자체가 세계의 근원이라 말한 사람, 피타고라스. 수학자이자 신비주의자라는 두 얼굴을 가진 그가 세운 형제단과 '수의 신비'를 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=530&fit=crop",
      },
      6: {
        file: "1권_6화_01_헤라클레이토스-흐름과-로고스.md",
        title: "제6화 헤라클레이토스 — 흐름과 로고스",
        excerpt: "세상은 흐른다. 그리고 그 흐름 뒤에는 로고스라는 이치가 질서를 만든다. '같은 강물에 두 번 들어갈 수 없다'고 말한 에페소스의 어두운 철학자 헤라클레이토스. 변화와 질서를 한 몸에 품은 불의 철학을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=530&fit=crop",
      },
      7: {
        file: "1권_7화_01_파르메니데스-존재의-길.md",
        title: "제7화 파르메니데스 — 존재의 길",
        excerpt: "세상의 변화와 운동은 정말 존재할까? '있는 것은 있고, 없는 것은 없다'고 단언한 엘레아의 파르메니데스는 생성과 소멸, 운동과 다원성을 하나의 완전한 존재 앞에 부정했다. 태어나지 않고 죽지 않으며, 전체이고 균일하며, 움직이지 않고 완전한 존재 — 서양 존재론의 탄생을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=530&fit=crop",
      },
      8: {
        file: "1권_8화_01_제논과-다원론자들-역설과-원자.md",
        title: "제8화 제논과 다원론자들 — 역설과 원자",
        excerpt: "파르메니데스의 문 앞에서 철학은 처음으로 '논리'라는 무기를 시험한다. 스승의 존재를 지키기 위해 역설이라는 무기를 든 제논은 여럿과 운동을 믿는 사람들을 논리로 궁지에 몰아넣고, 존재를 지키면서도 변화하는 세계를 다시 살려낸 다원론자들 — 시칠리아의 엠페도클레스, 아테네로 간 아낙사고라스, 원자론을 세운 레우키포스와 데모크리토스 — 은 변화와 여럿을 설명할 새 길을 모색한다. 하나냐 여럿이냐, 멈춤이냐 운동이냐. 철학이 '증명'이라는 말을 배우는 순간을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=530&fit=crop",
      },
      9: {
        file: "1권_9화_01_소피스트와-소크라테스-무지의-지혜.md",
        title: "제9화 소피스트와 소크라테스 — 무지의 지혜",
        excerpt: "말이 권력이 된 아테네의 광장, 지혜를 파는 소피스트들이 나타났다. '인간은 만물의 척도'라던 프로타고라스의 상대주의 앞에, 석공의 아들은 '나는 아무것도 모른다'고 말했다. 진리를 가르친다고 자처한 소피스트들과, 안다고 믿는 사람들의 무지를 드러내며 질문을 멈추지 않은 소크라테스. 두 힘이 부딪치는 광장에서 서양 철학의 방향을 바꾼 대결이 시작된다. 정의와 용기, 앎과 덕, 그리고 무지의 지혜 — 물음을 지켜낸 한 사람의 재판과 죽음까지 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=400&h=530&fit=crop",
      },
      10: {
        file: "1권_10화_01_플라톤-이데아의-세계.md",
        title: "제10화 플라톤 — 이데아의 세계",
        excerpt: "스승 소크라테스가 독배를 마시던 날, 제자 플라톤이 그 광경을 지켜보고 있었다. '이 세상은 과연 어떻게 돌아가는가'라는 질문은 서양 철학 전체의 방향을 바꾸었다. 보이는 세계 너머에 완전한 세계가 있다는 이데아의 세계 — 두 세계와 동굴의 비유, 배움은 기억이라는 상기설, 영혼 불멸의 논증, 그리고 정의로운 국가까지. 아테네 학당의 주인공이 세운 거대한 세계를 함께 걸어 본다.",
        card_image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=530&fit=crop",
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
      4: {
        file: "1권_4화_01_데카르트-몸과-마음의-극장.md",
        title: "제4화 데카르트 — 몸과 마음의 극장",
        excerpt: "난로방의 밤, 모든 것을 의심하기로 한 청년이 있었다. '나는 생각한다, 고로 나는 존재한다.' 데카르트는 의심 속에서 마음의 존재를 발견하고, 마음을 '생각하는 실체', 몸을 '공간을 차지하는 실체'로 갈라놓았다. 심신 이원론과 반사, 동물 정기와 정념의 극장 — 근대 심리학이 태어나는 무대를 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=530&fit=crop",
      },
      5: {
        file: "1권_5화_01_스피노자와-라이프니츠-평행선의-마음.md",
        title: "제5화 스피노자와 라이프니츠 — 평행선의 마음",
        excerpt: "암스테르담의 조용한 렌즈 연마공 스피노자와, 유럽 곳곳을 오가며 시계처럼 정확한 세계를 설계한 라이프니츠. 데카르트가 갈라놓은 마음과 몸을 다시 잇기 위한 두 개의 답, 평행론과 예정조화. 그리고 지각할 수 없는 미세한 지각들이 쌓여 만드는 의식 — 무의식의 씨앗이 심어지는 자리.",
        card_image_url: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=530&fit=crop",
      },
      6: {
        file: "1권_6화_01_로크-백지-위에-쓰이는-경험.md",
        title: "제6화 로크 — 백지 위에 쓰이는 경험",
        excerpt: "링턴의 소년 존 로크는 태어날 때의 마음이 하얀 종이와 같다고 말했다. 경험이 그 위에 글을 써 내려간다. 감각과 반성, 단순 관념과 복합 관념, 몰리뉴의 문제, 기억과 정체성 — 마음이 경험으로부터 내용을 쌓아가는 방식을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=530&fit=crop",
      },
      7: {
        file: "1권_7화_01_흄-관념의-흐름과-습관.md",
        title: "제7화 흄 — 관념의 흐름과 습관",
        excerpt: "스코틀랜드 에든버러의 청년 데이비드 흄은 마음의 모든 내용이 '인상과 관념'이라는 두 재료로 이루어진다고 말했다. 관념들은 유사·인접·인과의 연합으로 이어지고, 원인에 대한 믿음조차 '습관'이라는 심리적 기제로 설명된다. 자아는 지각의 다발, 이성은 정념의 하인. 경험에서 출발한 모든 지식의 바닥을 묻는 회의의 끝에서, 흄이 '인간의 과학'을 꿈꾼 여정을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=530&fit=crop",
      },
      8: {
        file: "1권_8화_01_칸트-마음의-구조를-묻다.md",
        title: "제8화 칸트 — 마음의 구조를 묻다",
        excerpt: "시계처럼 규칙적으로 사는 쾨니히스베르크의 철학자 칸트는 흄의 '독단적 잠'을 깨우는 일깨움 속에서, 경험이 성립하기 위한 조건을 묻기 시작한다. 시간과 공간이라는 감성의 틀, 열두 개의 범주라는 오성의 틀, 도식과 종합과 통각 — 세계를 비추는 거울이 아니라 세계를 짓는 손으로서의 능동적 마음. 칸트가 남긴 이중적 유산(수학 불가 판정과 인간학)을 통해, 심리학이 '마음을 재는 학문'이 되기 위한 도전의 문턱을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=530&fit=crop",
      },
      9: {
        file: "1권_9화_01_마음의-측정-시도-골상학과-개인차.md",
        title: "제9화 마음의 측정 시도 — 골상학과 개인차",
        excerpt: "두개골의 모양으로 성격과 재능을 읽으려 한 사람들이 있었다. 프란츠 요제프 갈은 정신병원과 감옥에서 머리를 만지며 '마음은 하나가 아니라 스물일곱 개의 기관이 모인 지도'라고 말한다. 오스트리아에서 쫓겨난 발상은 슈프루츠하임이 '골상학'이라는 이름을 붙여 유럽으로 퍼뜨리고, 에든버러의 변호사 조지 콤은 『인간의 구조』로 20만 부의 열풍을 일으킨다. 플루랑스의 실험과 인종주의의 그림자 아래 무너진 지도는, 브로카의 해부대 위에서 '마음은 뇌의 어디에 있는가'라는 과학적 물음으로 다시 태어난다. 마음을 재려는 최초의 시도 — 골상학이 심리학이 실험실에 들어서는 길을 준비한 여정을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=400&h=530&fit=crop",
      },
      10: {
        file: "1권_10화_01_생리학의-반란-헬름홀츠와-신경-전도.md",
        title: "제10화 생리학의 반란 — 헬름홀츠와 신경 전도",
        excerpt: "1849년, 쾨니히스베르크의 한 실험실. 헤르만 폰 헬름홀츠는 개구리의 좌골 신경에 전기 자극을 주고, 신호가 근육에 닿는 시간을 쟀다. 결과는 초당 24.6~38.4미터. 신경 신호는 무한히 빠르지 않았다. '마음의 작동이 시간을 갖는다'는 사실의 증명은, 별을 관측하던 천문학자들의 반응 시간 발견을 거쳐 생기론과의 전쟁, 안검경과 삼색설, 무의식적 추론과 소리의 물리학을 지나 하이델베르크의 젊은 조교 분트의 라이프치히 실험실로 이어진다. 두개골의 공간에서 시간으로, 그리고 실험실로 옮겨 간 마음의 측정 — 실험 심리학이 태어나는 순간을 좇는다.",
        card_image_url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=530&fit=crop",
      },
    },
  },
};

// 마크다운의 상대경로 이미지(![alt](파일명))를 base64 data URL로 치환 (도판 인라인)
async function inlineImagesBase64(markdown, baseDir) {
  const regex = /!\[([^\]]*)\]\(([^)]*)\)/g;
  let result = markdown;
  const matches = [...markdown.matchAll(regex)];
  for (const m of matches) {
    const alt = m[1];
    const src = m[2];
    if (src.startsWith("data:")) continue;
    const filePath = path.resolve(baseDir, src);
    try {
      const buf = await fs.readFile(filePath);
      const mime = src.toLowerCase().endsWith(".png") ? "image/png" : "image/jpeg";
      const dataUrl = `data:${mime};base64,${buf.toString("base64")}`;
      result = result.split(`![${alt}](${src})`).join(`![${alt}](${dataUrl})`);
      console.log(`  🖼️  이미지 인라인: ${src} (${buf.length} bytes)`);
    } catch (e) {
      console.error(`  ⚠️ 이미지 인라인 실패: ${src} (${e.message})`);
    }
  }
  return result;
}

async function main() {
  const args = process.argv.slice(2);
  const isUpdateMode = args.includes("--update");
  const key = args.find((a) => !a.startsWith("--"));

  // 시리즈키 없음 / list / --help → 사용법 출력
  if (!key || key === "list" || key === "--help" || key === "-h") {
    console.log("사용법: node scripts/publish-series-episodes.mjs <시리즈키> [화번호...] [--update]");
    console.log("  --update: 이미 업로드된 화도 본문/excerpt/카드 갱신");
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

    // 상대경로 이미지 → base64 data URL 인라인 (홈페이지 렌더링 보장, §8.5 규칙 6)
    bodyMarkdown = await inlineImagesBase64(bodyMarkdown, volumeDir);

    // title 중복 체크
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
    const existingRow = existing && existing.length > 0 ? existing[0] : null;

    // --update 옵션: 이미 업로드된 에피소드도 body/excerpt/card 갱신
    if (existingRow && !isUpdateMode) {
      console.log(`  ⏭️  이미 업로드됨: ${info.title} (id: ${existingRow.id}, series: ${existingRow.series ?? "(없음)"}, ep: ${existingRow.episode_number ?? "-"}) — --update 옵션으로 갱신 가능`);
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

    if (existingRow) {
      // UPDATE
      const res = await fetch(`${SUPABASE_URL}/rest/v1/essays?id=eq.${existingRow.id}`, {
        method: "PATCH",
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
        console.error(`  ❌ ${info.title} 갱신 실패: ${err}`);
        continue;
      }
      const result = await res.json();
      console.log(`  ✅ ${info.title} → 갱신 (id: ${result[0]?.id ?? existingRow.id}, series=${result[0]?.series ?? series}, ep=${result[0]?.episode_number ?? ep})`);
      continue;
    }

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
