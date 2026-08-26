// publish-diary-to-blog.mjs
// Diary(일기) 원고를 Blog의 Essay(에세이) 또는 Book Review(북리뷰)로 옮기는 파이프라인
//
// 개요:
//   홈페이지의 diaries 테이블에 저장된 일기를 정리해 essays / book_reviews 테이블로 업로드한다.
//   일기 본문은 markdown 으로 변환하지 않고 원문 그대로 넣는다 (홈페이지 marked breaks:true 로 <br> 렌더링).
//   표시 날짜(created_at)는 일기 작성일로 설정해 카드 날짜와 제목이 일치하게 한다.
//
// 사용법:
//   node scripts/publish-diary-to-blog.mjs list [--from YYYY-MM-DD] [--to YYYY-MM-DD]
//       → 일기 목록 조회 (id · 작성일 · 본문 앞부분)
//
//   node scripts/publish-diary-to-blog.mjs export --date 2026-04-29 [--out 파일경로.md]
//       → 일기를 마크다운 파일로 내보낸다 (편집 후 업로드용). 기본 파일명: diary_YYYY-MM-DD.md
//
//   node scripts/publish-diary-to-blog.mjs essay --date 2026-04-29 [옵션...]
//       → 일기를 에세이로 업로드. 제목 미지정 시 "{YYYY.MM.DD}의 로그(Log)" 자동 생성
//
//   node scripts/publish-diary-to-blog.mjs review --date 2026-04-29 --book "책제목" --author "저자" [옵션...]
//       → 일기를 북리뷰로 업로드. --book 과 --author 는 필수
//
//   업로드 입력 소스는 --date(단건) 또는 --from/--to(범위) 또는 --file(로컬 마크다운 파일) 중 하나.
//   --file 사용 시 일기 조회 없이 해당 파일 내용을 본문으로 사용한다.
//
// 옵션:
//   --date YYYY-MM-DD        일기 작성일 (단건)
//   --from YYYY-MM-DD        날짜 범위 시작
//   --to YYYY-MM-DD          날짜 범위 끝
//   --file 경로.md            로컬 마크다운 파일을 본문으로 사용
//   --title "제목"            에세이 제목 (미지정: "{YYYY.MM.DD}의 로그(Log)")
//   --review-title "제목"     북리뷰 서평 제목 (미지정: --title 또는 책 제목)
//   --book "책 제목"          북리뷰 책 제목 (review 모드 필수)
//   --author "저자"           북리뷰 저자   (review 모드 필수)
//   --translator "역자"       북리뷰 역자
//   --year 2024               북리뷰 출판 연도
//   --publisher "출판사"      북리뷰 출판사
//   --excerpt "부제"          카드에 표시할 부제 (미지정: 본문 첫 문장 자동 추출)
//   --card-image "URL"        카드 배경 이미지 URL (미지정: null → 사이트 기본 이미지)
//   --update                  같은 제목이 이미 있어도 본문/부제 갱신
//   --dry-run                 실제 업로드 없이 적용될 값만 출력

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

try { process.loadEnvFile(); } catch {}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("환경변수 누락: .env 에 SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY 를 설정하세요.");
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── CLI 파싱 ──
const args = process.argv.slice(2);
const mode = args[0] || "help";

function getOpt(name) {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] !== undefined ? args[i + 1] : undefined;
}
const hasOpt = (name) => args.includes(name);
const boolOpt = (name) => (hasOpt(name) ? true : false);

// ── REST 헬퍼 ──
const headers = {
  apikey: SERVICE_ROLE_KEY,
  Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
};

async function restGet(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`조회 실패(${res.status}): ${body}`);
  }
  return res.json();
}

async function restPost(table, row, pref = "return=representation") {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers, Prefer: pref },
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`업로드 실패(${res.status}): ${body}`);
  }
  return res.json();
}

async function restPatch(table, id, row) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...headers, Prefer: "return=representation" },
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`갱신 실패(${res.status}): ${body}`);
  }
  return res.json();
}

// ── 일기 조회 ──
async function fetchDiaries({ date, from, to } = {}) {
  const params = new URLSearchParams({ select: "id,written_date,body,created_at" });
  params.set("order", "written_date");
  if (date) params.set("written_date", `eq.${date}`);
  if (from) params.set("written_date", `gte.${from}`);
  if (to) params.set("written_date", `lte.${to}`);
  return restGet(`${SUPABASE_URL}/rest/v1/diaries?${params.toString()}`);
}

// ── 본문/제목/부제 유틸 ──
function cleanBody(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
}

function autoExcerpt(body) {
  const firstLine = body.split("\n").find((l) => l.trim()) || "";
  const m = firstLine.match(/^(.+?[.!?。]\s*)/);
  return (m ? m[1] : firstLine).trim();
}

function formatDateDot(dateStr) {
  // "2026-04-29" → "2026.04.29"
  return dateStr.replace(/-/g, ".");
}

function defaultEssayTitle(dateStr) {
  return `${formatDateDot(dateStr)}의 로그(Log)`;
}

