/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-04-24 14:53:35
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-31 08:48:56
 * @FilePath: \my-next-app\src\pages\forum\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { memo, useState, useEffect} from 'react'
import { Layout,Tabs,Flex,List, Card, Pagination, Avatar, Tag, Divider, Row, Col } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import ForumTab from '@/components/forumTab'
import dataSource from '@/components/mock.js'
import CommonHeader from '@/pages/layout/CommonHeader'
import CommonFooter from '@/pages/layout/CommonFooter'


const { Content, Sider } = Layout
const ForumStyle={
    height:'88vh',
    background:'#fff',
    overflow:'auto',
    padding:'0 5px',
}

const ForumPage = memo(() => {
  const [treeInfo,setTreeInfo] = useState(null)
  const [activeKey,setActiveKey] = useState(null)
  useEffect(() => {
    setTreeInfo(dataSource[0].value.map((ele)=>{
      return{
        ...ele,
        label:ele.title,
        key:ele.title,
      }
    })) 
    setActiveKey(dataSource[0].value[0].value)   
    // 这里可以添加获取真实帖子数据的逻辑
  }, [])
  const changeTab=(key)=>{
    dataSource.forEach(item=>{
      if(item.key===key){
        setTreeInfo(item.value.map((ele)=>{
          return{
            ...ele,
            label:ele.title,
            key:ele.title,
          }
        }))
      }
    })
    console.log(55555,key);
    // setActiveKey(treeInfo[0]?.value)
  }
  const onChange=(key)=>{
    console.log(treeInfo.find(item=>item.key==key));
    let item = treeInfo.find(item=>item.key==key)
    setActiveKey(item.url || item.value)
    console.log(2234,activeKey);
  }
  useEffect(() => {
    if (Array.isArray(treeInfo) && treeInfo.length > 0) {
      setActiveKey(treeInfo[0].url || treeInfo[0].value);
    }
  }, [treeInfo]);
  return (
    <Layout>
      <CommonHeader />
        <Content style={ForumStyle}>
            <ForumTab dataSource={dataSource} changeTab={changeTab} />
              <Flex >
                <iframe 
                  src={activeKey} 
                  width="100%" 
                  height="800px"
                />
                 <Tabs tabPosition='right' defaultActiveKey="1" items={treeInfo} onChange={onChange} />
              </Flex>
           
        </Content>
      {/* <CommonFooter /> */}
    </Layout>
  )
})
// 显式设置 displayName
ForumPage.displayName = 'ForumPage';
export default ForumPage