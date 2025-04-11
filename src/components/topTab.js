/*
 * @Author: 吴诗贵 1783627061@qq.com
 * @Date: 2025-04-11 16:38:40
 * @LastEditors: 吴诗贵 1783627061@qq.com
 * @LastEditTime: 2025-04-11 17:27:52
 * @FilePath: \my-next-app\src\components\topTab.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import {Affix,Anchor   } from 'antd';

const TopTab = ({dataSource}) => {
    const cardList=dataSource.map((item,index)=>{
      return {key:item.key,href:item.href,title:item.title}
    })
  return (
    <Affix className='toptab-sty' offsetTop={80}>
    <Anchor
        className='Anchor-sty'
        direction="horizontal"
        offsetTop={80}
        items={cardList}
      />
    </Affix>
  );
};
export default TopTab;