/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-30 09:58:14
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-31 08:36:44
 * @FilePath: \my-next-app\src\components\forumTab\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{memo} from 'react';

import { Affix,Tabs } from 'antd';

const  ForumTab =({dataSource,changeTab}) => {
    const onChange = key => {
        changeTab(key)
    };
    const items=dataSource.map((item,index)=>{
        return {key:item.key,label:item.title}
    })
    const defaultActiveKey=dataSource[0].key
    // console.log(items,dataSource);
    return (
         <Affix className='toptab-sty' offsetTop={80}>
            <Tabs defaultActiveKey={defaultActiveKey} items={items} onChange={onChange} />
         </Affix>
    )
}

export default ForumTab;