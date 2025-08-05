import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
  const files = await imagemin(['public/images/**/*.{jpg,png}'], {
    destination: 'public/images',
    plugins: [
      imageminMozjpeg(),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  console.log('Images optimized:', files.map(file => file.path));
})();