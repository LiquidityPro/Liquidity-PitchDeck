const fs = require('fs');
const slides = JSON.parse(fs.readFileSync('src/data/raw_slides.json', 'utf8'));

[6, 8, 10, 11].forEach(num => {
  const slide = slides.find(s => s.id === num);
  console.log(`\n================== SLIDE ${num}: ${slide.title} ==================`);
  
  // Strip script, style, and svg tags to see the visible html/tables/text
  let clean = slide.html
    .replace(/<svg[\s\S]*?<\/svg>/g, '[SVG]')
    .replace(/src="data:image\/[^"]+"/g, 'src="data:..."');
  
  // Find all text inside tags
  const texts = [];
  const regex = />([^<]+)</g;
  let m;
  while ((m = regex.exec(clean)) !== null) {
    const val = m[1].trim();
    if (val && !val.startsWith('//') && val.length > 1) {
      texts.push(val);
    }
  }
  console.log(texts.join('\n'));
});
