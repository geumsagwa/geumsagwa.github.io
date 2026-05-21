// history1/2 EPUB 각주를 history4와 동일한 마크업·인라인 스타일로 통일
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const JSZip = require("../map/node_modules/jszip");

const EPUB_DIR = path.dirname(fileURLToPath(import.meta.url));
const TARGETS = ["history1.epub", "history2.epub"];

const SECTION_STYLE =
  "font-size:0.8em;line-height:1.4;margin:25px 20px 0 20px;padding-top:20px;border-top:1px solid #ddd;";
const OL_STYLE = "padding-left:2em;";
const LI_STYLE = "margin-bottom:0;font-size:1em;";
const A_STYLE = "text-decoration:none;color:inherit;border:none;";
const BODY_REF_A_STYLE = "text-decoration:none;color:inherit;";

const FOOTNOTE_CSS = `
/* ---- 각주 (4권 통일) ---- */
.footnotes {
  margin: 25px 20px 0 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  font-size: 0.8em;
  line-height: 1.4;
}
.footnotes ol {
  padding-left: 2em;
}
.footnotes li {
  margin-bottom: 0;
}
.footnotes a,
.footnotes a:link,
.footnotes a:visited,
.footnotes a:hover,
.footnotes a:active {
  text-decoration: none !important;
  color: inherit !important;
  border: none !important;
  background: none !important;
}
sup {
  font-size: 0.75em;
}
sup a,
sup a:link,
sup a:visited,
sup a:hover,
sup a:active {
  text-decoration: none !important;
  color: inherit !important;
}
`;

function unifyFootnotesInHtml(html) {
  let out = html.replace(/href="#fn(\d+)"/gi, 'href="#note$1"');

  out = out.replace(/<section\s+class="footnotes"[^>]*>[\s\S]*?<\/section>/gi, (section) => {
    let s = section.replace(/<br\s*\/?>\s*/gi, "");
    s = s.replace(
      /<section\s+class="footnotes"[^>]*>/i,
      `<section class="footnotes" style="${SECTION_STYLE}">`
    );
    s = s.replace(/<ol[^>]*>/i, `<ol style="${OL_STYLE}">`);
    s = s.replace(/<li\s+id="(note\d+)"[^>]*>([\s\S]*?)<\/li>/gi, (_m, id, inner) => {
      const aMatch = inner.match(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i);
      if (!aMatch) return `<li id="${id}" style="${LI_STYLE}">${inner.trim()}</li>`;
      const href = aMatch[1];
      const content = aMatch[2].replace(/\s+/g, " ").trim();
      return `<li id="${id}" style="${LI_STYLE}"><a href="${href}" style="${A_STYLE}">${content}</a></li>`;
    });
    return s;
  });

  out = out.replace(
    /<sup>\s*<a\s+href="#note(\d+)"\s+id="ref\1"([^>]*)>/gi,
    (m, n, rest) => {
      if (/text-decoration\s*:\s*none/i.test(rest)) return m;
      const clean = rest.replace(/\s*style="[^"]*"/i, "").trim();
      const gap = clean ? ` ${clean}` : "";
      return `<sup><a href="#note${n}" id="ref${n}" style="${BODY_REF_A_STYLE}"${gap}>`;
    }
  );

  return out;
}

function patchWritingCss(css) {
  const marker = "/* ---- 각주 (4권 통일) ---- */";
  if (css.includes(marker)) {
    return css.replace(
      /\/\* ---- 각주 \(4권 통일\) ---- \*\/[\s\S]*$/,
      FOOTNOTE_CSS.trim()
    );
  }
  const cutAt = css.search(/\/\* ---- 각주/);
  const base = cutAt >= 0 ? css.slice(0, cutAt) : css;
  return base.trimEnd() + "\n" + FOOTNOTE_CSS;
}

async function processEpub(epubName) {
  const epubPath = path.join(EPUB_DIR, epubName);
  const buf = fs.readFileSync(epubPath);
  const zip = await JSZip.loadAsync(buf);
  let xhtmlCount = 0;
  let brRemoved = 0;

  for (const [rel, entry] of Object.entries(zip.files)) {
    if (entry.dir) continue;
    const lower = rel.toLowerCase();
    if (lower.endsWith(".xhtml") || lower.endsWith(".html")) {
      const before = await entry.async("string");
      const brBefore = (before.match(/<br\s*\/?>/gi) || []).length;
      const after = unifyFootnotesInHtml(before);
      if (after !== before) {
        zip.file(rel, after);
        xhtmlCount++;
        brRemoved += brBefore - (after.match(/<br\s*\/?>/gi) || []).length;
      }
    }
    if (lower.endsWith("writing.css") || lower.endsWith("style0001.css")) {
      const css = await entry.async("string");
      const patched = patchWritingCss(css);
      if (patched !== css) zip.file(rel, patched);
    }
  }

  const outBuf = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 9 },
  });
  const bak = epubPath + ".bak-footnotes";
  if (!fs.existsSync(bak)) fs.copyFileSync(epubPath, bak);
  fs.writeFileSync(epubPath, outBuf);
  console.log(`[ok] ${epubName}: ${xhtmlCount}개 XHTML 패치, <br/> 약 ${brRemoved}건 제거`);
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
