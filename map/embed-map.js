const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const EPUB_PATH = path.join(__dirname, 'temp_history1.epub');
const OUTPUT_PATH = path.join(__dirname, 'history1_with_maps.epub');
const MAP_IMAGE_PATH = path.join(__dirname, 'ch04_human_migration.jpg');

async function embedMap() {
  const epubData = fs.readFileSync(EPUB_PATH);
  const zip = await JSZip.loadAsync(epubData);

  // 1) Add map image to OEBPS/Images/
  const imgData = fs.readFileSync(MAP_IMAGE_PATH);
  zip.file('OEBPS/Images/ch04_human_migration.jpg', imgData);
  console.log('[OK] Image added: OEBPS/Images/ch04_human_migration.jpg');

  // 2) Update content.opf manifest
  let opf = await zip.file('OEBPS/content.opf').async('string');
  const manifestItem = '    <item id="ch04_human_migration.jpg" href="Images/ch04_human_migration.jpg" media-type="image/jpeg"/>';
  opf = opf.replace('</manifest>', manifestItem + '\n  </manifest>');
  zip.file('OEBPS/content.opf', opf);
  console.log('[OK] content.opf manifest updated');

  // 3) Insert map into Section0004.xhtml using SVG (same pattern as cover.xhtml)
  let ch4 = await zip.file('OEBPS/Text/Section0004.xhtml').async('string');

  const mapHtml = `
<div style="text-align:center; margin:10px 20px; padding:0;">
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0 0 1200 655" xmlns:xlink="http://www.w3.org/1999/xlink" style="max-width:88%; height:auto;">
    <image width="1200" height="655" xlink:href="../Images/ch04_human_migration.jpg"/>
  </svg>
  <p style="font-size:0.75em; color:#888; text-indent:0; text-align:center; margin:4px 0 0 0; line-height:1.4;">
    현생인류의 확산 경로 (Out of Africa)
  </p>
</div>`;

  // Insert after the intro paragraph (first <p> tag)
  const firstPEnd = ch4.indexOf('</p>');
  if (firstPEnd === -1) {
    console.error('Could not find insertion point in Section0004.xhtml');
    process.exit(1);
  }
  ch4 = ch4.slice(0, firstPEnd + 4) + '\n' + mapHtml + '\n' + ch4.slice(firstPEnd + 4);
  zip.file('OEBPS/Text/Section0004.xhtml', ch4);
  console.log('[OK] Map inserted into Section0004.xhtml');

  // 4) Generate new EPUB
  const output = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
    mimeType: 'application/epub+zip'
  });

  fs.writeFileSync(OUTPUT_PATH, output);
  const sizeMB = (output.length / 1024 / 1024).toFixed(2);
  console.log(`[OK] New EPUB saved: ${OUTPUT_PATH} (${sizeMB} MB)`);
}

embedMap().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
