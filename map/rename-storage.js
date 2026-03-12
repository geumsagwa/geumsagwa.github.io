const fs = require('fs');
const { getSupabaseAdminConfig } = require('./_env');

const { supabaseUrl: SUPABASE_URL, serviceRoleKey: SERVICE_ROLE_KEY } = getSupabaseAdminConfig();
const headers = {
  'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
  'apikey': SERVICE_ROLE_KEY,
  'Content-Type': 'application/json'
};

const renames = [
  { old: 'history/1771227564797_book1.epub', new: 'history/1771227564797_history1.epub', id: '6996e8c6-6ffe-44fa-bddb-eea0e0042d9e' },
  { old: 'history/1771473398277_book2.epub', new: 'history/1771473398277_history2.epub', id: '2fbd8702-4505-4302-a942-460c0045805c' }
];

async function run() {
  for (const r of renames) {
    // 1) Download current file
    console.log(`Downloading ${r.old}...`);
    const dlRes = await fetch(`${SUPABASE_URL}/storage/v1/object/epubs/${r.old}`, {
      headers: { 'Authorization': `Bearer ${SERVICE_ROLE_KEY}` }
    });
    if (!dlRes.ok) { console.log(`  FAIL download: ${dlRes.status} ${await dlRes.text()}`); continue; }
    const buf = Buffer.from(await dlRes.arrayBuffer());
    console.log(`  Downloaded: ${(buf.length/1024/1024).toFixed(2)} MB`);

    // 2) Upload with new name
    console.log(`Uploading as ${r.new}...`);
    const upRes = await fetch(`${SUPABASE_URL}/storage/v1/object/epubs/${r.new}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/epub+zip',
        'x-upsert': 'true'
      },
      body: buf
    });
    if (!upRes.ok) { console.log(`  FAIL upload: ${upRes.status} ${await upRes.text()}`); continue; }
    console.log(`  Upload OK: ${JSON.stringify(await upRes.json())}`);

    // 3) Delete old file
    console.log(`Deleting ${r.old}...`);
    const delRes = await fetch(`${SUPABASE_URL}/storage/v1/object/epubs`, {
      method: 'DELETE',
      headers,
      body: JSON.stringify({ prefixes: [r.old] })
    });
    console.log(`  Delete status: ${delRes.status}`);

    // 4) Update DB record
    console.log(`Updating library table (id: ${r.id})...`);
    const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/library?id=eq.${r.id}`, {
      method: 'PATCH',
      headers: { ...headers, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ epub_path: r.new })
    });
    console.log(`  DB update status: ${dbRes.status}`);
    console.log('');
  }
  console.log('=== Done ===');
}

run().catch(console.error);
