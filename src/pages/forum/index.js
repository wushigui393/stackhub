/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-04-24 14:53:35
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-14 16:57:43
 * @FilePath: \my-next-app\src\pages\forum\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react'
import { Layout, List, Card, Pagination, Avatar, Tag, Divider, Row, Col } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import CommonHeader from '@/pages/layout/CommonHeader'
import CommonFooter from '@/pages/layout/CommonFooter'
import './index.scss'


const { Content, Sider } = Layout

// 模拟帖子数据
const mockPosts = [
  {
    id: 1,
    title: '前端开发的未来趋势',
    author: '张三',
    date: '2025-04-24',
    tags: ['前端', '技术'],
    content: '随着技术的不断发展，前端开发也在不断演进...',
  },
  {
    id: 2,
    title: '如何优化后端性能',
    author: '李四',
    date: '2025-04-23',
    tags: ['后端', '性能优化'],
    content: '后端性能优化是提升系统响应速度的关键...',
  },
]

const ForumPage = () => {
  const [posts, setPosts] = useState(mockPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  useEffect(() => {
    // 这里可以添加获取真实帖子数据的逻辑
  }, [])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <Layout>
      <CommonHeader />
        <Content style={{ minHeight: '82vh', background: '#fff', overflow: 'auto' }}>
        这儿是论坛哦
      </Content>
      <CommonFooter />
    </Layout>
  )
}

export default ForumPage