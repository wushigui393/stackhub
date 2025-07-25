/*
 * @Author: 吴诗贵 1783627061@qq.com
 * @Date: 2025-04-08 18:05:37
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-25 15:59:57
 * @FilePath: \my-next-app\src\pages\_app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "@/styles/globals.css"
import '../pages/home/index.scss'
import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
// for date-picker i18n
import 'dayjs/locale/zh-cn'

export default function App({ Component, pageProps }) {
  return   <ConfigProvider locale={zhCN} >
  <Component {...pageProps} />
  </ConfigProvider>
}
