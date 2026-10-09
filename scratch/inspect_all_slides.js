const fs = require('fs');
const slides = JSON.parse(fs.readFileSync('src/data/raw_slides.json', 'utf8'));

slides.forEach(slide => {
  console.log(`\n========================================`);
  console.log(`SLIDE ${slide.id}: ${slide.title}`);
  if (slide.speakerNotes) {
    console.log(`NOTES: ${slide.speakerNotes}`);
  }
  
  // Extract text pieces
  const textMatches = slide.html.match(/<div[^>]*data-text-path[^>]*>([\s\S]*?)<\/div>/g) || [];
  const texts = textMatches.map(t => t.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  console.log(`TEXTS (${texts.length}):`);
  texts.forEach(t => console.log(`  - ${t}`));

  // Extract images
  const imgMatches = slide.html.match(/alt="([^"]*)"/g) || [];
  if (imgMatches.length > 0) {
    console.log(`IMAGES: ${imgMatches.join(', ')}`);
  }
});
