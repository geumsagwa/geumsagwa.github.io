const sharp = require('sharp');
const path = require('path');

const files = process.argv.slice(2);
if (!files.length) { console.log('Usage: node optimize-images.js file1.png file2.png ...'); process.exit(1); }

async function run() {
  for (const f of files) {
    const input = path.join(__dirname, f);
    const output = input.replace(/\.png$/, '.jpg');
    const info = await sharp(input).resize(1200).jpeg({ quality: 80 }).toFile(output);
    console.log(`${f} → ${path.basename(output)} (${info.width}x${info.height}, ${(info.size/1024).toFixed(0)}KB)`);
  }
}
run().catch(console.error);
