/*
 * @Author: 吴诗贵 1783627061@qq.com
 * @Date: 2025-04-10 10:10:27
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-30 16:06:05
 * @FilePath: \my-next-app\src\components\Card.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { CheckCard } from '@ant-design/pro-components'
import { useState } from 'react'
import { Tooltip } from 'antd'
import RightDropdown from '@/components/rightDropdown'

const dropdownStyle={
    position: 'absolute',
    top: 0,
    right: 0,
    // zIndex: 1000,
    border: '1px solid #eee',
}

const Card=(props)=>{
    const { title, dataSource,partId } = props
    // 新增：使用 useState 来管理选中状态
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState(null);
    // 声明 dropVal 状态及其更新函数
    const [dropVal, setDropVal] = useState(false);
    const handleChange = (checked) => {
      if (['vue'].includes(dropVal)) {
    //    return  window.open('https://gitee.com/wu_shigui/xs-admin', '_blank'),setDropVal(false)
      }
      console.log(990,checked,dropVal);
      if (typeof checked === 'string' && !dropVal) {
          window.open(checked, '_blank')
          // 新增：打开新窗口后，将选中状态置为 null
          setSelectedValue(null)
      }
    }
    const handleChildData=(e)=>{
        // setDropVal(e)
    }
     // 新增阻止事件冒泡的处理函数
    const handleClick = (e) => {
        e.stopPropagation();
    }
    return (
        <div
            id={partId}
            className='content-sty'
        > 
            <div className='type-title' >
                <svg t="1744248386157" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4681" width="42" height="55"><path d="M609.066667 172.330667a42.666667 42.666667 0 0 1 29.312 52.736l-170.666667 597.333333a42.666667 42.666667 0 1 1-82.048-23.466667l170.666667-597.333333a42.666667 42.666667 0 0 1 52.736-29.269333z" p-id="4682" fill="#17abe3"></path></svg>
                <span>{title}</span>
                <svg t="1744248386157" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4681" width="42" height="55"><path d="M609.066667 172.330667a42.666667 42.666667 0 0 1 29.312 52.736l-170.666667 597.333333a42.666667 42.666667 0 1 1-82.048-23.466667l170.666667-597.333333a42.666667 42.666667 0 0 1 52.736-29.269333z" p-id="4682" fill="#17abe3"></path></svg>
            </div>
            <CheckCard.Group  className='card-sty' 
                options={dataSource.map(item => ({
                    ...item,
                    description: (
                        <div>
                            <Tooltip placement="bottomRight" title={item.description} color='rgba(36, 189, 255,1)'>
                                <div
                                    style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,  // 限制显示两行
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis', // 超出部分用...表示
                                    }}
                                >
                                    {item.description}
                                </div>
                            </Tooltip>
                            {item.dropItems && (
                                <div style={dropdownStyle} onClick={handleClick}>
                                    <RightDropdown  item={item} onSendData={handleChildData} onClick={handleClick} />
                                </div>
                            )}
                        </div>   
                    )
                }))}
                value={selectedValue} onChange={handleChange}  />
        </div>
    )
}
export default Card