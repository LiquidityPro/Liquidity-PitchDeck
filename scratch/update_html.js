const fs = require('fs');
let html = fs.readFileSync('Liquidity Pro Pitch Deck.html', 'utf8');

// Remove cap table
const capRegex = /<div data-text-path="2" data-node-path="2"[^>]*>Ownership today:[^<]*<\/div>/;
html = html.replace(capRegex, '');

// Remove slide 14
const slide14Start = html.indexOf('<section class="deck-slide" id="14"');
if (slide14Start !== -1) {
  const slide14End = html.indexOf('</section>', slide14Start) + '</section>'.length;
  html = html.substring(0, slide14Start) + html.substring(slide14End);
  console.log('Removed slide 14 from html');
}

fs.writeFileSync('Liquidity Pro Pitch Deck.html', html, 'utf8');
console.log('HTML updated successfully');
