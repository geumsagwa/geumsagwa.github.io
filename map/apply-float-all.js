const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const OLD_STYLE = 'style="text-align:center; margin:10px 20px; padding:0;"';
const NEW_STYLE = 'style="float:left; width:100%; text-align:center; margin:10px 0; padding:0;"';

async function applyFloat(epubFile) {
  const epubPath = path.join(__dirname, epubFile);
  const data = fs.readFileSync(epubPath);
  const zip = await JSZip.loadAsync(data);

  const sections = Object.keys(zip.files).filter(f => f.includes('Section') && f.endsWith('.xhtml'));
  let changed = 0;

  for (const section of sections) {
    let html = await zip.file(section).async('string');
    if (html.includes(OLD_STYLE)) {
      html = html.split(OLD_STYLE).join(NEW_STYLE);
      zip.file(section, html);
      const name = section.split('/').pop();
      console.log(`  [OK] ${name}`);
      changed++;
    }
  }

  if (changed === 0) {
    console.log('  No changes needed');
    return;
  }

  const output = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
    mimeType: 'application/epub+zip'
  });

  fs.writeFileSync(epubPath, output);
  console.log(`  [DONE] ${changed} sections updated (${(output.length / 1024 / 1024).toFixed(2)} MB)\n`);
}

async function main() {
  console.log('=== history1_with_maps.epub ===');
  await applyFloat('history1_with_maps.epub');

  console.log('=== history2_with_maps.epub ===');
  await applyFloat('history2_with_maps.epub');
}

main().catch(console.error);
