/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-15 14:47:01
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-15 16:42:19
 * @FilePath: \my-next-app\src\components\screenImgs\screenMock.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 假设public/screen目录下有01.png到20.png的图片
const generateScreenImages = () => {
  const imageCount = 80; // 根据实际图片数量调整
  return Array.from({ length: imageCount }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return {
      id: i,
      name: `${num}.png`,
      path: `/screen/${num}.png`
    };
  });
};
// 适用于webpack/vite等构建环境
function loadImages() {
  const images = [];
  const context = require.context('/screen/', false, /\.(png|jpe?g|gif|svg)$/);
  console.log(3333,context.keys());
  context.keys().forEach(key => {
    images.push({
      name: key.replace('/screen/', ''),
      path: context(key)
    });
  });

  return images;
}


const screenImages =generateScreenImages();
const imageArray = loadImages();
export default screenImages;
// export default imageArray
