/*
 * @Author: 吴诗贵 1783627061@qq.com
 * @Date: 2025-04-08 18:10:47
 * @LastEditors: 吴诗贵 1783627061@qq.com
 * @LastEditTime: 2025-04-09 11:29:09
 * @FilePath: \my-next-app\src\pages\login\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 导入 React 库和 useState 钩子
 * React 是用于构建用户界面的 JavaScript 库
 * useState 是 React 的一个钩子，用于在函数组件中添加状态
 */
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './login.module.css' 
import { Button, Flex } from 'antd'

const LoginPage = () => {
    // 使用 useState 钩子创建状态变量 username 和其更新函数 setUsername
    const [username, setUsername] = useState('')
    // 使用 useState 钩子创建状态变量 password 和其更新函数 setPassword
    const [password, setPassword] = useState('')
    // 使用 useState 钩子创建状态变量 error 和其更新函数 setError
    const [error, setError] = useState('')

    // 模拟有效的用户名和密码
    const validUsername = 'admin'
    const validPassword = 'password'

    /**
     * 处理表单提交事件
     * @param {Event} e - 表单提交事件对象
     */
    const handleSubmit = (e) => {
        // 阻止表单的默认提交行为
        e.preventDefault()
        // 检查输入的用户名和密码是否与有效用户名和密码匹配
        if (username === validUsername && password === validPassword) {
            // 如果匹配，清除错误信息
            setError('')
            // 输出登录成功信息到控制台
            console.log('登录成功')
            // 这里可以添加跳转到其他页面的逻辑
        } else {
            // 如果不匹配，设置错误信息
            setError('用户名或密码错误')
        }
    }

    return (
        // 使用 CSS 模块的类名 loginContainer 来设置登录容器的样式
        <div className={styles.loginContainer}>
            <h1>Login Page</h1>
            {/* 如果存在错误信息，显示错误信息 */}
            {error && <p className={styles.error}>{error}</p>}
            {/* 表单元素，绑定 onSubmit 事件处理函数 handleSubmit */}
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <label>
                    Username:
                    {/* 输入框，绑定输入值到 username 状态，绑定 onChange 事件更新 username 状态 */}
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.inputField}
                    />
                </label>
                <label>
                    Password:
                    {/* 密码输入框，绑定输入值到 password 状态，绑定 onChange 事件更新 password 状态 */}
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.inputField}
                    />
                </label>
                {/* 提交按钮，点击时触发表单提交事件 */}
                {/* <button type="submit" className={styles.submitButton}>Login</button> */}
                <Link href={'/home'}>
                <Button type="primary">Login</Button>
                </Link>
            </form>
        </div>
    )
}

// 导出 LoginPage 组件，以便其他文件可以使用
export default LoginPage