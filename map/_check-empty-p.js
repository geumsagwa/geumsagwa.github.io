const JSZip = require('jszip');
const fs = require('fs');

function findNthRealParagraphEnd(html, n) {
  let count = 0, pos = 0;
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

async function run() {
  const data = fs.readFileSync('C:/Users/pass6/project/homepage/map/temp_history2.epub');
  const zip = await JSZip.loadAsync(data);
  const targets = [
    { section: 11, afterP: 1, name: '48화' },
    { section: 17, afterP: 5, name: '54화' },
    { section: 20, afterP: 2, name: '57화' },
    { section: 29, afterP: 3, name: '66화' }
  ];
  for (const t of targets) {
    const pad = String(t.section).padStart(4, '0');
    const f = zip.file('OEBPS/Text/Section' + pad + '.xhtml');
    const html = await f.async('string');
    const insertPos = findNthRealParagraphEnd(html, t.afterP);
    if (insertPos === -1) continue;

    // Show 300 chars before and after the insertion point
    const before = html.slice(Math.max(0, insertPos - 300), insertPos);
    const after = html.slice(insertPos, insertPos + 300);

    console.log('=== ' + t.name + ' (Section' + pad + ', afterP=' + t.afterP + ') ===');
    console.log('--- 삽입 지점 직전 ---');
    console.log(before);
    console.log('--- [MAP WOULD GO HERE] ---');
    console.log(after);
    console.log('');
  }
}
run().catch(e => console.error(e));
