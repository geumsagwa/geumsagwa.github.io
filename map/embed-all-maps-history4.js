const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const EPUB_PATH = path.join(__dirname, 'temp_history4.epub');
const OUTPUT_PATH = path.join(__dirname, 'history4_with_maps.epub');

// 제89~105화(이야기 세계사 Ⅳ)
const maps = [
  { file: 'ch89_marshall_plan.jpg', section: 89, w: 1200, h: 1200,
    caption: '마셜 플랜 유럽 원조 분포 (1948—1952)',
    afterParagraph: 4 },
  { file: 'ch90_divided_germany.jpg', section: 90, w: 1200, h: 1200,
    caption: '분단된 독일과 베를린 봉쇄 (1948)',
    afterParagraph: 16 },
  { file: 'ch91_partition_india.jpg', section: 91, w: 1200, h: 1200,
    caption: '인도와 파키스탄의 분할 (1947)',
    afterParagraph: 21 },
  // 제92화 6.25 전쟁 다중 지도 (4장)
  { file: 'ch92_korean_war_phase1.jpg', section: 92, w: 1200, h: 1200,
    caption: '6.25 전쟁 1단계: 북한군의 남침과 낙동강 방어선 (1950.06 — 08)',
    afterParagraph: 32 },
  { file: 'ch92_korean_war_phase2.jpg', section: 92, w: 1200, h: 1200,
    caption: '6.25 전쟁 2단계: 인천 상륙작전과 유엔군의 북진 (1950.09 — 11)',
    afterParagraph: 38 },
  { file: 'ch92_korean_war_phase3.jpg', section: 92, w: 1200, h: 1200,
    caption: '6.25 전쟁 3단계: 중공군 개입과 1·4 후퇴 (1950.12 — 1951.01)',
    afterParagraph: 46 },
  { file: 'ch92_korean_war_phase4.jpg', section: 92, w: 1200, h: 1200,
    caption: '6.25 전쟁 4단계: 휴전 협정과 최종 휴전선 (1953.07)',
    afterParagraph: 51 },
  { file: 'ch93_bandung_conference.jpg', section: 93, w: 1200, h: 1200,
    caption: '반둥 회의와 제3세계의 탄생 (1955)',
    afterParagraph: 5 },
  { file: 'ch94_cuban_missile.jpg', section: 94, w: 1200, h: 1200,
    caption: '쿠바 미사일 위기 (1962)',
    afterParagraph: 18 },
  { file: 'ch95_palestine_partition.jpg', section: 95, w: 1200, h: 1200,
    caption: '유엔 팔레스타인 분할안 (1947)',
    afterParagraph: 2 },
  { file: 'ch96_arab_israeli_war.jpg', section: 96, w: 1200, h: 1200,
    caption: '제1차 중동전쟁 (1948)',
    afterParagraph: 3 },
  // 제97화 팔레스타인 3부작 다중 지도 (2장)
  { file: 'ch97_six_day_war.jpg', section: 97, w: 1200, h: 1200,
    caption: '제3차 중동전쟁(6일 전쟁)과 이스라엘의 영토 확장 (1967)',
    afterParagraph: 2 },
  { file: 'ch97_yom_kippur_war.jpg', section: 97, w: 1200, h: 1200,
    caption: '제4차 중동전쟁 — 시나이 반도 전선 (1973)',
    afterParagraph: 6 },
  // 제101화 베트남 전쟁 다중 지도 (2장)
  { file: 'ch101_vietnam_division.jpg', section: 101, w: 1200, h: 1200,
    caption: '제네바 협정과 베트남의 분단 (1954)',
    afterParagraph: 6 },
  { file: 'ch101_vietnam_war.jpg', section: 101, w: 1200, h: 1200,
    caption: '베트남 전쟁과 호치민 루트 (1960년대)',
    afterParagraph: 16 },
  { file: 'ch104_opec_oil_crisis.jpg', section: 104, w: 1200, h: 1200,
    caption: 'OPEC 석유 네트워크와 석유 파동 (1970년대)',
    afterParagraph: 6 },
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
  <div style="font-size:0.75em; color:#888; text-indent:0; text-align:center; margin:4px 0 0 0; line-height:1.4;">
    ${m.caption}
  </div>
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
