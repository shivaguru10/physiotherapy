const sharp = require('sharp');

async function removeBg() {
  try {
    const imagePath = 'C:\\Users\\admin\\.gemini\\antigravity\\brain\\3392a10e-f087-4bfd-9fa3-ec870b56da0d\\premium_doctor_1780111522539.png';
    console.log('Reading image...');
    
    const { data, info } = await sharp(imagePath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      const avg = (r + g + b) / 3;
      
      // The background should be mostly white.
      if (r > 180 && g > 180 && b > 180) {
        let alpha = Math.round(255 - ((avg - 180) * (255 / 75)));
        if (alpha < 0) alpha = 0;
        if (alpha > 255) alpha = 255;
        data[i + 3] = alpha;
      }
    }

    console.log('Writing output image...');
    await sharp(data, {
      raw: { width: info.width, height: info.height, channels: 4 }
    })
    .png()
    .toFile('public/hero-doctor-v3.png');
    
    console.log('Background removed perfectly!');
  } catch (error) {
    console.error('Error:', error);
  }
}

removeBg();
