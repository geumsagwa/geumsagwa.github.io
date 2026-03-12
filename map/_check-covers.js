const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

async function check(path, label) {
  const data = fs.readFileSync(path);
  const zip = await JSZip.loadAsync(data);
  const files = Object.keys(zip.files).filter(f =>
    f.toLowerCase().includes('cover') || f.toLowerCase().includes('image')
  );
  console.log(label + ':');
  for (const f of files) {
    const entry = zip.files[f];
    if (!entry.dir) {
      const buf = await entry.async('nodebuffer');
      console.log('  ' + f + ' (' + (buf.length / 1024).toFixed(1) + ' KB)');
    }
  }
  // Check content.opf for cover reference
  const opf = await zip.file('OEBPS/content.opf').async('string');
  const coverMatch = opf.match(/cover[^"]*\.(jpg|jpeg|png)/gi);
  if (coverMatch) console.log('  OPF cover refs: ' + coverMatch.join(', '));
  console.log('');
}

async function run() {
  await check(path.join(__dirname, '..', 'epub', 'history1.epub'), 'History 1');
  await check(path.join(__dirname, '..', 'epub', 'history2.epub'), 'History 2');
}
run().catch(e => console.error(e));
