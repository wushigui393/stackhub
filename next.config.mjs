/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-04-08 18:05:37
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-25 17:35:38
 * @FilePath: \my-next-app\next.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output: 'export', // 关键配置
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   esmExternals: false
  // },
  env: {
    API_URL: 'https://api.example.com',
  },
};

export default nextConfig;
