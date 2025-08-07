/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-15 10:33:16
 * @LastEditors: wushigui393 1783627061@qq.com
 * @LastEditTime: 2025-08-07 17:51:40
 * @FilePath: \my-next-app\src\components\visualScreen\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react'
import { Carousel,Flex,Card,Image,Dropdown   } from 'antd';
import  screenImages  from '../screenImgs/screenMock';
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
const cardStyle = {
  width: 300,
  position: 'relative',
};
const imgStyle = {
  display: 'block',
  width: 300,
  height: 180,
};
const moreStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 9,
  cursor: 'pointer',
  fontSize: 16,
  color:"#fff",
}
// eslint-disable-next-line react-hooks/rules-of-hooks
// const [itemInfo,setItemInfo]=useState()

const onClick=(e,item)=>{
  console.log(12,e,item);
  switch (e.key) {
    case 'vue':
      break;
    case 'react':
      break;  
    case 'javaScript':
      openHtml(item)
      break;
    default:
      break;
  }
}
const openHtml = (item) => {
  if (!item.name) return;
  const path = item.name.split('.')[0];
  // const url=`https://vzation${path}.wsgawxl.top/`
  const url=`https://vzation${path}.netlify.app/`
  window.open(url, '_blank');
};
const handleClick=(e,item)=>{
  // console.log(34,item)
}

const VisualScreen = () => (
    <Flex justify='space-start'  wrap gap="small">
        { screenImages.map((item, index) => {
          const handleDropdownClick = (e) => {
            onClick(e, item);
          };
          return (
            <Card key={index} style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }} >
              <Dropdown style={moreStyle} menu={{ items:dropItems, onClick: handleDropdownClick }} >
                <a style={{float:'right'}} onClick={(e) => {
                  e.preventDefault();
                  // 调用自定义函数并传递 item
                  handleClick(e, item); 
                }}>
                  <MoreOutlined  twoToneColor="#000" />
                </a>
              </Dropdown>
              {item.path && <Image
                    style={imgStyle} src={item.path}
              />}
            </Card>
          );
        })}
  </Flex>
);
export default VisualScreen;