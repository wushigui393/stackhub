 
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: 吴诗贵 1783627061@qq.com
 * @Date: 2025-04-08 21:36:11
 * @LastEditors: 吴诗贵 1783627061@qq.com
 * @LastEditTime: 2025-04-11 17:05:24
 * @FilePath: \my-next-app\src\pages\home\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { CheckCard } from '@ant-design/pro-components';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,ConfigProvider,Avatar,Affix  } from 'antd';
import dataSource from '@/components/mock.js'
import Card from '@/components/Card.js';
import TopTab from '@/components/topTab.js';
import './index.scss'
const { Header, Content, Footer } = Layout;
const items = Array.from({ length: 1 }).map((_, index) => ({
  key: String(index + 1),
  label: `首页`,
}));

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const cardList=dataSource.map((item,index)=>(
    <Card title={item.title} partId={item.key} dataSource={item.value} key={index}></Card> 
  ))
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height:'80px'
        }}
      >
        <Link href={'/'}>
          <Image width={50}  height={38} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
       </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0,fontSize:'20px' }}
        />
      </Header>
      <Content style={{minHeight:'82vh', background:'#fff',overflow:'auto'}}>
        <TopTab dataSource={dataSource}></TopTab>
        {cardList}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Home;