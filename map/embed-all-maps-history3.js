const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const EPUB_PATH = path.join(__dirname, 'temp_history3.epub');
const OUTPUT_PATH = path.join(__dirname, 'history3_with_maps.epub');

// 제74~88화(이야기 세계사 Ⅲ), Section 번호 == 화 차례와 일치(Section0074=제74화)
// 각 본문을 읽어 맥락에 맞는 문단 뒤에 삽입 (1-based afterParagraph)
const maps = [
  { file: 'ch74_east_asia_imperialism.jpg', section: 74, w: 1200, h: 800,
    caption: '동아시아 제국주의 경쟁 — 만주·조선·러·일 (1904—1910)',
    afterParagraph: 3 },
  { file: 'ch75_russia_1905.jpg', section: 75, w: 1200, h: 800,
    caption: '제정 러시아와 페테르부르크 — 피의 일요일과 1905년 혁명',
    afterParagraph: 9 },
  { file: 'ch76_ww1_europe_1914.jpg', section: 76, w: 1200, h: 800,
    caption: '제1차 세계대전 직전 유럽 동맹과 발칸 화약고 (1914)',
    afterParagraph: 10 },
  { file: 'ch77_russia_1917.jpg', section: 77, w: 1200, h: 800,
    caption: '러시아 1917년 혁명 — 페트로그라드와 주요 거점',
    afterParagraph: 2 },
  { file: 'ch78_versailles_europe.jpg', section: 78, w: 1200, h: 800,
    caption: '베르사유 체제와 신생 국가 (1919 전후)',
    afterParagraph: 6 },
  { file: 'ch79_italy_fascism.jpg', section: 79, w: 1200, h: 800,
    caption: '파시스트 이탈리아 — 로마 진군과 정세 (1922 전후)',
    afterParagraph: 4 },
  { file: 'ch80_great_depression.jpg', section: 80, w: 1200, h: 800,
    caption: '대공황의 확산 — 뉴욕에서 대서양·세계로 (1929)',
    afterParagraph: 5 },
  { file: 'ch81_long_march_route.jpg', section: 81, w: 1200, h: 800,
    caption: '홍군 대장정 주요 경로 (1934—1936)',
    afterParagraph: 45 },
  { file: 'ch82_nazi_germany.jpg', section: 82, w: 1200, h: 800,
    caption: '나치 독일 집권과 독일·중부 유럽 정세 (1933—1939)',
    afterParagraph: 15 },
  { file: 'ch83_manchuria_north_china.jpg', section: 83, w: 1200, h: 800,
    caption: '만주·화북과 중일전쟁의 발발 (1931—1937)',
    afterParagraph: 4 },
  { file: 'ch84_spain_civil_war.jpg', section: 84, w: 1200, h: 800,
    caption: '스페인 내전 — 국민파와 공화파 세력권 (1936—1939)',
    afterParagraph: 18 },
  { file: 'ch85_ww2_outbreak.jpg', section: 85, w: 1200, h: 800,
    caption: '제2차 세계대전 개시 — 폴란드 침공과 유럽 전선 (1939)',
    afterParagraph: 24 },
];

function findNthRealParagraphEnd(html, n) {
  let count = 0;
  let pos = 0;
  while (pos < html.length) {
    const pStart = html.indexOf('<p', pos);
    if (pStart === -1) return -1;
    const pEnd = html.indexOf('</p>', pStart);
    if (pEnd === -1) return -1;
    const tagClose = html.indexOf('>', pStart);
    const content = html.slice(tagClose + 1, pEnd);
    const textOnly = content.replace(/<[^>]*>/g, '').replace(/\u00a0/g, '').trim();
    if (textOnly.length > 5) {
      count++;
      if (count === n) return pEnd + 4;
    }
    pos = pEnd + 4;
  }
  return -1;
}

async function embedAllMaps() {
  const epubData = fs.readFileSync(EPUB_PATH);
  const zip = await JSZip.loadAsync(epubData);

  let opf = await zip.file('OEBPS/content.opf').async('string');
  const manifestEntries = [];

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
<div style="float:left; width:100%; text-align:center; margin:4px 0; padding:0;">
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0 0 ${m.w} ${m.h}" xmlns:xlink="http://www.w3.org/1999/xlink" style="max-width:88%; height:auto;">
    <image width="${m.w}" height="${m.h}" xlink:href="../Images/${m.file}"/>
  </svg>
  <p style="font-size:0.75em; color:#888; text-indent:0; text-align:center; margin:4px 0 0 0; line-height:1.4;">
    ${m.caption}
  </p>
</div>`;

    const insertPos = findNthRealParagraphEnd(html, m.afterParagraph);
    if (insertPos === -1) {
      console.error(`[SKIP] Section${sectionPad}: ${m.afterParagraph}번째 실제 문단을 찾을 수 없음`);
      continue;
    }

    html = html.slice(0, insertPos) + '\n' + mapHtml + '\n' + html.slice(insertPos);
    zip.file(sectionFile, html);

    const snippet = html.slice(Math.max(0, insertPos - 60), insertPos).replace(/<[^>]*>/g, '').trim().slice(-40);
    console.log(`[MAP] Section${sectionPad} ← "${m.caption}" (${m.afterParagraph}번째 문단 뒤: ...${snippet})`);
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
