// upload-history-epub.mjs
// 세계사 EPUB 교차 링크 반영 업로드 (Supabase Storage epubs 버킷)
//
// 사용법:
//   node scripts/upload-history-epub.cjs          # 1·2권 업로드
//   node scripts/upload-history-epub.cjs 1 2      # 지정 권만 업로드
//
// 주의: 교차 링크(reader.html)가 사용하는 Storage 경로에 정확히 덮어씁니다.
//       Storage 경로를 바꾸면 기존 링크가 깨지므로 신중하게 취급.
const fs = require('fs');
const path = require('path');
const { getSupabaseAdminConfig } = require('../_env.js');

const { supabaseUrl: SUPABASE_URL, serviceRoleKey: SERVICE_ROLE_KEY } = getSupabaseAdminConfig();

const EPUB_DIR = path.join(__dirname, '..', 'epub');

// 교차 링크 URL이 사용 중인 Storage 경로 (변경 금지)
const TARGETS = {
  1: { local: 'history1.epub', storage: 'history/1779351819136_history1.epub' },
  2: { local: 'history2.epub', storage: 'history/1779351860344_history2.epub' },
};

async function main() {
  const vols = process.argv.slice(2).map(Number).filter((n) => !Number.isNaN(n));
  const selected = vols.length ? vols : [1, 2];

  console.log('📤 세계사 EPUB 업로드 시작:', selected.map((v) => `${v}권`).join(', '));
  for (const v of selected) {
    const t = TARGETS[v];
    if (!t) {
      console.error(`  ✗ 모르는 권: ${v} (지원: ${Object.keys(TARGETS).join(', ')})`);
      process.exitCode = 1;
      continue;
    }

    const localPath = path.join(EPUB_DIR, t.local);
    if (!fs.existsSync(localPath)) {
      console.error(`  ✗ 로컬 파일 없음: ${t.local}`);
      process.exitCode = 1;
      continue;
    }

    const buf = fs.readFileSync(localPath);
    const res = await fetch(`${SUPABASE_URL}/storage/v1/object/epubs/${t.storage}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        apikey: SERVICE_ROLE_KEY,
        'Content-Type': 'application/epub+zip',
        'x-upsert': 'true',
        'cacheControl': 'no-cache',
      },
      body: buf,
    });

    if (!res.ok) {
      console.error(`  ✗ ${v}권 업로드 실패: ${res.status} ${await res.text()}`);
      process.exitCode = 1;
    } else {
      const j = await res.json();
      console.log(`  ✓ ${v}권 → ${t.storage} (${(buf.length / 1024 / 1024).toFixed(2)} MB)`);
    }
  }
  console.log('=== 완료 ===');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
