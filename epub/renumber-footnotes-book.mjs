// history1/2 EPUB 각주를 책 전체 연속 번호(1,2,3…)로 재할당
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const JSZip = require("../map/node_modules/jszip");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGETS = ["history1.epub", "history2.epub"];

const FN_STYLE_SECTION =
  'style="font-size:0.8em;line-height:1.4;margin:25px 20px 0 20px;padding-top:20px;border-top:1px solid #ddd;"';
const FN_STYLE_OL = 'style="padding-left:2em;"';
const FN_STYLE_LI = 'style="margin-bottom:0;font-size:1em;"';
const FN_STYLE_A = 'style="text-decoration:none;color:inherit;border:none;"';
const FN_STYLE_REF = 'style="text-decoration:none;color:inherit;"';

function stripFootnotesSection(html) {
  return html.replace(/<section\s+class="footnotes"[^>]*>[\s\S]*?<\/section>/gi, "");
}

function stripEndnotesSections(html) {
  return html.replace(/<section\s+class="endnotes-section"[^>]*>[\s\S]*?<\/section>/gi, "");
}

function collectRefHits(html, fileKey) {
  const hits = [];
  const re = /<a\b[^>]*>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const tag = m[0];
    const end = tag.match(/\bhref=["']endnotes\.xhtml#note(\d+)["']/i);
    if (end) {
      hits.push({ index: m.index, key: `endnotes::${end[1]}` });
      continue;
    }
    const rid = tag.match(/\bid=["']ref(\d+)["']/i);
    const hrefNote =
      tag.match(/\bhref=["']#note(\d+)["']/i) || tag.match(/\bhref=["']#fn(\d+)["']/i);
    const n = rid?.[1] || hrefNote?.[1];
    if (n) hits.push({ index: m.index, key: `${fileKey}::${n}` });
  }
  return hits.sort((a, b) => a.index - b.index);
}

function collectNoteDefsInFootnotes(html, fileKey) {
  const keys = [];
  const sec = html.match(/<section\s+class="footnotes"[^>]*>([\s\S]*?)<\/section>/i);
  if (!sec) return keys;
  const re = /<li\s+id=["']note(\d+)["']/gi;
  let m;
  while ((m = re.exec(sec[1])) !== null) keys.push(`${fileKey}::${m[1]}`);
  return keys;
}

function collectNoteDefsInEndnotes(html) {
  const keys = [];
  const re = /<li\s+id=["']note(\d+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) keys.push(`endnotes::${m[1]}`);
  return keys;
}

function awaitEntry(zip, href) {
  const e = zip.file(href);
  if (!e) return "";
  return e.async("string");
}

async function buildGlobalMapAsync(spineFiles, zip) {
  const order = [];
  const seen = new Set();
  const push = (key) => {
    if (!seen.has(key)) {
      seen.add(key);
      order.push(key);
    }
  };

  for (const { href, fileKey } of spineFiles) {
    if (fileKey === "endnotes") continue;
    const html = await awaitEntry(zip, href);
    const body = stripEndnotesSections(stripFootnotesSection(html));
    for (const h of collectRefHits(body, fileKey)) push(h.key);
  }

  for (const { href, fileKey } of spineFiles) {
    if (fileKey === "endnotes") continue;
    const html = await awaitEntry(zip, href);
    for (const k of collectNoteDefsInFootnotes(html, fileKey)) push(k);
  }

  const end = spineFiles.find((s) => s.fileKey === "endnotes");
  if (end) {
    const html = await awaitEntry(zip, end.href);
    for (const k of collectNoteDefsInEndnotes(html)) push(k);
  }

  const keyToGlobal = new Map();
  order.forEach((key, i) => keyToGlobal.set(key, i + 1));
  return { keyToGlobal, total: order.length };
}

function applyRenumber(html, fileKey, keyToGlobal) {
  let out = html;

  out = out.replace(/<ol([^>]*)\s+start=["']\d+["']([^>]*)>/gi, "<ol$1$2>");
  out = out.replace(/\s+start=["']\d+["']/gi, "");

  const replaceRef = (local, g) => {
    const n = String(g);
    return `ref${n}`;
  };
  const replaceNote = (local, g) => {
    const n = String(g);
    return `note${n}`;
  };

  if (fileKey === "endnotes") {
    out = out.replace(/<li\s+id=["']note(\d+)["']([^>]*)>/gi, (m, old, rest) => {
      const g = keyToGlobal.get(`endnotes::${old}`);
      if (!g) return m;
      return `<li id="note${g}" ${FN_STYLE_LI}>`;
    });
    out = out.replace(
      /(<li\s+id=["']note(\d+)["'][^>]*>[\s\S]*?href=["'])(Section\d+\.xhtml)#ref\d+(["'])/gi,
      (m, pre, gNum, chap, post) => `${pre}${chap}#ref${gNum}${post}`
    );
  } else {
    out = out.replace(
      /<a\b([^>]*)\bhref=["']endnotes\.xhtml#note(\d+)["']([^>]*)\bid=["']ref(\d+)["']([^>]*)><sup>([^<]*)<\/sup><\/a>/gi,
      (_m, _a1, oldEn, _a3, _oldRef, _a5, _sup) => {
        const g = keyToGlobal.get(`endnotes::${oldEn}`);
        return g
          ? `<a href="endnotes.xhtml#note${g}" id="ref${g}" ${FN_STYLE_REF}><sup>[${g}]</sup></a>`
          : _m;
      }
    );
    out = out.replace(
      /<sup><a\b([^>]*)\bhref=["']endnotes\.xhtml#note(\d+)["']([^>]*)><sup>(\d+)<\/sup><\/a>/gi,
      (_m, _a1, old, _a3, _num) => {
        const g = keyToGlobal.get(`endnotes::${old}`);
        return g
          ? `<sup><a href="endnotes.xhtml#note${g}" id="ref${g}" ${FN_STYLE_REF}>[${g}]</a></sup>`
          : _m;
      }
    );
    out = out.replace(/\bhref=["']endnotes\.xhtml#note(\d+)["']/gi, (m, old) => {
      const g = keyToGlobal.get(`endnotes::${old}`);
      return g ? `href="endnotes.xhtml#note${g}"` : m;
    });
    out = out.replace(/\bid=["']ref(\d+)["']/gi, (m, old) => {
      const g = keyToGlobal.get(`${fileKey}::${old}`);
      return g ? `id="ref${g}"` : m;
    });
    out = out.replace(/\bhref=["']#note(\d+)["']/gi, (m, old) => {
      const g = keyToGlobal.get(`${fileKey}::${old}`);
      return g ? `href="#note${g}"` : m;
    });
    out = out.replace(/\bhref=["']#fn(\d+)["']/gi, (m, old) => {
      const g = keyToGlobal.get(`${fileKey}::${old}`);
      return g ? `href="#note${g}"` : m;
    });
    out = out.replace(
      /<sup><a\b([^>]*)\bhref=["']#note(\d+)["']([^>]*)\bid=["']ref(\d+)["']([^>]*)>\[(\d+)\]<\/a><\/sup>/gi,
      (m, _a1, old, _a3, _rid, _a5, _num) => {
        const g = keyToGlobal.get(`${fileKey}::${old}`);
        return g
          ? `<sup><a href="#note${g}" id="ref${g}" ${FN_STYLE_REF}>[${g}]</a></sup>`
          : m;
      }
    );
    out = out.replace(/<li\s+id=["']note(\d+)["']([^>]*)>/gi, (m, old, rest) => {
      const g = keyToGlobal.get(`${fileKey}::${old}`);
      return g ? `<li id="note${g}" ${FN_STYLE_LI}>` : m;
    });
    out = out.replace(
      /<li\s+id=["']note(\d+)["']\s+style=["'][^"']*["']>/gi,
      (m, old) => {
        const g = keyToGlobal.get(`${fileKey}::${old}`);
        return g ? `<li id="note${g}" ${FN_STYLE_LI}>` : m;
      }
    );
    out = out.replace(
      /<a\s+href=["']#ref(\d+)["']([^>]*)>/gi,
      (m, old, rest) => {
        const g = keyToGlobal.get(`${fileKey}::${old}`);
        return g ? `<a href="#ref${g}" ${FN_STYLE_A}>` : m;
      }
    );
  }

  return out;
}

function parseSpine(opfXml) {
  const spineRefs = [...opfXml.matchAll(/<itemref\s+idref=["']([^"']+)["']/gi)].map((m) => m[1]);
  const manifest = new Map();
  for (const m of opfXml.matchAll(/<item\s+[^>]*id=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi)) {
    manifest.set(m[1], m[2].replace(/\\/g, "/"));
  }
  return spineRefs
    .map((id) => manifest.get(id))
    .filter(Boolean)
    .map((href) => {
      const base = href.split("/").pop().replace(/\.xhtml$/i, "");
      const fileKey =
        base === "endnotes" || href.includes("endnotes.xhtml")
          ? "endnotes"
          : base;
      return { href, fileKey };
    });
}

async function processEpub(epubName) {
  const epubPath = path.join(__dirname, epubName);
  const buf = fs.readFileSync(epubPath);
  const zip = await JSZip.loadAsync(buf);
  const opfEntry =
    zip.file("OEBPS/content.opf") || zip.file("content.opf") || Object.keys(zip.files).find((k) => k.endsWith("content.opf"));
  const opfPath = typeof opfEntry === "string" ? opfEntry : opfEntry?.name;
  const opf = await zip.file(opfPath).async("string");
  const prefix = opfPath.includes("OEBPS/") ? "OEBPS/" : "";
  let spineFiles = parseSpine(opf).map((s) => ({
    href: s.href.startsWith("OEBPS/") ? s.href : prefix + s.href,
    fileKey: s.fileKey,
  }));

  const { keyToGlobal, total } = await buildGlobalMapAsync(spineFiles, zip);
  console.log(`[${epubName}] 각주 ${total}개 → 책 단위 1~${total}`);

  const textFiles = Object.keys(zip.files).filter(
    (k) => /OEBPS\/Text\/.*\.xhtml$/i.test(k) || /^Text\/.*\.xhtml$/i.test(k)
  );

  for (const href of textFiles) {
    const base = href.split("/").pop().replace(/\.xhtml$/i, "");
    const fileKey = base === "endnotes" ? "endnotes" : base;
    const html = await zip.file(href).async("string");
    const updated = applyRenumber(html, fileKey, keyToGlobal);
    if (updated !== html) zip.file(href, updated);
  }

  const outBuf = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 9 },
  });
  fs.writeFileSync(epubPath, outBuf);
  console.log(`[ok] ${epubName} 저장 완료`);
}

async function main() {
  for (const name of TARGETS) {
    await processEpub(name);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
