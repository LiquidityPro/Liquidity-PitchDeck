const fs = require('fs');
const path = require('path');

const filePath = path.resolve('c:/Users/nwaug/Desktop/PitchDeck/Liquidity Pro Pitch Deck.html');
const content = fs.readFileSync(filePath, 'utf8');

const slideRegex = /<section\s+class="deck-slide"[^>]*id="(\d+)"[^>]*data-label="([^"]+)"(?:[^>]*data-speaker-notes="([^"]*)")?[^>]*>([\s\S]*?)<\/section>/g;
let match;
const detailedSlides = [];

while ((match = slideRegex.exec(content)) !== null) {
  const [_, id, label, speakerNotes, innerHtml] = match;
  detailedSlides.push({
    id: parseInt(id),
    title: label,
    speakerNotes: speakerNotes || '',
    html: innerHtml
  });
}

fs.writeFileSync(
  path.resolve('c:/Users/nwaug/Desktop/PitchDeck/src/data/raw_slides.json'),
  JSON.stringify(detailedSlides, null, 2)
);
console.log(`Extracted ${detailedSlides.length} slides to src/data/raw_slides.json`);