function diaryCreatedAt(dateStr) {
  // 카드 날짜가 일기 작성일로 표시되도록 해당일 00:00 UTC
  return `${dateStr}T00:00:00+00:00`;
}

// ── 본문 소스 결정 ──
async function resolveBody() {
  const file = getOpt("--file");
  if (file) {
    const text = await fs.readFile(file, "utf-8");
    return { body: cleanBody(text), source: `파일 ${file}` };
  }
  const date = getOpt("--date");
  const from = getOpt("--from");
  const to = getOpt("--to");
  if (!date && !from) {
    console.error("본문 소스가 없습니다. --date(단건) / --from~--to(범위) / --file(로컬 파일) 중 하나를 지정하세요.");
    process.exit(1);
  }
  const diaries = await fetchDiaries({ date, from, to });
  if (diaries.length === 0) {
    console.error(`일기를 찾을 수 없습니다. (날짜: ${date || `${from}~${to}`})`);
    process.exit(1);
  }
  if (diaries.length > 1 && !from) {
    // --date 로 조회했는데 여러 건이면 경고 후 모두 처리하되 소스에 날짜 표기
    console.warn(`⚠️  --date=${date} 조건에 일기가 ${diaries.length}건 있습니다. 모두 처리합니다.`);
  }
  return { diaries };
}

// ── 모드: help ──
function printHelp() {
  console.log(`사용법:
  node scripts/publish-diary-to-blog.mjs list [--from YYYY-MM-DD] [--to YYYY-MM-DD]
  node scripts/publish-diary-to-blog.mjs export --date YYYY-MM-DD [--out 경로.md]
  node scripts/publish-diary-to-blog.mjs essay  --date YYYY-MM-DD [옵션...]
  node scripts/publish-diary-to-blog.mjs review --date YYYY-MM-DD --book "책" --author "저자" [옵션...]

옵션:
  --date YYYY-MM-DD / --from YYYY-MM-DD / --to YYYY-MM-DD  일기 작성일(범위)
  --file 경로.md        로컬 마크다운 파일을 본문으로 사용 (일기 조회 대신)
  --title "제목"        에세이 제목 (미지정: "{YYYY.MM.DD}의 로그(Log)")
  --review-title "제목" 북리뷰 서평 제목
  --book "책 제목"      북리뷰 책 제목 (review 필수)
  --author "저자"       북리뷰 저자   (review 필수)
  --translator "역자" / --year 2024 / --publisher "출판사"
  --excerpt "부제"      카드 부제 (미지정: 첫 문장)
  --card-image "URL"    카드 이미지 (미지정: null → 기본 이미지)
  --update              기존 글 갱신
  --dry-run             실제 업로드 없이 값만 출력`);
}

// ── 모드: list ──
async function listDiaries() {
  const from = getOpt("--from");
  const to = getOpt("--to");
  const diaries = await fetchDiaries({ from, to });
  if (diaries.length === 0) {
    console.log("일기가 없습니다.");
    return;
  }
  console.log(`일기 ${diaries.length}건:`);
  for (const d of diaries) {
    const head = (d.body || "").split("\n").find((l) => l.trim()) || "";
    console.log(`  id=${d.id}  ${d.written_date}  | ${head}`);
  }
}

// ── 모드: export ──
async function exportDiary() {
  const date = getOpt("--date");
  if (!date) {
    console.error("export 모드는 --date 가 필요합니다.");
    process.exit(1);
  }
  const diaries = await fetchDiaries({ date });
  if (diaries.length === 0) {
    console.error(`일기를 찾을 수 없습니다: ${date}`);
    process.exit(1);
  }
  const out = getOpt("--out") || `diary_${date}.md`;
  await fs.writeFile(out, cleanBody(diaries[0].body) + "\n", "utf-8");
  console.log(`✅ 내보냄: ${out} (${diaries[0].written_date}, ${diaries.length}건 중 첫 번째)`);
}

// ── 모드: essay ──
async function uploadEssays() {
  const src = await resolveBody();
  const dryRun = boolOpt("--dry-run");
  const update = boolOpt("--update");
  const cardImage = getOpt("--card-image") || null;
  const excerptOpt = getOpt("--excerpt");
  const titleOpt = getOpt("--title");

  if (src.diaries) {
    for (const d of src.diaries) {
      const title = titleOpt || defaultEssayTitle(d.written_date);
      const excerpt = excerptOpt || autoExcerpt(d.body);
      const row = {
        title,
        excerpt,
        body_markdown: cleanBody(d.body),
        card_image_url: cardImage,
        series: null,
        episode_number: null,
        created_at: diaryCreatedAt(d.written_date),
      };
      await upsertEssay(title, row, { dryRun, update, source: `일기 ${d.written_date}` });
    }
  } else {
    const title = titleOpt || `일기의 로그(Log)`;
    const excerpt = excerptOpt || autoExcerpt(src.body);
    const row = {
      title,
      excerpt,
      body_markdown: src.body,
      card_image_url: cardImage,
      series: null,
      episode_number: null,
    };
    await upsertEssay(title, row, { dryRun, update, source: src.source });
  }
}

