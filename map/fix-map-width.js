const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

async function fix(epubFile) {
  const epubPath = path.join(__dirname, epubFile);
  const data = fs.readFileSync(epubPath);
  const zip = await JSZip.loadAsync(data);

  const sections = Object.keys(zip.files).filter(f => f.includes('Section') && f.endsWith('.xhtml'));
  let changed = 0;

  for (const section of sections) {
    let html = await zip.file(section).async('string');

    const old = 'style="float:left; width:100%; margin:10px 0; padding:0 20px; box-sizing:border-box;"';
    const fix = 'style="float:left; width:100%; text-align:center; margin:10px 0; padding:0 20px; box-sizing:border-box;"';

    if (html.includes(old)) {
      html = html.split(old).join(fix);
      zip.file(section, html);
      console.log(`  [OK] ${section.split('/').pop()}`);
      changed++;
    }
  }

  if (changed === 0) { console.log('  No changes needed'); return; }

  const output = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
    mimeType: 'application/epub+zip'
  });

  fs.writeFileSync(epubPath, output);
  console.log(`  [DONE] ${changed} sections (${(output.length / 1024 / 1024).toFixed(2)} MB)\n`);
}

async function main() {
  console.log('=== history1 ===');
  await fix('history1_with_maps.epub');
  console.log('=== history2 ===');
  await fix('history2_with_maps.epub');
}

main().catch(console.error);
