const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const EPUB_PATH = path.join(__dirname, 'history1_with_maps.epub');

async function patchSection6() {
  const epubData = fs.readFileSync(EPUB_PATH);
  const zip = await JSZip.loadAsync(epubData);

  let html = await zip.file('OEBPS/Text/Section0006.xhtml').async('string');

  const oldMap = `<div style="float:right; width:50%; margin:0 0 10px 15px; padding:0;">
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0 0 1200 655" xmlns:xlink="http://www.w3.org/1999/xlink" style="width:100%; height:auto;">
    <image width="1200" height="655" xlink:href="../Images/ch06_four_civilizations.jpg"/>
  </svg>
  <p style="font-size:0.75em; color:#888; text-indent:0; text-align:center; margin:4px 0 0 0; line-height:1.4;">`;

  const newMap = `<div style="float:left; width:100%; text-align:center; margin:10px 0; padding:0;">
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0 0 1200 655" xmlns:xlink="http://www.w3.org/1999/xlink" style="max-width:88%; height:auto;">
    <image width="1200" height="655" xlink:href="../Images/ch06_four_civilizations.jpg"/>
  </svg>
  <p style="font-size:0.75em; color:#888; text-indent:0; text-align:center; margin:4px 0 0 0; line-height:1.4;">`;

  if (!html.includes(oldMap)) {
    console.error('[ERROR] Pattern not found');
    console.log('Looking for float:right pattern...');
    console.log('Has float:right:', html.includes('float:right'));
    console.log('Has float:left:', html.includes('float:left'));
    console.log('Has text-align:center; margin:10px 20px:', html.includes('text-align:center; margin:10px 20px'));
    process.exit(1);
  }

  html = html.replace(oldMap, newMap);
  zip.file('OEBPS/Text/Section0006.xhtml', html);
  console.log('[OK] Section0006: float:left, width:100%, max-width:88% (centered, full-width float)');

  const output = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
    mimeType: 'application/epub+zip'
  });

  fs.writeFileSync(EPUB_PATH, output);
  console.log('[DONE]', (output.length / 1024 / 1024).toFixed(2), 'MB');
}

patchSection6().catch(console.error);
