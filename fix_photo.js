const sharp = require('sharp');

async function run() {
  const svgText = `
  <svg width="1024" height="1024">
    <defs>
      <linearGradient id="gold" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#d8b066" />
        <stop offset="100%" stop-color="#b78a3c" />
      </linearGradient>
    </defs>
    <rect x="290" y="740" width="444" height="115" fill="url(#gold)" />
    <text x="512" y="775" font-family="Georgia, serif" font-weight="bold" font-size="24" fill="#111" text-anchor="middle" letter-spacing="0.5">DR. X. SASIKALA JEYACELINE</text>
    <text x="512" y="810" font-family="sans-serif" font-weight="bold" font-size="16" fill="#222" text-anchor="middle" letter-spacing="1.5">PHYSIOTHERAPIST</text>
    <text x="512" y="835" font-family="sans-serif" font-weight="bold" font-size="14" fill="#222" text-anchor="middle" letter-spacing="1">CLINIC DIRECTOR</text>
  </svg>`;

  await sharp('public/images/doctor-portrait.png')
    .composite([{ input: Buffer.from(svgText), blend: 'over' }])
    .toFile('public/images/doctor-portrait-v2.png');
  console.log('Done');
}

run().catch(console.error);
