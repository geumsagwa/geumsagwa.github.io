const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

async function run() {
  const data = fs.readFileSync(path.join(__dirname, '..', 'epub', 'history2.epub'));
  const zip = await JSZip.loadAsync(data);

  // List all files in Images and Text
  const allFiles = Object.keys(zip.files).filter(f =>
    f.includes('Images/') || f.includes('Text/cover') || f.includes('Text/Section0001')
  );
  console.log('Files:');
  allFiles.forEach(f => console.log('  ' + f));

  // Check OPF for cover metadata
  const opf = await zip.file('OEBPS/content.opf').async('string');
  const coverMeta = opf.match(/<meta[^>]*cover[^>]*>/gi);
  if (coverMeta) console.log('\nCover meta: ' + coverMeta.join('\n'));

  // Check first few items in manifest
  const manifestItems = opf.match(/<item[^>]*>/gi);
  console.log('\nFirst 5 manifest items:');
  if (manifestItems) manifestItems.slice(0, 5).forEach(m => console.log('  ' + m));

  // Check if Section0001 is a cover page
  const s1 = zip.file('OEBPS/Text/Section0001.xhtml');
  if (s1) {
    const html = await s1.async('string');
    console.log('\nSection0001 first 300 chars:');
    console.log(html.substring(0, 300));
  }
}
run().catch(e => console.error(e));
