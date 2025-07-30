/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-16 10:29:26
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-30 16:24:58
 * @FilePath: \my-next-app\src\components\rightDropdown\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Carousel,Flex,Card,Image,Dropdown,notification    } from 'antd';
import {
  MoreOutlined
} from '@ant-design/icons';


// const dropItems=[
//   {
//     label: 'JavaScript',
//     key: 'javaScript',
//   },
//   {
//     label: 'Vue',
//     key: 'vue',
//   },
//   {
//     label: 'React',
//     key: 'react',
//   },
// ]
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
  

const  RightDropdown = ({item,onSendData}) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: '提示',
      description:
        '作者还未添加该模块的项目',
      duration: 3,
    });
  };
  const dropItems= item.dropItems?item.dropItems:[ {
            label: '未配置',
            key: '未配置',
          },]
    const onClick=(e)=>{
        onSendData(e.key)
        if(e.item.props.path){
          window.open(e.item.props.path, '_blank')
        }else{
          openNotification()
        }
    }
    const handleClick = (e) => {
        e.stopPropagation();
        console.log('点击了:',e);
        onSendData(true)
        // 可以根据点击的 item 进行相应的操作
    };
  return (
    <>
    {contextHolder}
    <Dropdown  style={moreStyle} menu={{ items:dropItems,onClick  }} onClick={handleClick} >
        <a style={{float:'right'}} onClick={(e) => {
                e.preventDefault();
                // 调用自定义函数并传递 item
                handleClick(e);
            }}>
            <MoreOutlined  style={iconStyle} onClick={handleClick} />
        </a>
    </Dropdown>
  </>
  )
}
export default RightDropdown
