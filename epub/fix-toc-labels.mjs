// fix-toc-labels.mjs (2026-09-20)
// 목적: history3.epub 의 toc.ncx 라벨에 '제N화 ' 접두를 붙인다.
//   배경: reader.html 은 링크의 target(예: '제76화')을 nav.toc 라벨과 includes() 로 맞춘다.
//         1·2·4·5·6권 라벨에는 '제N화'가 있으나 3권만 없다 → 3권은 target 지정이 조용히 실패한다.
//   방식: toc.ncx 만 수정한다. 본문·이미지·opf 는 손대지 않는다. 업로드는 별도(묶어서).
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const JSZip = require("../map/node_modules/jszip");

const EPUB_DIR = path.dirname(fileURLToPath(import.meta.url));
const TARGETS = ["history3.epub"];

async function processEpub(name) {
  const epubPath = path.join(EPUB_DIR, name);
  const zip = await JSZip.loadAsync(fs.readFileSync(epubPath));

  const ncxPath = Object.keys(zip.files).find((f) => f.toLowerCase().endsWith("toc.ncx"));
  if (!ncxPath) throw new Error("toc.ncx 없음: " + name);

  const ncx = await zip.file(ncxPath).async("string");
  let fixed = 0;

  const patched = ncx.replace(
    /(<navLabel><text>)([^<]*)(<\/text><\/navLabel>\s*<content src="Text\/Section00(\d{2})\.xhtml")/g,
    (m, a, label, c, nn) => {
      const n = parseInt(nn, 10);
      // 주의: '제'로만 판정하면 「제2차 세계대전의 서막」 같은 화 제목을 건너뛴다.
      //       반드시 '제N화' 꼴인지로 본다.
      if (n < 74 || /^제\s*\d+\s*화/.test(label)) return m;
      fixed++;
      return a + "제" + n + "화 " + label + c;
    }
  );

  if (fixed === 0) {
    console.log(`[--] ${name}: 변경할 라벨 없음 (이미 번호가 있거나 형식 불일치)`);
    return;
  }

  zip.file(ncxPath, patched);

  // EPUB OCF 규격: mimetype 은 반드시 첫 항목 + 무압축(STORED)이어야 한다.
  //   JSZip 은 generateAsync 시 기본 DEFLATE 를 적용하므로 명시적으로 STORE 로 되돌린다.
  //   (첫 항목 순서는 loadAsync 가 zip 순서를 보존하므로 그대로 유지된다.)
  if (zip.file("mimetype")) {
    zip.file("mimetype", "application/epub+zip", { compression: "STORE" });
  }

  const outBuf = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 9 },
  });

  const bak = epubPath + ".bak-toclabel-20260920";
  if (!fs.existsSync(bak)) fs.copyFileSync(epubPath, bak);
  fs.writeFileSync(epubPath, outBuf);
  console.log(`[ok] ${name}: toc.ncx 라벨 ${fixed}개에 '제N화' 접두 추가 (백업: ${path.basename(bak)})`);
}

for (const n of TARGETS) await processEpub(n);
