const JSZip = require('jszip');
const fs = require('fs');

const start = parseInt(process.argv[2]) || 1;
const end = parseInt(process.argv[3]) || 5;

async function extract() {
  const data = fs.readFileSync('C:/Users/pass6/project/map/temp_history1.epub');
  const zip = await JSZip.loadAsync(data);
  
  for (let i = start; i <= end; i++) {
    const padded = String(i).padStart(4, '0');
    const file = zip.file(`OEBPS/Text/Section${padded}.xhtml`);
    if (!file) { console.log(`--- Section${padded} NOT FOUND ---`); continue; }
    const content = await file.async('string');
    // Extract text only (strip HTML)
    const text = content
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    // Print first 600 chars for analysis
    console.log(`\n=== Section${padded} ===`);
    console.log(text.substring(0, 800));
    console.log(`... (total ${text.length} chars)`);
  }
}

extract().catch(console.error);
