const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

async function revert(epubFile) {
  const epubPath = path.join(__dirname, epubFile);
  const data = fs.readFileSync(epubPath);
  const zip = await JSZip.loadAsync(data);

  // 1) CSS에서 .map-wrap 관련 스타일 제거
  const cssFiles = Object.keys(zip.files).filter(f => f.endsWith('.css'));
  for (const cssFile of cssFiles) {
    let css = await zip.file(cssFile).async('string');
    css = css.replace(/\n\/\* --- 지도 --- \*\/[\s\S]*$/, '\n');
    zip.file(cssFile, css);
    console.log(`  [CSS] ${cssFile}: .map-wrap styles removed`);
  }

  // 2) HTML: class="map-wrap" → 원래 인라인 스타일로 복원
  const sections = Object.keys(zip.files).filter(f => f.includes('Section') && f.endsWith('.xhtml'));
  let changed = 0;

  for (const section of sections) {
    let html = await zip.file(section).async('string');

    if (html.includes('class="map-wrap"')) {
      html = html.replace(/class="map-wrap"/g,
        'style="float:left; width:100%; text-align:center; margin:10px 0; padding:0;"');

      // SVG에 인라인 스타일 복원 (style 없는 svg에 추가)
      html = html.replace(
        /(<svg[^>]*)(>[\s\S]*?xlink:href)/g,
        (match, svgOpen, rest) => {
          if (svgOpen.includes('style=')) return match;
          return svgOpen + ' style="max-width:88%; height:auto;"' + rest;
        }
      );

      zip.file(section, html);
      console.log(`  [OK] ${section.split('/').pop()}`);
      changed++;
    }
  }

  const output = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
    mimeType: 'application/epub+zip'
  });

  fs.writeFileSync(epubPath, output);
  console.log(`  [DONE] ${changed} sections (${(output.length / 1024 / 1024).toFixed(2)} MB)\n`);
}

async function main() {
  console.log('=== history1 ===');
  await revert('history1_with_maps.epub');
  console.log('=== history2 ===');
  await revert('history2_with_maps.epub');
}

main().catch(console.error);
