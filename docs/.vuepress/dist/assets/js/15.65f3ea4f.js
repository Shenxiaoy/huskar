(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{357:function(t,a,s){"use strict";s.r(a);var e=s(40),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),s("h3",{attrs:{id:"从前端框架整体浏览器解析的角度进行优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从前端框架整体浏览器解析的角度进行优化"}},[t._v("#")]),t._v(" 从前端框架整体浏览器解析的角度进行优化")]),t._v(" "),s("ol",[s("li",[t._v("减少js包的体积大小，减少解析和编译的小号；如：减少无必要的包引入，UI组件按需加载，而不是全局安装。")]),t._v(" "),s("li",[t._v("代码切割，对一些必要但很大的包，我们可以进行按需加载；对复杂代码量大的项目可以路由按需加载。")]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("script")]),t._v(" 添加 "),s("code",[t._v("async")]),t._v(" 和"),s("code",[t._v("defer")]),t._v(" 异步解析；")]),t._v(" "),s("li",[t._v("预渲染一个页面，在js解析的过程中，先加载此页面，随后删除、重新渲染页面；提升友好性，减少白屏时间。")]),t._v(" "),s("li",[t._v("对解析大、关键性脚本放到head块内。")]),t._v(" "),s("li",[t._v("配置 tree shaking 减去无用代码，减少导报体积； "),s("a",{attrs:{href:"https://www.webpackjs.com/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tree-shaking"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("WebAssembly 使用c++编写的汇编语言，把js进行编译成浏览器执行执行的代码，大幅度提高运行速度；")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"}},[t._v("esbuild"),s("OutboundLink")],1),t._v("，一个快速的 JavaScript、TypeScript 代码打包和压缩工具,比其他 JavaScript 打包程序快至少 100 倍(感觉夸大);它是用 Go 语言编写的，该语言可以编译为本地代码。")])]),t._v(" "),s("h3",{attrs:{id:"具体业务细节优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体业务细节优化"}},[t._v("#")]),t._v(" 具体业务细节优化")]),t._v(" "),s("ol",[s("li",[t._v("对脚本和图片等静态资源做cdn优化；")]),t._v(" "),s("li",[t._v("公共组件、功能抽离；")]),t._v(" "),s("li",[t._v("nginx gzip 文件压缩;")])]),t._v(" "),s("h3",{attrs:{id:"css-性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-性能优化"}},[t._v("#")]),t._v(" css 性能优化")]),t._v(" "),s("ol",[s("li",[t._v("懒加载 css，优先加载关键css;")]),t._v(" "),s("li",[t._v("导入通配css文件，减少重复css样式定义；")]),t._v(" "),s("li",[t._v("减少@import的使用；")]),t._v(" "),s("li",[t._v("js依赖的css放到前面解析；不依赖css，js靠前解析；")])]),t._v(" "),s("h3",{attrs:{id:"代码优化技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码优化技巧"}},[t._v("#")]),t._v(" 代码优化技巧")]),t._v(" "),s("ol",[s("li",[t._v("防抖、节流")]),t._v(" "),s("li",[t._v("dom 事件冒泡")]),t._v(" "),s("li")]),t._v(" "),s("h2",{attrs:{id:"获取目录上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取目录上下文"}},[t._v("#")]),t._v(" 获取目录上下文")]),t._v(" "),s("h3",{attrs:{id:"通过webpack中-require-context-api-获取目录上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过webpack中-require-context-api-获取目录上下文"}},[t._v("#")]),t._v(" 通过webpack中 "),s("code",[t._v("require.context")]),t._v(" API 获取目录上下文")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("入参")]),t._v(" "),s("ol",[s("li",[t._v("你要引入文件的目录")]),t._v(" "),s("li",[t._v("是否要查找该目录下的子级目录")]),t._v(" "),s("li",[t._v("匹配要引入的文件")])])]),t._v(" "),s("li",[s("p",[t._v("返回的是一个函数，函数有三个属性：resolve 、keys、id")]),t._v(" "),s("ol",[s("li",[t._v("resolve: 是一个函数，他返回的是被解析模块的id")]),t._v(" "),s("li",[t._v("keys: 也是一个函数，他返回的是一个数组，该数组是由所有可能被上下文模块解析的请求对象组成")]),t._v(" "),s("li",[t._v("id：上下文模块的id")])])])]),t._v(" "),s("h3",{attrs:{id:"动态获取子路由集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态获取子路由集合"}},[t._v("#")]),t._v(" 动态获取子路由集合:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exam_childrenRoute "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" requireComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./pages/collect-exam/module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\w+\\.(vue)$/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrequireComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fileName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" componentConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `./pages/collect-exam/module/${componentConfig.default.name}`")]),t._v("\n  exam_childrenRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" componentConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" componentConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" componentConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" componentConfig\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"性能测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能测试"}},[t._v("#")]),t._v(" 性能测试")]),t._v(" "),s("h3",{attrs:{id:"vue包大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue包大小"}},[t._v("#")]),t._v(" vue包大小")]),t._v(" "),s("p",[t._v("v2单独 vue库打包后 100kb左右，加上vue-router 140kb左右；")]),t._v(" "),s("p",[t._v("如果使用了elment-ui等UI框架全局，基础体积将会达到2.5mb左右；")]),t._v(" "),s("p",[t._v("v3打包后基础js包80kb，比v2小近20kb;")]),t._v(" "),s("p",[t._v("以上是通过vue/cli打包后的大小；如果webpack 配置项去打包vue，64kb。")]),t._v(" "),s("h3",{attrs:{id:"微前端架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微前端架构"}},[t._v("#")]),t._v(" 微前端架构")]),t._v(" "),s("p",[t._v("webpack5 出了"),s("code",[t._v("module feberation")]),t._v("，重新定义web前端项目架构，最突出的功能解决了多冗余问题，各打包bundle可以互相共享代码段。")])])}),[],!1,null,null,null);a.default=n.exports}}]);