const JSZip = require('jszip');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const COVERS_DIR = path.join(__dirname, '..', 'ebook-covers');
const EPUB_DIR = path.join(__dirname, '..', 'epub');

async function convertCover(pngPath) {
  const jpgBuf = await sharp(pngPath)
    .resize(1600, null, { withoutEnlargement: true })
    .jpeg({ quality: 90 })
    .toBuffer();
  console.log(`[COVER] ${path.basename(pngPath)} → JPEG (${(jpgBuf.length/1024).toFixed(1)} KB)`);
  return jpgBuf;
}

async function replaceHistory1Cover() {
  console.log('\n=== History 1: 표지 교체 ===');
  const coverJpg = await convertCover(path.join(COVERS_DIR, 'history1_cover.png'));
  const epubPath = path.join(__dirname, 'history1_with_maps.epub');
  const data = fs.readFileSync(epubPath);
  const zip = await JSZip.loadAsync(data);

  zip.file('OEBPS/Images/cover.jpg', coverJpg);
  console.log('[REPLACE] OEBPS/Images/cover.jpg');

  const output = await zip.generateAsync({
    type: 'nodebuffer', compression: 'DEFLATE',
    compressionOptions: { level: 6 }, mimeType: 'application/epub+zip'
  });
  fs.writeFileSync(epubPath, output);
  fs.copyFileSync(epubPath, path.join(EPUB_DIR, 'history1.epub'));
  console.log(`[DONE] history1 (${(output.length/1024/1024).toFixed(2)} MB)`);
}

async function replaceHistory2Cover() {
  console.log('\n=== History 2: 표지 추가 ===');
  const coverJpg = await convertCover(path.join(COVERS_DIR, 'history2_cover.png'));
  const epubPath = path.join(__dirname, 'history2_with_maps.epub');
  const data = fs.readFileSync(epubPath);
  const zip = await JSZip.loadAsync(data);

  zip.file('OEBPS/Images/cover.jpg', coverJpg);
  console.log('[ADD] OEBPS/Images/cover.jpg');

  const coverXhtml = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Cover</title>
  <style type="text/css">
    body { margin: 0; padding: 0; text-align: center; }
    img { max-width: 100%; max-height: 100%; }
  </style>
</head>
<body>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0 0 1600 2560" xmlns:xlink="http://www.w3.org/1999/xlink">
      <image width="1600" height="2560" xlink:href="../Images/cover.jpg"/>
    </svg>
  </div>
</body>
</html>`;
  zip.file('OEBPS/Text/cover.xhtml', coverXhtml);
  console.log('[ADD] OEBPS/Text/cover.xhtml');

  let opf = await zip.file('OEBPS/content.opf').async('string');

  if (!opf.includes('cover.jpg')) {
    opf = opf.replace('</manifest>',
      '    <item id="cover.jpg" href="Images/cover.jpg" media-type="image/jpeg"/>\n' +
      '    <item id="cover.xhtml" href="Text/cover.xhtml" media-type="application/xhtml+xml"/>\n' +
      '  </manifest>');
  }
  if (!opf.includes('<meta name="cover"')) {
    opf = opf.replace('</metadata>',
      '    <meta name="cover" content="cover.jpg"/>\n  </metadata>');
  }
  if (!opf.includes('itemref idref="cover.xhtml"')) {
    opf = opf.replace('<spine', '<spine').replace(
      /<itemref/,
      '<itemref idref="cover.xhtml" linear="yes"/>\n    <itemref'
    );
  }

  zip.file('OEBPS/content.opf', opf);
  console.log('[OPF] manifest + spine + metadata updated');

  const output = await zip.generateAsync({
    type: 'nodebuffer', compression: 'DEFLATE',
    compressionOptions: { level: 6 }, mimeType: 'application/epub+zip'
  });
  fs.writeFileSync(epubPath, output);
  fs.copyFileSync(epubPath, path.join(EPUB_DIR, 'history2.epub'));
  console.log(`[DONE] history2 (${(output.length/1024/1024).toFixed(2)} MB)`);
}

async function run() {
  await replaceHistory1Cover();
  await replaceHistory2Cover();
}
run().catch(e => console.error(e));
