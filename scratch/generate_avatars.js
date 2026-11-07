const fs = require('fs');

const avatars = {
  'Walter Uche': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-walter" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#bg-walter)"/>
  <circle cx="50" cy="50" r="47" fill="none" stroke="#bae6fd" stroke-width="1.5" opacity="0.6"/>
  <path d="M16 100 C16 80, 32 72, 50 72 C68 72, 84 80, 84 100 Z" fill="#0f172a"/>
  <path d="M38 72 L50 86 L62 72 Z" fill="#0284c7"/>
  <rect x="44" y="60" width="12" height="15" rx="4" fill="#6c4427"/>
  <ellipse cx="50" cy="46" rx="19" ry="22" fill="#7c4f30"/>
  <circle cx="31" cy="47" r="4.5" fill="#6c4427"/>
  <circle cx="69" cy="47" r="4.5" fill="#6c4427"/>
  <circle cx="31" cy="47" r="2.5" fill="#59351c"/>
  <circle cx="69" cy="47" r="2.5" fill="#59351c"/>
  <path d="M31 43 C30 26, 39 19, 50 19 C61 19, 70 26, 69 43 C65 33, 59 27, 50 27 C41 27, 35 33, 31 43 Z" fill="#1c1410"/>
  <circle cx="36" cy="22" r="5" fill="#1c1410"/>
  <circle cx="44" cy="18" r="5.5" fill="#1c1410"/>
  <circle cx="54" cy="18" r="5.5" fill="#1c1410"/>
  <circle cx="63" cy="22" r="5" fill="#1c1410"/>
  <circle cx="50" cy="17" r="5" fill="#1c1410"/>
  <path d="M37 36 Q42 33 46 36" stroke="#1c1410" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <path d="M54 36 Q58 33 63 36" stroke="#1c1410" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <ellipse cx="42" cy="42" rx="3.5" ry="4" fill="#ffffff"/>
  <circle cx="42.5" cy="42" r="2.2" fill="#1c1410"/>
  <circle cx="43.2" cy="41" r="0.8" fill="#ffffff"/>
  <ellipse cx="58" cy="42" rx="3.5" ry="4" fill="#ffffff"/>
  <circle cx="57.5" cy="42" r="2.2" fill="#1c1410"/>
  <circle cx="58.2" cy="41" r="0.8" fill="#ffffff"/>
  <circle cx="42" cy="42" r="7.5" fill="none" stroke="#0f172a" stroke-width="1.8"/>
  <circle cx="58" cy="42" r="7.5" fill="none" stroke="#0f172a" stroke-width="1.8"/>
  <path d="M49.5 41 Q50 39.5 50.5 41" stroke="#0f172a" stroke-width="1.8" fill="none"/>
  <path d="M38 39 Q40 37 43 38" stroke="#ffffff" stroke-width="1" stroke-linecap="round" opacity="0.7" fill="none"/>
  <ellipse cx="50" cy="49.5" rx="2.5" ry="1.8" fill="#59351c"/>
  <path d="M44 55 Q50 62 56 55" stroke="#26150a" stroke-width="2" stroke-linecap="round" fill="#ffffff"/>
</svg>`,

  'Odeyemi Tobi': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-tobi" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#bg-tobi)"/>
  <circle cx="50" cy="50" r="47" fill="none" stroke="#a7f3d0" stroke-width="1.5" opacity="0.6"/>
  <path d="M16 100 C16 80, 32 72, 50 72 C68 72, 84 80, 84 100 Z" fill="#1e293b"/>
  <path d="M42 72 C42 79, 58 79, 58 72 Z" fill="#059669"/>
  <rect x="44" y="60" width="12" height="15" rx="4" fill="#734628"/>
  <ellipse cx="50" cy="46" rx="19" ry="22" fill="#845130"/>
  <circle cx="31" cy="47" r="4.5" fill="#734628"/>
  <circle cx="69" cy="47" r="4.5" fill="#734628"/>
  <circle cx="31" cy="47" r="2.5" fill="#5e351b"/>
  <circle cx="69" cy="47" r="2.5" fill="#5e351b"/>
  <path d="M31 41 C31 24, 40 18, 50 18 C60 18, 69 24, 69 41 C66 32, 58 26, 50 26 C42 26, 34 32, 31 41 Z" fill="#140f0c"/>
  <path d="M34 33 L66 33 L66 37 C59 34, 41 34, 34 37 Z" fill="#140f0c"/>
  <path d="M37 35 Q42 32 46 35" stroke="#140f0c" stroke-width="2.4" stroke-linecap="round" fill="none"/>
  <path d="M54 35 Q58 32 63 35" stroke="#140f0c" stroke-width="2.4" stroke-linecap="round" fill="none"/>
  <ellipse cx="42" cy="42" rx="3.5" ry="4" fill="#ffffff"/>
  <circle cx="42.5" cy="42" r="2.3" fill="#140f0c"/>
  <circle cx="43.3" cy="41" r="0.9" fill="#ffffff"/>
  <ellipse cx="58" cy="42" rx="3.5" ry="4" fill="#ffffff"/>
  <circle cx="57.5" cy="42" r="2.3" fill="#140f0c"/>
  <circle cx="58.3" cy="41" r="0.9" fill="#ffffff"/>
  <ellipse cx="50" cy="49.5" rx="2.7" ry="1.9" fill="#5e351b"/>
  <path d="M41 54 Q50 65 59 54 Z" fill="#ffffff" stroke="#26150a" stroke-width="2"/>
  <path d="M41 54 Q50 56 59 54" stroke="#26150a" stroke-width="1.5" fill="none"/>
</svg>`,

  'Elizabeth Nwaugo': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-elizabeth" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ec4899"/>
      <stop offset="100%" stop-color="#be185d"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#bg-elizabeth)"/>
  <circle cx="50" cy="50" r="47" fill="none" stroke="#fbcfe8" stroke-width="1.5" opacity="0.6"/>
  <circle cx="50" cy="17" r="14" fill="#17110e"/>
  <circle cx="40" cy="21" r="10" fill="#17110e"/>
  <circle cx="60" cy="21" r="10" fill="#17110e"/>
  <path d="M38 27 Q50 24 62 27" stroke="#fbbf24" stroke-width="3" fill="none"/>
  <path d="M16 100 C16 80, 32 72, 50 72 C68 72, 84 80, 84 100 Z" fill="#047857"/>
  <path d="M43 72 Q50 83 57 72 Z" fill="#fef08a"/>
  <rect x="45" y="60" width="10" height="15" rx="4" fill="#855231"/>
  <ellipse cx="50" cy="46" rx="18" ry="21" fill="#965e38"/>
  <circle cx="32" cy="47" r="4" fill="#855231"/>
  <circle cx="68" cy="47" r="4" fill="#855231"/>
  <circle cx="30" cy="52" r="5" fill="none" stroke="#fbbf24" stroke-width="2.2"/>
  <circle cx="70" cy="52" r="5" fill="none" stroke="#fbbf24" stroke-width="2.2"/>
  <path d="M32 40 C34 30, 42 26, 50 26 C58 26, 66 30, 68 40 C63 34, 57 31, 50 31 C43 31, 37 34, 32 40 Z" fill="#17110e"/>
  <path d="M37 36 Q42 32 46 35" stroke="#17110e" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <path d="M54 35 Q58 32 63 36" stroke="#17110e" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <ellipse cx="42" cy="42" rx="3.5" ry="4" fill="#ffffff"/>
  <circle cx="42.5" cy="42" r="2.3" fill="#22150e"/>
  <circle cx="43.3" cy="41" r="0.9" fill="#ffffff"/>
  <path d="M39 39 L37 37" stroke="#17110e" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M41 38 L40 36" stroke="#17110e" stroke-width="1.8" stroke-linecap="round"/>
  <ellipse cx="58" cy="42" rx="3.5" ry="4" fill="#ffffff"/>
  <circle cx="57.5" cy="42" r="2.3" fill="#22150e"/>
  <circle cx="58.3" cy="41" r="0.9" fill="#ffffff"/>
  <path d="M61 39 L63 37" stroke="#17110e" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M59 38 L60 36" stroke="#17110e" stroke-width="1.8" stroke-linecap="round"/>
  <ellipse cx="38" cy="48" rx="3.5" ry="2" fill="#fb7185" opacity="0.28"/>
  <ellipse cx="62" cy="48" rx="3.5" ry="2" fill="#fb7185" opacity="0.28"/>
  <ellipse cx="50" cy="49" rx="2.4" ry="1.7" fill="#703f1f"/>
  <path d="M43 55 Q50 63 57 55 Z" fill="#f43f5e" stroke="#26150a" stroke-width="1.5"/>
  <path d="M44.5 56 Q50 59 55.5 56 Z" fill="#ffffff"/>
</svg>`,

  'Nwawulu Clinton': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-clinton" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#6d28d9"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#bg-clinton)"/>
  <circle cx="50" cy="50" r="47" fill="none" stroke="#ddd6fe" stroke-width="1.5" opacity="0.6"/>
  <path d="M16 100 C16 80, 32 72, 50 72 C68 72, 84 80, 84 100 Z" fill="#1e1b4b"/>
  <path d="M40 72 L50 86 L60 72 Z" fill="#ffffff"/>
  <path d="M48 76 L52 76 L53.5 96 L50 100 L46.5 96 Z" fill="#3b82f6"/>
  <rect x="44" y="60" width="12" height="15" rx="4" fill="#613b21"/>
  <ellipse cx="50" cy="46" rx="19" ry="22" fill="#704527"/>
  <circle cx="31" cy="47" r="4.5" fill="#613b21"/>
  <circle cx="69" cy="47" r="4.5" fill="#613b21"/>
  <circle cx="31" cy="47" r="2.5" fill="#4d2d17"/>
  <circle cx="69" cy="47" r="2.5" fill="#4d2d17"/>
  <path d="M31 41 C31 24, 40 18, 50 18 C60 18, 69 24, 69 41 C66 32, 58 26, 50 26 C42 26, 34 32, 31 41 Z" fill="#140f0c"/>
  <path d="M34 49 C36 63, 44 70, 50 70 C56 70, 64 63, 66 49 C66 54, 60 66, 50 66 C40 66, 34 54, 34 49 Z" fill="#140f0c"/>
  <path d="M43 53 Q50 55 57 53 Q50 58 43 53 Z" fill="#140f0c"/>
  <path d="M37 35 Q42 32 46 35" stroke="#140f0c" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <path d="M54 35 Q58 32 63 35" stroke="#140f0c" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <ellipse cx="42" cy="42" rx="3.5" ry="4" fill="#ffffff"/>
  <circle cx="42.5" cy="42" r="2.2" fill="#140f0c"/>
  <circle cx="43.2" cy="41" r="0.8" fill="#ffffff"/>
  <ellipse cx="58" cy="42" rx="3.5" ry="4" fill="#ffffff"/>
  <circle cx="57.5" cy="42" r="2.2" fill="#140f0c"/>
  <circle cx="58.2" cy="41" r="0.8" fill="#ffffff"/>
  <ellipse cx="50" cy="49.5" rx="2.5" ry="1.8" fill="#4d2d17"/>
  <path d="M44 59 Q50 63 56 59" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none"/>
</svg>`,

  'Azeez Gbolahan': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-azeez" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#bg-azeez)"/>
  <circle cx="50" cy="50" r="47" fill="none" stroke="#fef3c7" stroke-width="1.5" opacity="0.6"/>
  <path d="M16 100 C16 80, 32 72, 50 72 C68 72, 84 80, 84 100 Z" fill="#0f172a"/>
  <path d="M41 72 L50 86 L59 72 Z" fill="#f8fafc"/>
  <path d="M48 76 L52 76 L53.5 96 L50 100 L46.5 96 Z" fill="#991b1b"/>
  <rect x="44" y="60" width="12" height="15" rx="4" fill="#673d23"/>
  <ellipse cx="50" cy="46" rx="19" ry="22" fill="#79492b"/>
  <circle cx="31" cy="47" r="4.5" fill="#673d23"/>
  <circle cx="69" cy="47" r="4.5" fill="#673d23"/>
  <circle cx="31" cy="47" r="2.5" fill="#512f1a"/>
  <circle cx="69" cy="47" r="2.5" fill="#512f1a"/>
  <path d="M31 41 C31 24, 40 18, 50 18 C60 18, 69 24, 69 41 C66 32, 58 26, 50 26 C42 26, 34 32, 31 41 Z" fill="#262626"/>
  <path d="M31 37 Q33 29 37 25" stroke="#d1d5db" stroke-width="1.4" fill="none"/>
  <path d="M69 37 Q67 29 63 25" stroke="#d1d5db" stroke-width="1.4" fill="none"/>
  <path d="M37 35 Q42 32 46 35" stroke="#262626" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <path d="M54 35 Q58 32 63 35" stroke="#262626" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <ellipse cx="42" cy="42" rx="3.5" ry="4" fill="#ffffff"/>
  <circle cx="42.5" cy="42" r="2.2" fill="#262626"/>
  <circle cx="43.2" cy="41" r="0.8" fill="#ffffff"/>
  <ellipse cx="58" cy="42" rx="3.5" ry="4" fill="#ffffff"/>
  <circle cx="57.5" cy="42" r="2.2" fill="#262626"/>
  <circle cx="58.2" cy="41" r="0.8" fill="#ffffff"/>
  <rect x="36" y="37" width="12" height="10" rx="2" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
  <rect x="52" y="37" width="12" height="10" rx="2" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
  <line x1="48" y1="41" x2="52" y2="41" stroke="#f59e0b" stroke-width="1.8"/>
  <path d="M37 39 L41 38" stroke="#ffffff" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
  <ellipse cx="50" cy="63" rx="3.8" ry="3" fill="#404040"/>
  <ellipse cx="50" cy="49.5" rx="2.5" ry="1.8" fill="#512f1a"/>
  <path d="M44 55 Q50 61 56 55" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none"/>
</svg>`
};

const ill = JSON.parse(fs.readFileSync('src/data/illustrations.json', 'utf8'));
for (const [name, svg] of Object.entries(avatars)) {
  ill[name] = svg.replace(/\n/g, '').replace(/\s+/g, ' ');
}
fs.writeFileSync('src/data/illustrations.json', JSON.stringify(ill, null, 2), 'utf8');
console.log('Avatars written successfully!');
