/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-04-08 18:05:37
 * @LastEditors: wushigui393 1783627061@qq.com
 * @LastEditTime: 2025-08-07 11:22:10
 * @FilePath: \my-next-app\next.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // output: 'export', // 关键配置
  images: {
    // unoptimized: true,
  },
  // experimental: {
  //   esmExternals: false
  // },
  // env: {
  //   API_URL: 'https://api.example.com',
  // },
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 1080, 1600]
  }
};

export default nextConfig;
