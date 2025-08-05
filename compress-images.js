import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const files = await imagemin([path.join(__dirname, 'public/images/**/*.{jpg,png}')], {
      destination: path.join(__dirname, 'public/images'),
      plugins: [
        imageminMozjpeg(),
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });

    console.log('Images optimized:', files.map(file => file.path));
  } catch (error) {
    console.error('Image compression failed:', error);
    process.exit(1);
  }
})();