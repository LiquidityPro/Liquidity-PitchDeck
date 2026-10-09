const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('Liquidity Pro Pitch Deck.html', 'utf8');
const imgRegex = /<img[^>]*alt="([^"]*)"[^>]*src="data:image\/svg\+xml;base64,([^"]+)"/g;

let match;
let count = 0;
const svgMap = {};

while ((match = imgRegex.exec(content)) !== null) {
  count++;
  const alt = match[1];
  const b64 = match[2];
  const svgText = Buffer.from(b64, 'base64').toString('utf8');
  svgMap[alt] = svgText;
}

console.log(`Found ${count} unique embedded SVG illustrations:`);
Object.keys(svgMap).forEach(alt => console.log(`- "${alt}" (${svgMap[alt].length} chars)`));

fs.writeFileSync('src/data/illustrations.json', JSON.stringify(svgMap, null, 2));
console.log('Saved SVGs to src/data/illustrations.json');
