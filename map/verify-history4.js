const JSZip = require('jszip');
const fs = require('fs');

const sections = [89, 90, 91, 92, 93, 94, 95, 96, 97, 101, 104];
const mapFiles = [
  'ch89_marshall_plan.jpg',
  'ch90_divided_germany.jpg',
  'ch91_partition_india.jpg',
  'ch92_korean_war_phase1.jpg',
  'ch92_korean_war_phase2.jpg',
  'ch92_korean_war_phase3.jpg',
  'ch92_korean_war_phase4.jpg',
  'ch93_bandung_conference.jpg',
  'ch94_cuban_missile.jpg',
  'ch95_palestine_partition.jpg',
  'ch96_arab_israeli_war.jpg',
  'ch97_six_day_war.jpg',
  'ch97_yom_kippur_war.jpg',
  'ch101_vietnam_division.jpg',
  'ch101_vietnam_war.jpg',
  'ch104_opec_oil_crisis.jpg'
];

async function verify() {
  const buf = fs.readFileSync('history4_with_maps.epub');
  console.log('[1] EPUB size:', (buf.length / 1024 / 1024).toFixed(2), 'MB');
  const zip = await JSZip.loadAsync(buf);
  const allFiles = Object.keys(zip.files);
  console.log('[2] Total files:', allFiles.length);

  const images = allFiles.filter(
    (f) => f.includes('/Images/ch') && f.endsWith('.jpg')
  );
  console.log('[3] Map JPEGs in package:', images.length);
  images.sort().forEach((f) => console.log('    ', f));

  // Check if all map files are in the package
  let missingFiles = 0;
  for (const file of mapFiles) {
    if (!allFiles.includes(`OEBPS/Images/${file}`)) {
      console.log('    [FAIL] Missing image file in zip:', file);
      missingFiles++;
    }
  }

  const opf = await zip.file('OEBPS/content.opf').async('string');
  
  // Verify manifest entries
  let missingManifest = 0;
  for (const file of mapFiles) {
    if (!opf.includes(`href="Images/${file}"`)) {
      console.log('    [FAIL] Missing manifest entry in content.opf for:', file);
      missingManifest++;
    }
  }
  console.log('[4] Manifest entry check:', mapFiles.length - missingManifest, 'OK,', missingManifest, 'FAIL');

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

  const sample = await zip.file('OEBPS/Text/Section0089.xhtml').async('string');
  const wellFormed = sample.includes('</html>') && sample.includes('</body>');
  console.log('[6] XHTML well-formed (sample Section0089):', wellFormed ? 'OK' : 'FAIL');

  const passed = fail === 0 && missingFiles === 0 && missingManifest === 0 && images.length === 16;
  console.log('\n=== Verification', passed ? 'PASSED' : 'FAILED', '===');
}

verify().catch(console.error);
