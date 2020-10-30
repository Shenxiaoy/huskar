# 性能优化

### 从前端框架整体浏览器解析的角度进行优化
1) 减少js包的体积大小，减少解析和编译的小号；如：减少无必要的包引入，UI组件按需加载，而不是全局安装。
2) 代码切割，对一些必要但很大的包，我们可以进行按需加载；对复杂代码量大的项目可以路由按需加载。
3) 通过 <code>script</code> 添加 <code>async</code> 和<code>defer</code> 异步解析；
4) 预渲染一个页面，在js解析的过程中，先加载此页面，随后删除、重新渲染页面；提升友好性，减少白屏时间。
5) 对解析大、关键性脚本放到head块内。
6) 配置 tree shaking 减去无用代码，减少导报体积； [tree-shaking](https://www.webpackjs.com/guides/tree-shaking/)
7) WebAssembly 使用c++编写的汇编语言，把js进行编译成浏览器执行执行的代码，大幅度提高运行速度；
8) [esbuild](https://github.com/evanw/esbuild)，一个快速的 JavaScript、TypeScript 代码打包和压缩工具,比其他 JavaScript 打包程序快至少 100 倍(感觉夸大);它是用 Go 语言编写的，该语言可以编译为本地代码。

### 具体业务细节优化
1) 对脚本和图片等静态资源做cdn优化；
2) 公共组件、功能抽离；
3) nginx gzip 文件压缩;

### css 性能优化
1) 懒加载 css，优先加载关键css; 
2) 导入通配css文件，减少重复css样式定义；
3) 减少@import的使用；
4) js依赖的css放到前面解析；不依赖css，js靠前解析；

### 代码优化技巧
1) 防抖、节流
2) dom 事件冒泡
3) 

## 获取目录上下文
### 通过webpack中 <code>require.context</code> API 获取目录上下文
- 入参
  1. 你要引入文件的目录
  2. 是否要查找该目录下的子级目录
  3. 匹配要引入的文件

- 返回的是一个函数，函数有三个属性：resolve 、keys、id
  1. resolve: 是一个函数，他返回的是被解析模块的id
  2. keys: 也是一个函数，他返回的是一个数组，该数组是由所有可能被上下文模块解析的请求对象组成
  3. id：上下文模块的id

### 动态获取子路由集合:
```js
export const exam_childrenRoute = []
const requireComponent = require.context(
  './pages/collect-exam/module',
  false,
  /\w+\.(vue)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  // `./pages/collect-exam/module/${componentConfig.default.name}`
  exam_childrenRoute.push({
    path: componentConfig.default.name,
    name: componentConfig.default.name,
    component: componentConfig.default || componentConfig
  })
})
```

## 性能测试

### vue包大小
v2单独 vue库打包后 100kb左右，加上vue-router 140kb左右；

如果使用了elment-ui等UI框架全局，基础体积将会达到2.5mb左右；

v3打包后基础js包80kb，比v2小近20kb;

以上是通过vue/cli打包后的大小；如果webpack 配置项去打包vue，64kb。

### 微前端架构
webpack5 出了<code>module feberation</code>，重新定义web前端项目架构，最突出的功能解决了多冗余问题，各打包bundle可以互相共享代码段。