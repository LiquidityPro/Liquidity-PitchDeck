const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/layout.tsx',
  'src/components/slides/Slide1Cover.tsx',
  'src/components/slides/Slide2Problem.tsx',
  'src/components/slides/Slide3Solution.tsx',
  'src/components/slides/Slide4Market.tsx',
  'src/components/slides/Slide5TAM.tsx',
  'src/components/slides/Slide6Comparison.tsx',
  'src/components/slides/Slide7WhyChoose.tsx',
  'src/components/slides/Slide8UnitEconomics.tsx',
  'src/components/slides/Slide9GTM.tsx',
  'src/components/slides/Slide10RevenueOutlook.tsx',
  'src/components/slides/Slide11Financials.tsx',
  'src/components/slides/Slide12TrustSecurity.tsx',
  'src/components/slides/Slide13Team.tsx',
  'src/data/slidesData.ts',
  'Liquidity Pro Pitch Deck.html',
  'README.md'
];

for (const rel of filesToUpdate) {
  const fullPath = path.resolve(rel);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    const updated = content.replaceAll('Liquidity Pro', 'Liquidity');
    if (updated !== content) {
      fs.writeFileSync(fullPath, updated, 'utf8');
      console.log(`Updated ${rel}`);
    }
  }
}
console.log('Finished updating Liquidity Pro -> Liquidity');
