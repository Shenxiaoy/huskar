(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{351:function(t,a,s){"use strict";s.r(a);var r=s(40),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"解构的几种应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解构的几种应用"}},[t._v("#")]),t._v(" 解构的几种应用")]),t._v(" "),s("h3",{attrs:{id:"symbol-interator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol-interator"}},[t._v("#")]),t._v(" Symbol.interator")]),t._v(" "),s("h2",{attrs:{id:"http请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http请求"}},[t._v("#")]),t._v(" http请求")]),t._v(" "),s("h3",{attrs:{id:"http请求方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http请求方法"}},[t._v("#")]),t._v(" http请求方法")]),t._v(" "),s("ul",[s("li",[t._v("get")]),t._v(" "),s("li",[t._v("post")]),t._v(" "),s("li",[t._v("put")]),t._v(" "),s("li",[t._v("delete")]),t._v(" "),s("li",[t._v("options")]),t._v(" "),s("li",[t._v("head")]),t._v(" "),s("li",[t._v("trace")]),t._v(" "),s("li",[t._v("connect")])]),t._v(" "),s("h3",{attrs:{id:"状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),s("ul",[s("li",[t._v("1xx消息——请求已被服务器接收，继续处理")]),t._v(" "),s("li",[t._v("2xx成功——请求已成功被服务器接收、理解、并接受")]),t._v(" "),s("li",[t._v("3xx重定向——需要后续操作才能完成这一请求")]),t._v(" "),s("li",[t._v("4xx请求错误——请求含有词法错误或者无法被执行")]),t._v(" "),s("li",[t._v("5xx服务器错误——服务器在处理某个正确请求时发生错误")])]),t._v(" "),s("h4",{attrs:{id:"常遇到的状态码情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常遇到的状态码情况"}},[t._v("#")]),t._v(" 常遇到的状态码情况")]),t._v(" "),s("p",[t._v("200：服务器成功处理了请求； 204：请求成功，只是没有响应数据\n301和302 非常相似，  一个是永久转移，一个是临时转移；304：使用缓存信息资源；\n400：客服端是错误的请求，一般指传递的参数内容有问题；401：未授权，需要认证；403：请求被服务器拒绝；404未找到资源；405：请求方法不对；\n500：服务器发生错误；501：请求与服务器服务不相匹配；502：网关故障；503：服务器目前无法为请求提供服务，但过一段时间就可以恢复服务；504： 超时；505：不支持的http版本；")]),t._v(" "),s("h3",{attrs:{id:"浏览器缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[t._v("#")]),t._v(" 浏览器缓存")]),t._v(" "),s("ol",[s("li",[t._v("强制缓存")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 绝对时间来强调过期时间\nExpires:  Fri, 16 Nov 2018 08:37:18 GMT \n\n//相对时间来强调过期时间，过期就请求新的服务器内容，未过期就使用缓存, 优先级大于Expires\nCahce-Control: max-age=3430000\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("协商缓存")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// 表示该资源在服务器上最后的修改时间\nLast-Modified: Thu, 15 Nov 2018 04:13:22 GMT\n\n//Etag 文档内容编码, 只要文件内容不同，它们对应的 Etag 就是不同的，因此 Etag 能够精准地感知文件的变化。\nEtag: W/"5becf2a1-5e8"    //弱验证，开头带有 w/   响应头返回\n')])])]),s("ul",[s("li",[t._v("首次请求资源时，服务器在返回资源的同时，会在Response Headers中写入Last-Modified首部，表示该资源在服务器上的最后修改时间。")]),t._v(" "),s("li",[t._v("当再次请求该资源时，会在Request Headers 中写入If-Modified-Since首部，此时的If-Modified-Since的值是首次请求资源时所返回的Last-Modified的值。")]),t._v(" "),s("li",[t._v("服务器接收到请求后，会根据If-Modified-Since的值判断资源在该日期之后是否发生过变化。")]),t._v(" "),s("li",[t._v("如果没有，则会返回304 Not Modified;如果变化了，则会返回变化过后的资源，同时更新Last-Modified的值。")])]),t._v(" "),s("blockquote",[s("p",[t._v("if-modified-since: 一个条件式请求首部，服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为 200  。如果请求的资源从那时起未经修改，那么返回一个不带有消息主体的  304  响应，而在 Last-Modified 首部中会带有上次修改时间。")])]),t._v(" "),s("blockquote",[s("p",[t._v("if-None-Match: 对于GET 和 HEAD 请求方法来说,当缓存的ETag和再次请求服务器返回的ETag 相同匹配时，响应码为200，不匹配为304；\nETag 属性之间的比较采用的是弱比较算法，即两个文件除了每个比特都相同外，内容一致也可以认为是相同的。例如，如果两个页面仅仅在页脚的生成时间有所不同，就可以认为二者是相同的。")])]),t._v(" "),s("blockquote",[s("p",[t._v("当与 If-None-Match 一同出现时，它（If-Modified-Since）会被忽略掉")])]),t._v(" "),s("blockquote",[s("p",[t._v("Last-modified : 当浏览器第一次请求一个url时，服务器端的返回状态码为200，同时HTTP响应头会有一个Last-Modified标记着文件在服务器端最后被修改的时间。")])]),t._v(" "),s("h3",{attrs:{id:"cache-control-请求头常用属性说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-请求头常用属性说明"}},[t._v("#")]),t._v(" Cache-Control  请求头常用属性说明")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("max-age/s-maxage   //   它们唯一的不同点就在于s-maxage指令只适用于代理服务器缓存。s-maxage的优先级高于max-age。")])]),t._v(" "),s("li",[s("p",[t._v("public/private   //  如果我们为资源设置了 public，那么它既可以被浏览器缓存，也可以被代理服务器缓存；如果我们设置了 private，则该资源只能被浏览器缓存。")])]),t._v(" "),s("li",[s("p",[t._v("no-cache/no-store  //  no-cache 表示客户端要求缓存在提供其已缓存的副本之前必须先和原始服务器对该文档进行验证。即强制跳过强缓存阶段，直接进行协商缓存。强缓存并不能知道缓存是否真的足够新鲜，使用no-cache就是为了防止从缓存中返回过期的资源，对缓存进行再验证。")])]),t._v(" "),s("li",[s("p",[t._v("no-store表示的是禁止缓存，即每一次都是直接与原服务器进行通信，从原服务器返回资源。一般设置了no-store的资源，都暗示着该资源具有敏感性信息。")])])]),t._v(" "),s("h3",{attrs:{id:"箭头函数与普通函数的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数与普通函数的区别"}},[t._v("#")]),t._v(" 箭头函数与普通函数的区别")]),t._v(" "),s("h3",{attrs:{id:"防抖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防抖"}},[t._v("#")]),t._v(" 防抖")]),t._v(" "),s("p",[t._v("所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。")]),t._v(" "),s("h3",{attrs:{id:"节流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节流"}},[t._v("#")]),t._v(" 节流")]),t._v(" "),s("p",[t._v("所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。")]),t._v(" "),s("h2",{attrs:{id:"前端web攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端web攻击"}},[t._v("#")]),t._v(" 前端web攻击")]),t._v(" "),s("h3",{attrs:{id:"xss攻击-跨站脚本攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击-跨站脚本攻击"}},[t._v("#")]),t._v(" XSS攻击 跨站脚本攻击")]),t._v(" "),s("p",[t._v("页面渲染的数据中国包含可运行js脚本")]),t._v(" "),s("p",[t._v("攻击类型：url参数注入，存储读取注入")]),t._v(" "),s("h4",{attrs:{id:"如何防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防御"}},[t._v("#")]),t._v(" 如何防御")]),t._v(" "),s("ul",[s("li",[t._v("浏览器自带防御机制，http响应头中自动添加x-xss-protection，值为0（关闭），1（打开），默认打开")]),t._v(" "),s("li",[t._v("对特殊字符作转义处理 如：<> &lt等。")])]),t._v(" "),s("h3",{attrs:{id:"csrf-跨站请求伪造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-跨站请求伪造"}},[t._v("#")]),t._v(" CSRF 跨站请求伪造")]),t._v(" "),s("p",[t._v("来自第三方网站发起的请求，通过盗取用户的cookie信息，从而成功访问；")]),t._v(" "),s("h4",{attrs:{id:"如何防御-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防御-2"}},[t._v("#")]),t._v(" 如何防御")]),t._v(" "),s("ul",[s("li",[t._v("禁止第三方网站携带本网站的cookie信息，设置same-site属性，same-site属性有两个值，Strict（所有的第三方请求都不能携带本网站的cookie）和Lax（链接可以，但是form表单提交和ajax请求不行）。")]),t._v(" "),s("li",[t._v("使用验证码或者token信息")]),t._v(" "),s("li",[t._v("referer验证：禁止第三方的请求")])]),t._v(" "),s("h3",{attrs:{id:"点击劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[t._v("#")]),t._v(" 点击劫持")]),t._v(" "),s("p",[t._v("第三方网站通过iframe内嵌某一个网站，并且将iframe设置为透明不可见，将其覆盖在其他经过伪装的DOM上，伪装的可点击DOM（按钮等）与实际内嵌网站的可点击DOM位置相同，当用户点击伪装的DOM时，实际上点击的是iframe中内嵌的网页的DOM从而触发请求操作。")]),t._v(" "),s("h4",{attrs:{id:"如何防御-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防御-3"}},[t._v("#")]),t._v(" 如何防御")]),t._v(" "),s("ul",[s("li",[t._v("Javascript禁止内嵌：当网页没有被使用iframe内嵌时，top和window是相等的；当网页被内嵌时，top和window是不相等的；")]),t._v(" "),s("li",[t._v("设置http响应头 X-Frame-Options：")])]),t._v(" "),s("h3",{attrs:{id:"sql注入攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql注入攻击"}},[t._v("#")]),t._v(" sql注入攻击")]),t._v(" "),s("p",[t._v("攻击者在HTTP请求中注入恶意的SQL代码，并在服务端执行。")]),t._v(" "),s("h4",{attrs:{id:"如何防御-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防御-4"}},[t._v("#")]),t._v(" 如何防御")]),t._v(" "),s("ul",[s("li",[t._v("限制字符串输入的长度；")]),t._v(" "),s("li",[t._v("有效的校验")])]),t._v(" "),s("h3",{attrs:{id:"canvas-基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canvas-基础"}},[t._v("#")]),t._v(" canvas 基础")]),t._v(" "),s("h3",{attrs:{id:"作用域-作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域-作用域链"}},[t._v("#")]),t._v(" 作用域 作用域链")]),t._v(" "),s("ul",[s("li",[t._v("作用域：变量或者函数的有效作用范围")]),t._v(" "),s("li",[t._v("作用域链：我们需要查找某个变量值，会先在当前作用域查找，如果找不到会往上一级查，如果找到的话，就返回停止查找，返回查找的值，这种向上查找的链条关系，叫作用域")])]),t._v(" "),s("h3",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),s("p",[t._v("指的是能够访问另一个函数作用域的变量的函数。\n闭包就是一个函数，这个函数能够访问其他函数的作用域中的变量")]),t._v(" "),s("h3",{attrs:{id:"原型-原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型-原型链"}},[t._v("#")]),t._v(" 原型 原型链")]),t._v(" "),s("ul",[s("li",[t._v("一个函数可以看成一个类，原型是所有类都有的一个属性，原型的作用就是给这个类的每一个对象（实例）都添加一个统一的方法")]),t._v(" "),s("li",[t._v("「prototype ：」 每个函数都会有这个属性，这里强调，是函数，普通对象是没有这个属性的（这里为什么说普通对象呢，因为JS里面，一切皆为对象，所以这里的普通对象不包括函数对象）。它是构造函数的原型对象；")]),t._v(" "),s("li",[t._v("「「proto」 ：」 每个对象都有这个属性，这里强调，是对象，同样，因为函数也是对象，所以函数也有这个属性。它指向构造函数的原型对象；")]),t._v(" "),s("li",[t._v("「constructor ：」 这是原型对象上的一个指向构造函数的属性。")])]),t._v(" "),s("h3",{attrs:{id:"rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rem"}},[t._v("#")]),t._v(" rem")]),t._v(" "),s("h3",{attrs:{id:"纯css-实现一个三角形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纯css-实现一个三角形"}},[t._v("#")]),t._v(" 纯css 实现一个三角形")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px solid transparent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px solid transparent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px solid transparent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px solid #ff0000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);a.default=e.exports}}]);