const fs = require('fs');
const path = require('path');
const { getSupabaseAdminConfig } = require('./_env');

const { supabaseUrl: SUPABASE_URL, serviceRoleKey: SERVICE_ROLE_KEY } = getSupabaseAdminConfig();

const LOCAL_FILE = path.join(__dirname, 'history2_with_maps.epub');
const STORAGE_PATH = 'history/1771473398277_history2.epub';

async function upload() {
  const fileData = fs.readFileSync(LOCAL_FILE);
  console.log(`Uploading ${LOCAL_FILE} (${(fileData.length/1024/1024).toFixed(2)} MB)...`);

  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/epubs/${STORAGE_PATH}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/epub+zip',
      'x-upsert': 'true'
    },
    body: fileData
  });

  if (res.ok) {
    console.log('[OK] Upload successful:', JSON.stringify(await res.json()));
  } else {
    console.error(`[ERROR] ${res.status}:`, await res.text());
  }
}

upload().catch(console.error);
