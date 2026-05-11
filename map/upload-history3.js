const fs = require('fs');
const path = require('path');
const { getSupabaseAdminConfig } = require('./_env');

const { supabaseUrl: SUPABASE_URL, serviceRoleKey: SERVICE_ROLE_KEY } = getSupabaseAdminConfig();
const BUCKET = 'epubs';
const DEFAULT_STORAGE_PATH = 'history/SET_ME_history3.epub';
const STORAGE_PATH = process.env.HISTORY3_EPUB_PATH || DEFAULT_STORAGE_PATH;
const LOCAL_FILE = path.join(__dirname, 'history3_with_maps.epub');

async function upload() {
  if (!STORAGE_PATH || STORAGE_PATH.includes('SET_ME')) {
    console.error(
      '[ERROR] `upload-history3.js` 상단의 DEFAULT_STORAGE_PATH를 library.epub_path와 같게 바꾸거나, HISTORY3_EPUB_PATH 환경 변수를 설정한 뒤 다시 실행해 주세요.'
    );
    process.exit(1);
  }

  const fileData = fs.readFileSync(LOCAL_FILE);
  console.log(`Uploading ${LOCAL_FILE} (${(fileData.length / 1024 / 1024).toFixed(2)} MB)...`);
  console.log('Target:', `${BUCKET}/${STORAGE_PATH}`);

  const url = `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${STORAGE_PATH}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/epub+zip',
      'x-upsert': 'true'
    },
    body: fileData
  });

  if (res.ok) {
    const data = await res.json();
    console.log('[OK] Upload successful:', JSON.stringify(data));
  } else {
    console.error(`[ERROR] Upload failed (${res.status}):`, await res.text());
    process.exit(1);
  }
}

upload().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
