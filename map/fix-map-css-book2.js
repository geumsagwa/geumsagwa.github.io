const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const MAP_CSS = `
/* --- 지도 --- */
.map-wrap {
  float: left;
  width: 100%;
  text-align: center;
  margin: 10px 0;
  padding: 0;
}
.map-wrap svg {
  display: block;
  margin: 0 20px;
  width: calc(100% - 40px);
  height: auto;
}
.map-wrap p {
  margin: 4px 0 0 0;
  text-indent: 0;
}
`;

async function run() {
  const epubPath = path.join(__dirname, 'history2_with_maps.epub');
  const data = fs.readFileSync(epubPath);
  const zip = await JSZip.loadAsync(data);

  // 2권 CSS 파일 찾기
  const cssFiles = Object.keys(zip.files).filter(f => f.endsWith('.css'));
  for (const cssFile of cssFiles) {
    let css = await zip.file(cssFile).async('string');
    if (!css.includes('.map-wrap')) {
      css += MAP_CSS;
      zip.file(cssFile, css);
      console.log(`[CSS] map styles added to ${cssFile}`);
    }

    // p margin 확인
    const pMatch = css.match(/p\s*\{[^}]*margin:\s*([^;]+)/);
    console.log(`[INFO] p margin in ${cssFile}:`, pMatch ? pMatch[1].trim() : 'not found');
  }

  // 인라인 스타일 → class
  const sections = Object.keys(zip.files).filter(f => f.includes('Section') && f.endsWith('.xhtml'));
  let changed = 0;

  for (const section of sections) {
    let html = await zip.file(section).async('string');
    const oldDiv = 'style="float:left; width:100%; text-align:center; margin:10px 0; padding:0 20px; box-sizing:border-box;"';

    if (html.includes(oldDiv)) {
      html = html.split(oldDiv).join('class="map-wrap"');
      html = html.replace(/(<svg[^>]*) style="width:100%; height:auto;"/g, '$1');
      zip.file(section, html);
      console.log(`[OK] ${section.split('/').pop()}`);
      changed++;
    }
  }

  const output = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
    mimeType: 'application/epub+zip'
  });

  fs.writeFileSync(epubPath, output);
  console.log(`[DONE] ${changed} sections (${(output.length / 1024 / 1024).toFixed(2)} MB)`);
}

run().catch(console.error);
