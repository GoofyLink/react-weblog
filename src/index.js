// 编写react 代码 通过 react渲染内容
import ReactDOM from 'react-dom/client'     
import React from 'react'
import App from './App'


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)