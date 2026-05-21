import fs from "node:fs";
import path from "node:path";
import { getSupabaseAdminConfig } from "./_env.js";

const { supabaseUrl: SUPABASE_URL, serviceRoleKey: SERVICE_ROLE_KEY } = getSupabaseAdminConfig();
const BUCKET = "epubs";

const EPUBS = [
  { 
    title: "이야기 세계사 1", 
    local: "../epub/history1.epub", 
    storagePath: "history/1779337728851_history1.epub",
    spineColor: "#8b4513",
    spineHeight: 245,
    spineWidth: 60,
    existingId: null
  },
  { 
    title: "이야기 세계사 2", 
    local: "../epub/history2.epub", 
    storagePath: "history/history2.epub",
    spineColor: "#4a6fa5",
    spineHeight: 245,
    spineWidth: 60
  },
  { 
    title: "이야기 세계사 3", 
    local: "../epub/history3.epub", 
    storagePath: "history/history3.epub",
    spineColor: "#2d5a27",
    spineHeight: 245,
    spineWidth: 60
  },
  { 
    title: "이야기 세계사 4", 
    local: "../epub/history4.epub", 
    storagePath: "history/history4.epub",
    spineColor: "#6b3a5a",
    spineHeight: 245,
    spineWidth: 60
  },
];

async function uploadFile(epub) {
  const localPath = path.resolve(path.join(import.meta.dirname, epub.local));
  const fileData = fs.readFileSync(localPath);
  const url = `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${epub.storagePath}`;
  
  console.log(`Uploading ${epub.title} (${(fileData.length / 1024 / 1024).toFixed(2)} MB)...`);
  console.log(`  -> ${BUCKET}/${epub.storagePath}`);

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/epub+zip",
      "x-upsert": "true"
    },
    body: fileData
  });

  if (!res.ok) {
    console.error(`  [ERROR] Upload failed (${res.status}):`, await res.text());
    return false;
  }
  console.log("  [OK] Upload successful");
  return true;
}

async function upsertLibrary(epub) {
  const body = {
    title: epub.title,
    author: "임종탁",
    category: "history",
    epub_path: epub.storagePath,
    spine_color: epub.spineColor,
    spine_height: epub.spineHeight,
    spine_width: epub.spineWidth,
  };

  let url, method;
  if (epub.existingId) {
    url = `${SUPABASE_URL}/rest/v1/library?id=eq.${epub.existingId}`;
    method = "PATCH";
    console.log(`  -> Updating library record: ${epub.existingId}`);
    const check = await fetch(
      `${SUPABASE_URL}/rest/v1/library?id=eq.${epub.existingId}&select=id`,
      { headers: { Authorization: `Bearer ${SERVICE_ROLE_KEY}`, apikey: SERVICE_ROLE_KEY } }
    );
    const rows = check.ok ? await check.json() : [];
    if (!rows.length) {
      console.log("  -> Record missing; will INSERT instead");
      url = `${SUPABASE_URL}/rest/v1/library`;
      method = "POST";
    }
  } else {
    // Insert new record
    url = `${SUPABASE_URL}/rest/v1/library`;
    method = "POST";
    console.log("  -> Creating library record");
  }

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "apikey": SERVICE_ROLE_KEY,
      "Content-Type": "application/json",
      Prefer: method === "POST" ? "return=representation" : ""
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    console.error(`  [ERROR] Library ${method} failed (${res.status}):`, await res.text());
    return false;
  }
  
  if (method === "POST") {
    const data = await res.json();
    console.log(`  [OK] Library record created: ${data[0]?.id || "ok"}`);
  } else {
    console.log("  [OK] Library record updated");
  }
  return true;
}

async function main() {
  console.log("=== EPUB 일괄 업로드 ===\n");

  for (const epub of EPUBS) {
    console.log(`--- ${epub.title} ---`);
    const uploaded = await uploadFile(epub);
    if (!uploaded) continue;
    const libResult = await upsertLibrary(epub);
    console.log("");
  }

  console.log("=== 완료 ===");
}

main().catch(e => { console.error("Error:", e.message); process.exit(1); });
