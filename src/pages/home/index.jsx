/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: 吴诗贵 1783627061@qq.com
 * @Date: 2025-04-08 21:36:11
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-30 09:44:38
 * @FilePath: \my-next-app\src\pages\home\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{ memo } from 'react'
import { Layout } from 'antd'
import dataSource from '@/components/mock.js'
import Card from '@/components/Card.jsx'
import TopTab from '@/components/topTab.js'
import CommonHeader from '@/pages/layout/CommonHeader'
import CommonFooter from '@/pages/layout/CommonFooter.js'



const { Content } = Layout

export const items = [
  {
    key: "1",
    label: "首页",
    link: '/' 
  },
  {
    key: "2",
    label: "工具",
    link: '/home' 
  },
  {
    key: "3",
    label: "文档",
    link: '/forum' 
  },
]

const Home = memo(() => {
  const cardList = dataSource.map((item, index) => (
    <Card title={item.title} partId={item.key} dataSource={item.value} key={index} />
  ))
  return (
    <Layout>
      <CommonHeader />
      <Content style={{ minHeight: '82vh', background: '#fff', overflow: 'auto' }}>
        <TopTab dataSource={dataSource} />
        {cardList}
      </Content>
      <CommonFooter />
    </Layout>
  )
})
// 显式设置 displayName
Home.displayName = 'Home';
export default Home