/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: 吴诗贵 1783627061@qq.com
 * @Date: 2025-04-08 21:36:11
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-25 16:01:13
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
import VisualScreen from '@/components/visualScreen/index.js'

const { Content } = Layout


const indexApp =memo(() => {
  const cardList = dataSource.map((item, index) => (
    <Card title={item.title} partId={item.key} dataSource={item.value} key={item.key} />
  ))
  return (
    <Layout>
      <CommonHeader />
      <Content style={{ minHeight: '82vh', background: '#fff', overflow: 'auto' }}>
        {/* <TopTab dataSource={dataSource} />
        {cardList} */}
        <VisualScreen />
      </Content>
      <CommonFooter />
    </Layout>
  )
}) 
// 显式设置 displayName
indexApp.displayName = 'indexApp';
export default indexApp