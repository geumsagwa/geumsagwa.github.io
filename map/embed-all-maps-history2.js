const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const EPUB_PATH = path.join(__dirname, 'temp_history2.epub');
const OUTPUT_PATH = path.join(__dirname, 'history2_with_maps.epub');

// afterParagraph: N번째 실제 내용 문단 뒤에 삽입 (빈 <p><br/></p> 제외, 1-based)
// 각 챕터 본문을 읽고 맥락에 맞는 위치를 직접 지정
const maps = [
  { file: 'ch41_age_of_exploration.jpg', section: 4, w: 1200, h: 662,
    caption: '대항해시대 — 새로운 항로의 발견 (15~16세기)',
    afterParagraph: 3 }, // 포르투갈 동쪽·스페인 서쪽 항로 + 희망봉·바스코 다 가마 인도 도착 후
  { file: 'ch43_europe_east_asia.jpg', section: 6, w: 1200, h: 662,
    caption: '유럽 세력의 동아시아 진출 (16~17세기)',
    afterParagraph: 3 }, // 포르투갈 말라카 점령 + 스페인 필리핀 점령 후
  { file: 'ch48_armada.jpg', section: 11, w: 1200, h: 662,
    caption: '무적함대 해전 — 영국 vs 에스파냐 (1588)',
    afterParagraph: 1 }, // 영국-에스파냐 해상 결전 배경 소개 후
  { file: 'ch50_new_world_colonies.jpg', section: 13, w: 1200, h: 662,
    caption: '신대륙 식민지 건설 (17세기)',
    afterParagraph: 2 }, // 청교도들 첫 겨울 고난 + 건설 시작 후
  { file: 'ch53_qing_dynasty.jpg', section: 16, w: 1200, h: 662,
    caption: '청(淸) 제국의 영토 (17~18세기)',
    afterParagraph: 8 }, // 건륭제 치세 말기 제국 영토 나열 후
  { file: 'ch54_eastern_europe.jpg', section: 17, w: 1200, h: 662,
    caption: '동유럽의 변화 — 러시아·프로이센·오스트리아 (17~18세기)',
    afterParagraph: 5 }, // 오스만 제국 빈 공방전 결말 후, 러시아 소개 전
  { file: 'ch57_slave_trade.jpg', section: 20, w: 1200, h: 662,
    caption: '대서양 삼각무역과 노예무역 (16~19세기)',
    afterParagraph: 2 }, // 영국 노예무역 독점, 리버풀 설명 후
  { file: 'ch58_american_independence.jpg', section: 21, w: 1200, h: 662,
    caption: '미국 독립전쟁 (1775~1783)',
    afterParagraph: 6 }, // 렉싱턴 첫 무력 충돌 후
  { file: 'ch60_napoleon.jpg', section: 23, w: 1200, h: 662,
    caption: '나폴레옹의 유럽 정복과 빈 체제 (1799~1815)',
    afterParagraph: 7 }, // 나폴레옹 유럽 대부분 정복, 60만 대군 러시아 원정 전
  { file: 'ch62_imperialism.jpg', section: 25, w: 1200, h: 662,
    caption: '제국주의 시대의 세계 분할 (19세기~1914)',
    afterParagraph: 4 }, // 아프리카 분할 + 제국주의 경쟁 정점 설명 후
  { file: 'ch64_opium_wars.jpg', section: 27, w: 1200, h: 662,
    caption: '아편전쟁과 청나라의 개항 (1839~1860)',
    afterParagraph: 3 }, // 아편전쟁 발발 + 고립시대 종료 후
  { file: 'ch66_sino_russo_japanese.jpg', section: 29, w: 1200, h: 662,
    caption: '청일전쟁과 러일전쟁 (1894~1905)',
    afterParagraph: 3 }, // 청일전쟁 + 러일전쟁 준비 상황 서술 후
  { file: 'ch68_civil_war.jpg', section: 31, w: 1200, h: 662,
    caption: '미국 남북전쟁 (1861~1865)',
    afterParagraph: 4 }, // 링컨 당선·남부 분리 + 양군 편성·북부 우세 설명 후
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
