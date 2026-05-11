const JSZip = require('jszip');
const fs = require('fs');

const sections = [74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85];

async function verify() {
  const buf = fs.readFileSync('history3_with_maps.epub');
  console.log('[1] EPUB size:', (buf.length / 1024 / 1024).toFixed(2), 'MB');
  const zip = await JSZip.loadAsync(buf);
  const allFiles = Object.keys(zip.files);
  console.log('[2] Total files:', allFiles.length);

  const images = allFiles.filter(
    (f) => f.includes('/Images/ch') && /^OEBPS\/Images\/ch(7[4-9]|8[0-5])_/.test(f) && f.endsWith('.jpg')
  );
  console.log('[3] History3 map JPEGs in package:', images.length);
  images.sort().forEach((f) => console.log('    ', f));

  const opf = await zip.file('OEBPS/content.opf').async('string');
  const manifestCount = (opf.match(/media-type="image\/jpeg"/g) || []).length;
  console.log('[4] JPEG manifest entries:', manifestCount);

  let ok = 0;
  let fail = 0;
  for (const s of sections) {
    const pad = String(s).padStart(4, '0');
    const sectionFile = zip.file(`OEBPS/Text/Section${pad}.xhtml`);
    if (!sectionFile) {
      console.log('    [FAIL] Section missing:', pad);
      fail++;
      continue;
    }
    const html = await sectionFile.async('string');
    const hasMap = html.includes('xlink:href="../Images/ch');
    const hasCaption = html.includes('font-size:0.75em');
    if (hasMap && hasCaption) {
      ok++;
    } else {
      fail++;
      console.log('    [FAIL] Section' + pad, 'map:', hasMap, 'caption:', hasCaption);
    }
  }
  console.log('[5] Section map check:', ok, 'OK,', fail, 'FAIL');

  const sample = await zip.file('OEBPS/Text/Section0074.xhtml').async('string');
  const wellFormed = sample.includes('</html>') && sample.includes('</body>');
  console.log('[6] XHTML well-formed (sample):', wellFormed ? 'OK' : 'FAIL');

  console.log('\n=== Verification', fail === 0 && images.length === 12 ? 'PASSED' : 'FAILED', '===');
}

verify().catch(console.error);
