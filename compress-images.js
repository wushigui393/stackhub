import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imageDir = path.join(__dirname, 'public');

(async () => {
  try {
    // Check if the image directory exists
    await fs.access(imageDir);
    console.log('Image directory exists:', imageDir);

    const files = await imagemin([path.join(imageDir, '**/*.{jpg,png}')], {
      destination: imageDir,
      plugins: [
        imageminMozjpeg(),
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });

    console.log('Images optimized:', files.map(file => file.path));
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Image directory not found:', imageDir);
    } else {
      console.error('Image compression failed:', error);
    }
    process.exit(1);
  }
})();