const Jimp = require('jimp');

async function removeBg() {
  const image = await Jimp.read('C:\\Users\\admin\\.gemini\\antigravity\\brain\\3392a10e-f087-4bfd-9fa3-ec870b56da0d\\media__1780109443638.png');
  
  const w = image.bitmap.width;
  const h = image.bitmap.height;

  image.scan(0, 0, w, h, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Background is yellow/white. That means both R and G are relatively high.
    // Body is blue (high B, low R/G), dark (all low), or red (high R, low G/B).
    // The only place where R and G are both high is the background, and maybe the center of the red glow (white).
    
    // Calculate a "background-ness" score. 
    // If r and g are both > 160, it's highly likely background.
    if (r > 160 && g > 160) {
      // If it's near the edges, definitely background. If it's the center white spot, we might accidentally make it transparent.
      // But the center white spot has high B as well. The yellow background has lower B.
      // Let's just use a simple threshold.
      
      // Let's soften the edge by mapping (min(r,g) - 160) to alpha
      const minRG = Math.min(r, g);
      if (minRG > 140) {
          // If minRG is 255, alpha is 0. If minRG is 140, alpha is 255.
          let alpha = 255 - ((minRG - 140) * (255 / 115));
          if (alpha < 0) alpha = 0;
          if (alpha > 255) alpha = 255;
          
          // To protect the central white spot (which would have high B), we can check if it's white vs yellow.
          // Actually, the background on the left is white. So B is also high.
          
          // Just apply the alpha.
          this.bitmap.data[idx + 3] = alpha;
      }
    }
  });

  await image.writeAsync('public/hero-doctor.png');
  console.log('Background removed successfully.');
}

removeBg().catch(console.error);
