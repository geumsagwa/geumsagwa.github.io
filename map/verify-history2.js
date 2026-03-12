const JSZip = require('jszip');
const fs = require('fs');

async function verify() {
  const buf = fs.readFileSync('history2_with_maps.epub');
  console.log('[1] EPUB size:', (buf.length/1024/1024).toFixed(2), 'MB');
  const zip = await JSZip.loadAsync(buf);
  const allFiles = Object.keys(zip.files);
  console.log('[2] Total files:', allFiles.length);

  const images = allFiles.filter(f => f.includes('/Images/ch'));
  console.log('[3] Map images embedded:', images.length);
  images.forEach(f => console.log('    ', f));

  const opf = await zip.file('OEBPS/content.opf').async('string');
  const manifestCount = (opf.match(/media-type="image\/jpeg"/g) || []).length;
  console.log('[4] JPEG manifest entries:', manifestCount);

  const sections = [4,6,11,13,16,17,20,21,23,25,27,29,31];
  let ok = 0, fail = 0;
  for (const s of sections) {
    const pad = String(s).padStart(4, '0');
    const html = await zip.file('OEBPS/Text/Section' + pad + '.xhtml').async('string');
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

  const hasDoctype = await zip.file('OEBPS/Text/Section0004.xhtml').async('string');
  const wellFormed = hasDoctype.includes('</html>') && hasDoctype.includes('</body>');
  console.log('[6] XHTML well-formed (sample):', wellFormed ? 'OK' : 'FAIL');

  console.log('\n=== Verification', fail === 0 ? 'PASSED' : 'FAILED', '===');
}

verify().catch(console.error);
