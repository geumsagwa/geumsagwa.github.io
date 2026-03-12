const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

async function fix(epubFile) {
  const epubPath = path.join(__dirname, epubFile);
  const data = fs.readFileSync(epubPath);
  const zip = await JSZip.loadAsync(data);

  const cssFiles = Object.keys(zip.files).filter(f => f.endsWith('.css'));
  for (const cssFile of cssFiles) {
    let css = await zip.file(cssFile).async('string');
    if (css.includes('.map-wrap svg')) {
      css = css.replace(/\.map-wrap svg \{[^}]+\}/, `.map-wrap svg {
  display: block;
  margin: 0 auto;
  max-width: 94%;
  height: auto;
}`);
      zip.file(cssFile, css);
      console.log(`  [CSS] ${cssFile}: margin 0 auto, max-width 94%`);
    }
  }

  const output = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
    mimeType: 'application/epub+zip'
  });

  fs.writeFileSync(epubPath, output);
  console.log(`  [DONE] ${(output.length / 1024 / 1024).toFixed(2)} MB\n`);
}

async function main() {
  console.log('=== history1 ===');
  await fix('history1_with_maps.epub');
  console.log('=== history2 ===');
  await fix('history2_with_maps.epub');
}

main().catch(console.error);
