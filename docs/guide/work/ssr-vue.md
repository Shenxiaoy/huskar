# vue 服务端渲染
> [文档](https://v3.cn.vuejs.org/guide/ssr/getting-started.html#%E6%B8%B2%E6%9F%93%E4%B8%80%E4%B8%AA-vue-%E5%BA%94%E7%94%A8)

## 安装所需集成依赖
1) 安装服务端渲染依赖
```js
npm install @vue/server-renderer
// or
yarn add @vue/server-renderer
```
- <code>@vue/server-renderer</code>和 <code>vue</code>版本号必须一致；
- 是在 vue3版本以上，所以，vue的版本也要保持一致；
exam:
```js
yarn upgrade vue@3.1.5
```

2) 本地模拟node 后台服务
- 安装 express 或koa
- 
