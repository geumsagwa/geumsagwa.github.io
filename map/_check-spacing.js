const JSZip = require('jszip');
const fs = require('fs');

async function run() {
  const data = fs.readFileSync('C:/Users/pass6/project/homepage/map/history2_with_maps.epub');
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
    const mapIdx = html.indexOf('<div style="text-align:center; margin:10px 20px;');
    if (mapIdx === -1) { console.log(t.name + ': NO MAP FOUND'); continue; }
    const before = html.slice(Math.max(0, mapIdx - 600), mapIdx);
    const mapEnd = html.indexOf('</div>', mapIdx) + 6;
    const after = html.slice(mapEnd, mapEnd + 600);
    console.log('=== ' + t.name + ' (Section' + pad + ') ===');
    console.log('--- BEFORE MAP ---');
    before.split('\n').slice(-15).forEach(l => console.log(l));
    console.log('--- AFTER MAP ---');
    after.split('\n').slice(0, 15).forEach(l => console.log(l));
    console.log('');
  }
}
run().catch(e => console.error(e));
