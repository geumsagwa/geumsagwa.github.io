// ─────────────────────────────────────────────────────────────────────────────
// ⚠ 봉인됨 (2026-09-20) — 이 스크립트는 낡았다. 그대로 실행하면 교차 링크가 깨진다.
//
//   권   이 스크립트가 덮어쓸 경로(5월판)          라이브 정본(교차 링크 경로)
//   1권  history/1779337728851_history1.epub   ≠  history/1779351819136_history1.epub
//   2권  history/history2.epub                 ≠  history/1779351860344_history2.epub
//
//   library.epub_path 를 위 5월판 경로로 되돌리므로 링크가 깨지고 본문도 회귀한다.
//   세계사 epub 업로드는 scripts/upload-history-epub.cjs 를 쓴다.
//   정말 이 스크립트를 써야 하면 --force-unseal 을 붙인다.
// ─────────────────────────────────────────────────────────────────────────────
if (!process.argv.includes("--force-unseal")) {
  console.error("[봉인됨] map/upload-all-epubs.mjs 는 낡아 교차 링크를 깨뜨립니다.");
  console.error("  세계사 epub 업로드 → node scripts/upload-history-epub.cjs [권...]");
  console.error("  강행하려면        → node map/upload-all-epubs.mjs --force-unseal");
  process.exit(1);
}

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
