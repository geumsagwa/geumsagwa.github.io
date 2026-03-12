const fs = require('fs');
const path = require('path');
const { getSupabaseAdminConfig } = require('./_env');

const { supabaseUrl: SUPABASE_URL, serviceRoleKey: SERVICE_ROLE_KEY } = getSupabaseAdminConfig();
const BUCKET = 'epubs';
const STORAGE_PATH = 'history/1771227564797_history1.epub';
const LOCAL_FILE = path.join(__dirname, 'history1_with_maps.epub');

async function upload() {
  const fileData = fs.readFileSync(LOCAL_FILE);
  console.log(`Uploading ${LOCAL_FILE} (${(fileData.length/1024/1024).toFixed(2)} MB)...`);

  const url = `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${STORAGE_PATH}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/epub+zip',
      'x-upsert': 'true'
    },
    body: fileData
  });

  if (res.ok) {
    const data = await res.json();
    console.log('[OK] Upload successful:', JSON.stringify(data));
  } else {
    const text = await res.text();
    console.error(`[ERROR] Upload failed (${res.status}):`, text);
    process.exit(1);
  }
}

upload().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
