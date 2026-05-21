// 삭제된 1권 library 레코드 복구 및 Storage 재확인
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { getSupabaseAdminConfig } from "./_env.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { supabaseUrl: SUPABASE_URL, serviceRoleKey: SERVICE_ROLE_KEY } = getSupabaseAdminConfig();
const BUCKET = "epubs";

const EPUB = {
  title: "이야기 세계사 1",
  local: path.join(__dirname, "../epub/history1.epub"),
  storagePath: "history/1779337728851_history1.epub",
  spineColor: "#8b4513",
  spineHeight: 245,
  spineWidth: 60,
};

async function uploadFile() {
  const fileData = fs.readFileSync(EPUB.local);
  const url = `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${EPUB.storagePath}`;
  console.log(`Storage PUT ${EPUB.storagePath} (${(fileData.length / 1024 / 1024).toFixed(2)} MB)`);
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/epub+zip",
      "x-upsert": "true",
    },
    body: fileData,
  });
  if (!res.ok) throw new Error(`upload ${res.status}: ${await res.text()}`);
  console.log("[OK] Storage");
}

async function insertLibrary() {
  const body = {
    title: EPUB.title,
    author: "임종탁",
    category: "history",
    epub_path: EPUB.storagePath,
    spine_color: EPUB.spineColor,
    spine_height: EPUB.spineHeight,
    spine_width: EPUB.spineWidth,
  };
  const res = await fetch(`${SUPABASE_URL}/rest/v1/library`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      apikey: SERVICE_ROLE_KEY,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`library POST ${res.status}: ${await res.text()}`);
  const data = await res.json();
  console.log("[OK] library INSERT", data[0]?.id, data[0]?.epub_path);
}

async function main() {
  await uploadFile();
  await insertLibrary();
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
