const JSZip = require('jszip');
const fs = require('fs');

const maps = [
  { file: 'ch04_human_migration.jpg', section: 4, caption: '현생인류의 확산 경로' },
  { file: 'ch06_four_civilizations.jpg', section: 6, caption: '세계 4대 문명의 발상지' },
  { file: 'ch08_aegean_greece.jpg', section: 8, caption: '에게해 문명과 그리스 세계' },
  { file: 'ch10_persian_wars.jpg', section: 10, caption: '페르시아 전쟁' },
  { file: 'ch11_alexander.jpg', section: 11, caption: '알렉산더 대왕의 원정 경로' },
  { file: 'ch12_qin_unification.jpg', section: 12, caption: '진(秦)의 중국 통일' },
  { file: 'ch13_rome_carthage.jpg', section: 13, caption: '로마와 카르타고' },
  { file: 'ch14_silk_road.jpg', section: 14, caption: '비단길' },
  { file: 'ch17_roman_empire.jpg', section: 17, caption: '로마 제국의 최대 영토' },
  { file: 'ch18_three_kingdoms.jpg', section: 18, caption: '삼국시대' },
  { file: 'ch19_gupta_empire.jpg', section: 19, caption: '굽타 왕조' },
  { file: 'ch20_grand_canal.jpg', section: 20, caption: '수 양제의 대운하' },
  { file: 'ch21_tang_dynasty.jpg', section: 21, caption: '당(唐) 제국' },
  { file: 'ch24_islamic_expansion.jpg', section: 24, caption: '이슬람 세계의 확장' },
  { file: 'ch27_carolingian_empire.jpg', section: 28, caption: '카롤루스 대제' },
  { file: 'ch29_invasions_feudalism.jpg', section: 30, caption: '이민족의 침입과 봉건제도' },
  { file: 'ch33_american_civilizations.jpg', section: 34, caption: '아메리카 고대 문명' },
  { file: 'ch34_crusades.jpg', section: 35, caption: '십자군 전쟁' },
  { file: 'ch35_mongol_empire.jpg', section: 36, caption: '칭기즈칸의 몽골 제국' },
  { file: 'ch36_black_death.jpg', section: 37, caption: '흑사병의 전파' },
];

async function verify() {
  const buf = fs.readFileSync('C:/Users/pass6/project/map/history1_with_maps.epub');
  console.log('[1] EPUB size:', (buf.length / 1024 / 1024).toFixed(2), 'MB');

  const zip = await JSZip.loadAsync(buf);
  const allFiles = Object.keys(zip.files);
  console.log('[2] Total files:', allFiles.length);

  const images = allFiles.filter(f => f.includes('/Images/ch'));
  console.log('[3] Map images embedded:', images.length);

  const opf = await zip.file('OEBPS/content.opf').async('string');
  const manifestCount = (opf.match(/media-type="image\/jpeg"/g) || []).length;
  console.log('[4] JPEG manifest entries:', manifestCount);

  let ok = 0, fail = 0;
  for (const m of maps) {
    const pad = String(m.section).padStart(4, '0');
    const sectionFile = `OEBPS/Text/Section${pad}.xhtml`;
    const entry = zip.file(sectionFile);
    if (!entry) { console.log(`  [FAIL] ${sectionFile} not found`); fail++; continue; }

    const html = await entry.async('string');
    const hasImage = html.includes(`xlink:href="../Images/${m.file}"`);
    const hasCaption = html.includes(m.caption);
    const wellFormed = html.includes('</html>') && html.includes('</body>');

    if (hasImage && hasCaption && wellFormed) {
      ok++;
    } else {
      fail++;
      console.log(`  [FAIL] Section${pad} (${m.file}): image=${hasImage}, caption=${hasCaption}, xhtml=${wellFormed}`);
    }
  }

  console.log(`[5] Map insertion check: ${ok} OK, ${fail} FAIL (total ${maps.length})`);
  console.log('\n===', fail === 0 ? 'VERIFICATION PASSED' : 'VERIFICATION FAILED', '===');
}

verify().catch(console.error);
