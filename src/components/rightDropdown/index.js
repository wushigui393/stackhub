/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-16 10:29:26
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-16 14:35:57
 * @FilePath: \my-next-app\src\components\rightDropdown\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Carousel,Flex,Card,Image,Dropdown   } from 'antd';
import {
  MoreOutlined
} from '@ant-design/icons';


const dropItems=[
  {
    label: 'JavaScript',
    key: 'javaScript',
  },
  {
    label: 'Vue',
    key: 'vue',
  },
  {
    label: 'React',
    key: 'react',
  },
]
const moreStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 9,
  cursor: 'pointer',
  fontSize: 16,
  color:"#fff",
    
}
const iconStyle={
  fontSize: 16,
  width: 20,
  padding:'0 0 0 6px'
}

  // const openHtml = (filePath) => {
  //   if (!filePath) return;
  //   const encodedPath = encodeURIComponent(filePath);
  //   window.open(`/api/serveHtml?filepath=${encodedPath}`, '_blank');
  // };
const  RightDropdown = ({onSendData}) => {
    const onClick=(e)=>{
        onSendData(true)
        console.log(12,e);
        switch (e.key) {
            case 'vue':
                window.open('https://gitee.com/wu_shigui/xs-admin', '_blank')
            break;
            case 'react':
                window.open('https://gitee.com/wu_shigui/xs-admin', '_blank')
            break;  
            case 'javaScript':
            break;
            default:
            break;
        }
    }
    const handleClick = (e) => {
        console.log('点击了:',e);
        onSendData(false)
        // 可以根据点击的 item 进行相应的操作
    };
  return (
    <Dropdown  style={moreStyle} menu={{ items:dropItems,onClick  }} >
        <a style={{float:'right'}} onClick={(e) => {
                e.preventDefault();
                // 调用自定义函数并传递 item
                handleClick(e);
            }}>
            <MoreOutlined  style={iconStyle} onClick={handleClick} />
        </a>
    </Dropdown>
  )
}
export default RightDropdown
