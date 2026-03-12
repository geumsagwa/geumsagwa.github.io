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

    // Count empty <p> before the Nth real paragraph
    const beforeChunk = html.slice(0, insertPos);
    const emptyBefore = (beforeChunk.match(/<p><br\/><\/p>/g) || []).length;

    // Count empty <p> after insertion point until next real paragraph
    const afterChunk = html.slice(insertPos);
    let emptyAfter = 0;
    let aPos = 0;
    while (aPos < afterChunk.length) {
      const pStart = afterChunk.indexOf('<p', aPos);
      if (pStart === -1) break;
      const pEnd = afterChunk.indexOf('</p>', pStart);
      if (pEnd === -1) break;
      const tagClose = afterChunk.indexOf('>', pStart);
      const content = afterChunk.slice(tagClose + 1, pEnd);
      const textOnly = content.replace(/<[^>]*>/g, '').replace(/\u00a0/g, '').trim();
      if (textOnly.length > 5) break;
      if (content.includes('<br/>') || textOnly.length === 0) emptyAfter++;
      aPos = pEnd + 4;
    }

    // Find the previous real paragraph start (the one ending at insertPos)
    const prevPEnd = insertPos - 4; // position of > in </p>
    const prevPStart = beforeChunk.lastIndexOf('<p', prevPEnd);
    // Count empty <p> between title/prev real paragraph and this real paragraph
    let emptyBetween = 0;
    if (t.afterP > 1) {
      const prevPrevEnd = findNthRealParagraphEnd(html, t.afterP - 1);
      const between = html.slice(prevPrevEnd, prevPStart);
      emptyBetween = (between.match(/<p><br\/><\/p>/g) || []).length;
    }

    console.log(t.name + ' (Section' + pad + '):');
    console.log('  Total empty <p><br/></p> in section: ' + emptyBefore);
    console.log('  Empty <p> between prev real P and current P: ' + emptyBetween);
    console.log('  Empty <p> after insertion point (before next real P): ' + emptyAfter);

    // Show 100 chars around transition
    const trans = html.slice(insertPos, insertPos + 100);
    console.log('  After insert: ' + JSON.stringify(trans.substring(0, 80)));
    console.log('');
  }
}
run().catch(e => console.error(e));
