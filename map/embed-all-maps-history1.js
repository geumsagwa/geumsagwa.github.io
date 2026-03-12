const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const EPUB_PATH = path.join(__dirname, 'temp_history1.epub');
const OUTPUT_PATH = path.join(__dirname, 'history1_with_maps.epub');

const maps = [
  { file: 'ch04_human_migration.jpg', section: 4, w: 1200, h: 655, caption: '현생인류의 확산 경로 (Out of Africa)' },
  { file: 'ch06_four_civilizations.jpg', section: 6, w: 1200, h: 655, caption: '세계 4대 문명의 발상지' },
  { file: 'ch08_aegean_greece.jpg', section: 8, w: 1200, h: 655, caption: '에게해 문명과 그리스 세계' },
  { file: 'ch10_persian_wars.jpg', section: 10, w: 1200, h: 655, caption: '페르시아 전쟁 (기원전 490~479)' },
  { file: 'ch11_alexander.jpg', section: 11, w: 1200, h: 655, caption: '알렉산더 대왕의 원정 경로 (기원전 334~323)' },
  { file: 'ch12_qin_unification.jpg', section: 12, w: 1200, h: 662, caption: '진(秦)의 중국 통일 (기원전 221)' },
  { file: 'ch13_rome_carthage.jpg', section: 13, w: 1200, h: 655, caption: '로마와 카르타고의 지중해 패권 다툼' },
  { file: 'ch14_silk_road.jpg', section: 14, w: 1200, h: 655, caption: '비단길 — 유라시아를 잇는 교역로' },
  { file: 'ch17_roman_empire.jpg', section: 17, w: 1200, h: 655, caption: '로마 제국의 최대 영토 (2세기)' },
  { file: 'ch18_three_kingdoms.jpg', section: 18, w: 1200, h: 662, caption: '삼국시대 (220~280)' },
  { file: 'ch19_gupta_empire.jpg', section: 19, w: 1200, h: 662, caption: '굽타 왕조의 인도 (320~550)' },
  { file: 'ch20_grand_canal.jpg', section: 20, w: 1200, h: 662, caption: '수 양제의 대운하 (611)' },
  { file: 'ch21_tang_dynasty.jpg', section: 21, w: 1200, h: 662, caption: '당(唐) 제국의 최대 영토 (7~8세기)' },
  { file: 'ch24_islamic_expansion.jpg', section: 24, w: 1200, h: 662, caption: '이슬람 세계의 확장 (622~750)' },
  { file: 'ch27_carolingian_empire.jpg', section: 28, w: 1200, h: 662, caption: '카롤루스 대제의 프랑크 왕국 (800)' },
  { file: 'ch29_invasions_feudalism.jpg', section: 30, w: 1200, h: 662, caption: '이민족의 침입과 봉건제도 (9~10세기)' },
  { file: 'ch33_american_civilizations.jpg', section: 34, w: 1200, h: 662, caption: '아메리카 고대 문명' },
  { file: 'ch34_crusades.jpg', section: 35, w: 1200, h: 662, caption: '십자군 전쟁의 경로 (1096~1291)' },
  { file: 'ch35_mongol_empire.jpg', section: 36, w: 1200, h: 662, caption: '칭기즈칸의 몽골 제국 (13세기)' },
  { file: 'ch36_black_death.jpg', section: 37, w: 1200, h: 662, caption: '흑사병의 전파 (1346~1353)' },
];

async function embedAllMaps() {
  const epubData = fs.readFileSync(EPUB_PATH);
  const zip = await JSZip.loadAsync(epubData);

  let opf = await zip.file('OEBPS/content.opf').async('string');
  let manifestEntries = [];

  for (const m of maps) {
    const imgPath = path.join(__dirname, m.file);
    if (!fs.existsSync(imgPath)) {
      console.error(`[SKIP] Missing: ${m.file}`);
      continue;
    }

    const imgData = fs.readFileSync(imgPath);
    zip.file(`OEBPS/Images/${m.file}`, imgData);
    console.log(`[IMG] ${m.file}`);

    manifestEntries.push(`    <item id="${m.file}" href="Images/${m.file}" media-type="image/jpeg"/>`);

    const sectionPad = String(m.section).padStart(4, '0');
    const sectionFile = `OEBPS/Text/Section${sectionPad}.xhtml`;
    const sectionEntry = zip.file(sectionFile);
    if (!sectionEntry) {
      console.error(`[SKIP] Section not found: ${sectionFile}`);
      continue;
    }

    let html = await sectionEntry.async('string');

    const mapHtml = `
<div style="text-align:center; margin:10px 20px; padding:0;">
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0 0 ${m.w} ${m.h}" xmlns:xlink="http://www.w3.org/1999/xlink" style="max-width:88%; height:auto;">
    <image width="${m.w}" height="${m.h}" xlink:href="../Images/${m.file}"/>
  </svg>
  <p style="font-size:0.75em; color:#888; text-indent:0; text-align:center; margin:4px 0 0 0; line-height:1.4;">
    ${m.caption}
  </p>
</div>`;

    const firstPEnd = html.indexOf('</p>');
    if (firstPEnd === -1) {
      console.error(`[SKIP] No </p> found in Section${sectionPad}`);
      continue;
    }

    html = html.slice(0, firstPEnd + 4) + '\n' + mapHtml + '\n' + html.slice(firstPEnd + 4);
    zip.file(sectionFile, html);
    console.log(`[MAP] Section${sectionPad} ← ${m.caption}`);
  }

  opf = opf.replace('</manifest>', manifestEntries.join('\n') + '\n  </manifest>');
  zip.file('OEBPS/content.opf', opf);
  console.log(`[OPF] ${manifestEntries.length} manifest entries added`);

  const output = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
    mimeType: 'application/epub+zip'
  });

  fs.writeFileSync(OUTPUT_PATH, output);
  const sizeMB = (output.length / 1024 / 1024).toFixed(2);
  console.log(`[DONE] ${OUTPUT_PATH} (${sizeMB} MB)`);
}

embedAllMaps().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
