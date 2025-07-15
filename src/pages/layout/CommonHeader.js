import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { Menu } from 'antd'
import { useRouter } from 'next/router'
// Import the named export 'items'
import { items } from '@/pages/home/index.js' 

const CommonHeader = () => {
    const router = useRouter()
    // 找到当前路由对应的菜单项的 key
    const currentKey = items.find(item => item.link === router.pathname)?.key || '1'
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '80px',
        backgroundColor: '#001529',
      }}
    >
      <Link href={'/'}>
        <Image width={80} height={38} src="/logo.png" alt='网站 logo'  />
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[currentKey]}
        // 如果是多级菜单，可动态设置展开项，这里暂时和选中项一致
        openKeys={[currentKey]}
        items={items.map(item => ({
          ...item,
          label: <Link href={item.link}>{item.label}</Link>
        }))}
        style={{ flex: 1, minWidth: 0, fontSize: '20px', lineHeight: '78px' }}
        itemClassName="custom-menu-item"
      />
    </header>
  )
}

export default CommonHeader