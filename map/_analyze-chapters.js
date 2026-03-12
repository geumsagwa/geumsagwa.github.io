const JSZip = require('jszip');
const fs = require('fs');

async function run() {
  const data = fs.readFileSync('C:/Users/pass6/project/homepage/map/temp_history2.epub');
  const zip = await JSZip.loadAsync(data);
  const targets = [
    { section: 11, name: '48화' },
    { section: 17, name: '54화' },
    { section: 20, name: '57화' },
    { section: 29, name: '66화' }
  ];
  for (const t of targets) {
    const pad = String(t.section).padStart(4, '0');
    const f = zip.file('OEBPS/Text/Section' + pad + '.xhtml');
    const html = await f.async('string');
    let count = 0, pos = 0;
    console.log('=== ' + t.name + ' (Section' + pad + ') ===');
    while (pos < html.length) {
      const pStart = html.indexOf('<p', pos);
      if (pStart === -1) break;
      const pEnd = html.indexOf('</p>', pStart);
      if (pEnd === -1) break;
      const tagClose = html.indexOf('>', pStart);
      const content = html.slice(tagClose + 1, pEnd);
      const textOnly = content.replace(/<[^>]*>/g, '').replace(/\u00a0/g, '').trim();
      if (textOnly.length > 5) {
        count++;
        const preview = textOnly.substring(0, 80);
        const ending = textOnly.substring(Math.max(0, textOnly.length - 50));
        console.log('P' + count + ': [START] ' + preview + '...');
        console.log('     [END] ...' + ending);
      }
      pos = pEnd + 4;
    }
    console.log('Total real paragraphs: ' + count);
    console.log('');
  }
}
run().catch(e => console.error(e));
