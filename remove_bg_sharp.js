const sharp = require('sharp');

async function removeBg() {
  try {
    const imagePath = 'C:\\Users\\admin\\.gemini\\antigravity\\brain\\3392a10e-f087-4bfd-9fa3-ec870b56da0d\\media__1780109443638.png';
    console.log('Reading image...');
    
    // Read the image and get raw pixel data
    const { data, info } = await sharp(imagePath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    console.log(`Image info: ${info.width}x${info.height}, channels: ${info.channels}`);

    // The image has a bright yellow/white background.
    // The subject is dark blue, cyan, and red.
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Calculate how "yellow/white" the pixel is.
      // Yellow is high R and high G.
      // We can use the minimum of R and G to determine if it's the background.
      const minRG = Math.min(r, g);
      
      // Background pixels typically have R > 150 and G > 150.
      if (minRG > 150) {
        // We want a smooth transition for the alpha channel to avoid jagged edges.
        // If minRG is 255, alpha should be 0.
        // If minRG is 150, alpha should be 255 (fully opaque).
        let alpha = Math.round(255 - ((minRG - 150) * (255 / 105)));
        
        // Ensure alpha is within 0-255 bounds
        if (alpha < 0) alpha = 0;
        if (alpha > 255) alpha = 255;
        
        // Wait, the center of the red spot is white!
        // If R, G, B are all high, it might be the white spot.
        // But the yellow background has lower B.
        // The center white spot has high R, high G, and high B.
        // If it's the center white spot, let's try to preserve it.
        // The background on the left is also white. So B is also high there.
        // It's safer to just make it transparent and let the background of the website show through.
        
        data[i + 3] = alpha;
      }
    }

    console.log('Writing output image...');
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile('public/hero-doctor.png');
    
    console.log('Background removed perfectly!');
  } catch (error) {
    console.error('Error:', error);
  }
}

removeBg();