async function upsertEssay(title, row, { dryRun, update, source }) {
  const existing = await restGet(
    `${SUPABASE_URL}/rest/v1/essays?title=eq.${encodeURIComponent(title)}&select=id,title`
  );
  const ex = existing && existing.length > 0 ? existing[0] : null;

  if (ex && !update) {
    console.log(`⏭️  이미 업로드됨: ${title} (id: ${ex.id}) — --update 로 갱신 가능 (출처: ${source})`);
    return;
  }

  if (dryRun) {
    console.log(`[dry-run] ${ex ? "UPDATE" : "INSERT"} 에세이 "${title}" (출처: ${source})`);
    console.log(`    excerpt: ${row.excerpt}`);
    console.log(`    본문 ${row.body_markdown.length}자`);
    return;
  }

  let result;
  if (ex) {
    result = await restPatch("essays", ex.id, row);
    console.log(`✅ 에세이 갱신: ${title} (id: ${ex.id}, 출처: ${source})`);
  } else {
    result = await restPost("essays", row);
    const r = result[0] || result;
    console.log(`✅ 에세이 업로드: ${title} (id: ${r.id}, 출처: ${source})`);
  }
}

// ── 모드: review ──
async function uploadReviews() {
  const book = getOpt("--book");
  const author = getOpt("--author");
  if (!book || !author) {
    console.error("review 모드는 --book(책 제목)과 --author(저자)가 필수입니다.");
    process.exit(1);
  }
  const src = await resolveBody();
  const dryRun = boolOpt("--dry-run");
  const update = boolOpt("--update");
  const cardImage = getOpt("--card-image") || null;
  const excerptOpt = getOpt("--excerpt");
  const reviewTitleOpt = getOpt("--review-title") || getOpt("--title");

  if (src.diaries) {
    for (const d of src.diaries) {
      const reviewTitle = reviewTitleOpt || `${formatDateDot(d.written_date)} — ${book}`;
      const excerpt = excerptOpt || autoExcerpt(d.body);
      const row = {
        title: book,
        author,
        translator: getOpt("--translator") || null,
        year: getOpt("--year") ? Number(getOpt("--year")) : null,
        publisher: getOpt("--publisher") || null,
        review_title: reviewTitle,
        excerpt,
        body_markdown: cleanBody(d.body),
        card_image_url: cardImage,
        created_at: diaryCreatedAt(d.written_date),
      };
      await upsertReview(reviewTitle, row, { dryRun, update, source: `일기 ${d.written_date}` });
    }
  } else {
    const reviewTitle = reviewTitleOpt || `서평 — ${book}`;
    const excerpt = excerptOpt || autoExcerpt(src.body);
    const row = {
      title: book,
      author,
      translator: getOpt("--translator") || null,
      year: getOpt("--year") ? Number(getOpt("--year")) : null,
      publisher: getOpt("--publisher") || null,
      review_title: reviewTitle,
      excerpt,
      body_markdown: src.body,
      card_image_url: cardImage,
    };
    await upsertReview(reviewTitle, row, { dryRun, update, source: src.source });
  }
}

async function upsertReview(reviewTitle, row, { dryRun, update, source }) {
  const existing = await restGet(
    `${SUPABASE_URL}/rest/v1/book_reviews?review_title=eq.${encodeURIComponent(reviewTitle)}&select=id,review_title`
  );
  const ex = existing && existing.length > 0 ? existing[0] : null;

  if (ex && !update) {
    console.log(`⏭️  이미 업로드됨: ${reviewTitle} (id: ${ex.id}) — --update 로 갱신 가능 (출처: ${source})`);
    return;
  }

  if (dryRun) {
    console.log(`[dry-run] ${ex ? "UPDATE" : "INSERT"} 북리뷰 "${reviewTitle}" (책: ${row.title} / ${row.author}, 출처: ${source})`);
    console.log(`    excerpt: ${row.excerpt}`);
    console.log(`    본문 ${row.body_markdown.length}자`);
    return;
  }

  let result;
  if (ex) {
    result = await restPatch("book_reviews", ex.id, row);
    console.log(`✅ 북리뷰 갱신: ${reviewTitle} (id: ${ex.id}, 책: ${row.title} / ${row.author}, 출처: ${source})`);
  } else {
    result = await restPost("book_reviews", row);
    const r = result[0] || result;
    console.log(`✅ 북리뷰 업로드: ${reviewTitle} (id: ${r.id}, 책: ${row.title} / ${row.author}, 출처: ${source})`);
  }
}

// ── 실행 ──
async function main() {
  switch (mode) {
    case "list":   return listDiaries();
    case "export": return exportDiary();
    case "essay":  return uploadEssays();
    case "review": return uploadReviews();
    case "--help":
    case "-h":
    case "help":
    default:
      printHelp();
  }
}

main().catch((e) => {
  console.error("오류:", e.message);
  process.exit(1);
});

