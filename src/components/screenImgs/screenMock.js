/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-15 14:47:01
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-25 15:24:38
 * @FilePath: \my-next-app\src\components\screenImgs\screenMock.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 假设public/screen目录下有01.png到80.png的图片
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

const screenImages =generateScreenImages();
export default screenImages;
