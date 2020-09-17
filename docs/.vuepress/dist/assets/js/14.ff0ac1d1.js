(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{354:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("h3",{attrs:{id:"从前端框架整体浏览器解析的角度进行优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从前端框架整体浏览器解析的角度进行优化"}},[t._v("#")]),t._v(" 从前端框架整体浏览器解析的角度进行优化")]),t._v(" "),a("ol",[a("li",[t._v("减少js包的体积大小，减少解析和编译的小号；如：减少无必要的包引入，UI组件按需加载，而不是全局安装。")]),t._v(" "),a("li",[t._v("代码切割，对一些必要但很大的包，我们可以进行按需加载；对复杂代码量大的项目可以路由按需加载。")]),t._v(" "),a("li",[t._v("通过 "),a("code",[t._v("script")]),t._v(" 添加 "),a("code",[t._v("async")]),t._v(" 和"),a("code",[t._v("defer")]),t._v(" 异步解析；")]),t._v(" "),a("li",[t._v("预渲染一个页面，在js解析的过程中，先加载此页面，随后删除、重新渲染页面；提升友好性，减少白屏时间。")]),t._v(" "),a("li",[t._v("对解析大、关键性脚本放到head块内。")])]),t._v(" "),a("h3",{attrs:{id:"具体业务细节优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体业务细节优化"}},[t._v("#")]),t._v(" 具体业务细节优化")]),t._v(" "),a("ol",[a("li",[t._v("对脚本和图片等静态资源做cdn优化；")]),t._v(" "),a("li",[t._v("公共组件、功能抽离；")]),t._v(" "),a("li",[t._v("nginx gzip 文件压缩;")])]),t._v(" "),a("h3",{attrs:{id:"css-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-性能优化"}},[t._v("#")]),t._v(" css 性能优化")]),t._v(" "),a("ol",[a("li",[t._v("懒加载 css，优先加载关键css;")]),t._v(" "),a("li",[t._v("导入通配css文件，减少重复css样式定义；")]),t._v(" "),a("li",[t._v("减少@import的使用；")]),t._v(" "),a("li",[t._v("js依赖的css放到前面解析；不依赖css，js靠前解析；")])]),t._v(" "),a("h3",{attrs:{id:"代码优化技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码优化技巧"}},[t._v("#")]),t._v(" 代码优化技巧")]),t._v(" "),a("ol",[a("li",[t._v("防抖、节流")]),t._v(" "),a("li",[t._v("dom 事件冒泡")]),t._v(" "),a("li")]),t._v(" "),a("h2",{attrs:{id:"获取目录上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取目录上下文"}},[t._v("#")]),t._v(" 获取目录上下文")]),t._v(" "),a("h3",{attrs:{id:"通过webpack中-require-context-api-获取目录上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过webpack中-require-context-api-获取目录上下文"}},[t._v("#")]),t._v(" 通过webpack中 "),a("code",[t._v("require.context")]),t._v(" API 获取目录上下文")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("入参")]),t._v(" "),a("ol",[a("li",[t._v("你要引入文件的目录")]),t._v(" "),a("li",[t._v("是否要查找该目录下的子级目录")]),t._v(" "),a("li",[t._v("匹配要引入的文件")])])]),t._v(" "),a("li",[a("p",[t._v("返回的是一个函数，函数有三个属性：resolve 、keys、id")]),t._v(" "),a("ol",[a("li",[t._v("resolve: 是一个函数，他返回的是被解析模块的id")]),t._v(" "),a("li",[t._v("keys: 也是一个函数，他返回的是一个数组，该数组是由所有可能被上下文模块解析的请求对象组成")]),t._v(" "),a("li",[t._v("id：上下文模块的id")])])])]),t._v(" "),a("h3",{attrs:{id:"动态获取子路由集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态获取子路由集合"}},[t._v("#")]),t._v(" 动态获取子路由集合:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exam_childrenRoute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" requireComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./pages/collect-exam/module'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\w+\\.(vue)$/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrequireComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fileName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" componentConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `./pages/collect-exam/module/${componentConfig.default.name}`")]),t._v("\n  exam_childrenRoute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" componentConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" componentConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" componentConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" componentConfig\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);