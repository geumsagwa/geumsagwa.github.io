const fs = require('fs');
const path = require('path');
const s = fs.readFileSync(path.join(__dirname, '..', 'epub.min.js'), 'utf8');
console.log('File size:', s.length);

// Check for version
const ver = s.match(/version["']?\s*[:=]\s*["']([^"']+)/i);
if (ver) console.log('Version:', ver[1]);

// Check for key features
console.log('Has "replacements":', s.includes('replacements'));
console.log('Has "blob:":', s.includes('blob:'));
console.log('Has "createObjectURL":', s.includes('createObjectURL'));
console.log('Has "image/jpeg":', s.includes('image/jpeg'));
console.log('Has "img":', s.includes('"img"') || s.includes("'img'"));

// Look for URL replacement patterns
const replaceMatch = s.match(/replace.*?src/g);
if (replaceMatch) console.log('Replace src patterns:', replaceMatch.length);

// First 200 chars to identify library
console.log('\nFirst 200 chars:', s.substring(0, 200));
