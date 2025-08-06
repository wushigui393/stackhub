
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');
const COMPRESSED_DIR = path.join(PUBLIC_DIR, 'compressed'); // 可选：存储压缩后的图片

// 确保输出目录存在
if (!fs.existsSync(COMPRESSED_DIR)) {
  fs.mkdirSync(COMPRESSED_DIR);
}

async function compressImages() {
  try {
    console.log('🚀 开始压缩 public 目录中的图片...');
      // 动态导入 ESM 模块
    const imagemin = (await import('imagemin')).default;
    const imageminJpegtran = (await import('imagemin-jpegtran')).default;
    const imageminPngquant = (await import('imagemin-pngquant')).default;
    const imageminSvgo = (await import('imagemin-svgo')).default;
    
    const files = fs.readdirSync(PUBLIC_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
    );

    await Promise.all(
      imageFiles.map(async file => {
        const inputPath = path.join(PUBLIC_DIR, file);
        let outputPath = path.join(COMPRESSED_DIR, file); // 存储到压缩目录
        // 如果不想保留原图，可直接覆盖原文件：
        // outputPath = inputPath;

        // 使用 Sharp 调整大小并转换格式（示例）
        await sharp(inputPath)
          .resize(1920, null, { fit: 'inside' }) // 限制最大宽度
          .webp({ quality: 80 }) // 转为 WebP 格式
          .toFile(outputPath.replace(/\.\w+$/, '.webp'));

        // 使用 Imagemin 进行无损压缩
        await imagemin([inputPath], {
          destination: path.dirname(outputPath),
          plugins: [
            imageminJpegtran(),
            imageminPngquant({ quality: [0.6, 0.8] }),
            imageminSvgo()
          ]
        });

        console.log(`✅ 压缩完成: ${file}`);
      })
    );

    console.log('🎉 所有图片压缩完成！');
  } catch (error) {
    console.error('❌ 压缩出错:', error);
    process.exit(1);
  }
}

compressImages();
