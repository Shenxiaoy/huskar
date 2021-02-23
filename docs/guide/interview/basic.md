### 解构的几种应用

### 图片压缩
```js
/**
 * 
 * @param {*} url 原图地址
 * @param {*} directionWidth 目标图片的宽度
 * @param {*} maxSize 最大尺寸(单位字节)
 * 函数最后会得到一个宽度固定的图片，通过调节清晰度来实现最终尺寸小于目标尺寸
 */
function imageCompressUpload(url, directionWidth, maxSize) {
  /**
   * 获取base64文件的length
   * @param {*} base64 
   */
  function getBase64length(base64) {
    let rawBase64 = base64.substring(22);
    let equalIndex = rawBase64.indexOf('=');
    if (equalIndex > 0) {
      rawBase64 = rawBase64.substring(0, equalIndex);
    }
    const rawBase64Length = rawBase64.length;
    let fileLength = parseInt(rawBase64Length - (rawBase64Length / 8) * 2);
    return fileLength;
  }
  return new Promise(resolve => {
    const img = new Image();
    img.setAttribute("crossOrigin", "Anonymous"); // 允许图片使用跨域资源，需要服务端支持
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = directionWidth;
      canvas.height = height / width * directionWidth;
      context.drawImage(img, 0, 0, canvas.width, canvas.height);

      let base64 = canvas.toDataURL('image/jpeg');
      let fileLength = getBase64length(base64);
      let ratio = 0.85;
      while (fileLength > maxSize) {
        base64 = canvas.toDataURL('image/jpeg', ratio);
        ratio -= 0.05;
        fileLength = getBase64length(base64);
      }
      resolve(base64);
      // 也可以对base6进行处理，例如转换成Blob然后上传到OSS
    }

    img.src = url;
  })
}

// 调用
imageCompressUpload(url, 800, 200000).then(base64 => { url = base64});
```

### Symbol.interator

### html 角标标签 上标和小标
```html
<!-- 上标 -->
<SUP>2</SUP>
<!-- 下标 -->
<SUB>2</SUB>
```

### 图片懒加载
```js
function lazyload() {
  const imgs = document.getElementsByTagName('img');
  const len = imgs.length;
  // 视口的高度
  const viewHeight = document.documentElement.clientHeight;
  // 滚动条高度
  const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  for (let i = 0; i < len; i++) {
    const offsetHeight = imgs[i].offsetTop;
    if (offsetHeight < viewHeight + scrollHeight) {
      const src = imgs[i].dataset.src;
      imgs[i].src = src;
    }
  }
}

// 可以使用节流优化一下
window.addEventListener('scroll', lazyload);
```


### jsonp
```js
const jsonp = ({ url, params, callbackName }) => {
  const generateUrl = () => {
    let dataSrc = '';
    for (let key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc += `callback=${callbackName}`;
    return `${url}?${dataSrc}`;
  }
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement('script');
    scriptEle.src = generateUrl();
    document.body.appendChild(scriptEle);
    window[callbackName] = data => {
      resolve(data);
      document.removeChild(scriptEle);
    }
  })
}

```



## http请求

### http请求方法
- get 
- post
- put
- delete
- options
- head
- trace
- connect

### 状态码
- 1xx消息——请求已被服务器接收，继续处理
- 2xx成功——请求已成功被服务器接收、理解、并接受
- 3xx重定向——需要后续操作才能完成这一请求
- 4xx请求错误——请求含有词法错误或者无法被执行
- 5xx服务器错误——服务器在处理某个正确请求时发生错误

#### 常遇到的状态码情况
- 200：服务器成功处理了请求； 204：请求成功，只是没有响应数据
- 301和302 非常相似，  一个是永久转移，一个是临时转移；304：使用缓存信息资源；
- 400：客服端是错误的请求，一般指传递的参数内容有问题；401：未授权，需要认证；403：请求被服务器拒绝；404未找到资源；405：请求方法不对；
- 500：服务器发生错误；501：请求与服务器服务不相匹配；502：网关故障；503：服务器目前无法为请求提供服务，但过一段时间就可以恢复服务，表示服务器繁忙；504： 超时；505：不支持的http版本；

### 浏览器缓存
1) 强制缓存
```
// 绝对时间来强调过期时间
Expires:  Fri, 16 Nov 2018 08:37:18 GMT 

//相对时间来强调过期时间，过期就请求新的服务器内容，未过期就使用缓存, 优先级大于Expires
Cahce-Control: max-age=3430000
```
2) 协商缓存
```
// 表示该资源在服务器上最后的修改时间
Last-Modified: Thu, 15 Nov 2018 04:13:22 GMT

//Etag 文档内容编码, 只要文件内容不同，它们对应的 Etag 就是不同的，因此 Etag 能够精准地感知文件的变化。
Etag: W/"5becf2a1-5e8"    //弱验证，开头带有 w/   响应头返回
```
* 首次请求资源时，服务器在返回资源的同时，会在Response Headers中写入Last-Modified首部，表示该资源在服务器上的最后修改时间。
* 当再次请求该资源时，会在Request Headers 中写入If-Modified-Since首部，此时的If-Modified-Since的值是首次请求资源时所返回的Last-Modified的值。
* 服务器接收到请求后，会根据If-Modified-Since的值判断资源在该日期之后是否发生过变化。
* 如果没有，则会返回304 Not Modified;如果变化了，则会返回变化过后的资源，同时更新Last-Modified的值。

> if-modified-since: 一个条件式请求首部，服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为 200  。如果请求的资源从那时起未经修改，那么返回一个不带有消息主体的  304  响应，而在 Last-Modified 首部中会带有上次修改时间。

> if-None-Match: 对于GET 和 HEAD 请求方法来说,当缓存的ETag和再次请求服务器返回的ETag 相同匹配时，响应码为200，不匹配为304；
ETag 属性之间的比较采用的是弱比较算法，即两个文件除了每个比特都相同外，内容一致也可以认为是相同的。例如，如果两个页面仅仅在页脚的生成时间有所不同，就可以认为二者是相同的。

>当与 If-None-Match 一同出现时，它（If-Modified-Since）会被忽略掉

> Last-modified : 当浏览器第一次请求一个url时，服务器端的返回状态码为200，同时HTTP响应头会有一个Last-Modified标记着文件在服务器端最后被修改的时间。

### Cache-Control  请求头常用属性说明
- max-age/s-maxage   //   它们唯一的不同点就在于s-maxage指令只适用于代理服务器缓存。s-maxage的优先级高于max-age。

- public/private   //  如果我们为资源设置了 public，那么它既可以被浏览器缓存，也可以被代理服务器缓存；如果我们设置了 private，则该资源只能被浏览器缓存。

- no-cache/no-store  //  no-cache 表示客户端要求缓存在提供其已缓存的副本之前必须先和原始服务器对该文档进行验证。即强制跳过强缓存阶段，直接进行协商缓存。强缓存并不能知道缓存是否真的足够新鲜，使用no-cache就是为了防止从缓存中返回过期的资源，对缓存进行再验证。

- no-store表示的是禁止缓存，即每一次都是直接与原服务器进行通信，从原服务器返回资源。一般设置了no-store的资源，都暗示着该资源具有敏感性信息。

### http2和http1.1的主要区别
1) 采用二进制进行传输 vs 采用文本进行传输；
2) 头部信心进行压缩 vs 都不信息未压缩，采用文本格式；
3) 单个链接可以发送多个请求和响应 vs 单个链接只能发送一个请求和响应；
4) 支持服务器推送 vs 不支持服务器推送；
5) 多路复用 vs 否；

### 箭头函数与普通函数的区别
1) 箭头函数不会创建this，内部this指向当前所在的全局作用域；
2) call bind apply并不能改变箭头函数的this指向；
3) 没有arguments，或者指向所在函数作用域的arguments;
4) 不能作为构造函数，没有原型指向；
5) 也不能作为Generator迭代函数使用，因此内部yeild也无法使用；

### 防抖
所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
```js
const debounce = (fn, time) => {
  let timeout = null;
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  }
};
```

### 节流
所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。
```js
const throttle = (fn, time) => {
  let flag = true;
  return function() {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, time);
  }
}
```

### 函数珂里化
> 指的是将一个接受多个参数的函数 变为 接受一个参数返回一个函数的固定形式，这样便于再次调用

```js
function add() {
  const _args = [...arguments];
  function fn() {
    _args.push(...arguments);
    return fn;
  }
  fn.toString = function() {
    return _args.reduce((sum, cur) => sum + cur);
  }
  return fn;
}

```

### 

## 前端web攻击
### XSS攻击 跨站脚本攻击
页面渲染的数据中国包含可运行js脚本

攻击类型：url参数注入，存储读取注入

#### 如何防御
- 浏览器自带防御机制，http响应头中自动添加x-xss-protection，值为0（关闭），1（打开），默认打开
- 对特殊字符作转义处理 如：<> &lt等。
  
### CSRF 跨站请求伪造
来自第三方网站发起的请求，通过盗取用户的cookie信息，从而成功访问；

#### 如何防御
- 禁止第三方网站携带本网站的cookie信息，设置same-site属性，same-site属性有两个值，Strict（所有的第三方请求都不能携带本网站的cookie）和Lax（链接可以，但是form表单提交和ajax请求不行）。
- 使用验证码或者token信息
- referer验证：禁止第三方的请求

### 点击劫持
第三方网站通过iframe内嵌某一个网站，并且将iframe设置为透明不可见，将其覆盖在其他经过伪装的DOM上，伪装的可点击DOM（按钮等）与实际内嵌网站的可点击DOM位置相同，当用户点击伪装的DOM时，实际上点击的是iframe中内嵌的网页的DOM从而触发请求操作。

#### 如何防御
- Javascript禁止内嵌：当网页没有被使用iframe内嵌时，top和window是相等的；当网页被内嵌时，top和window是不相等的；
- 设置http响应头 X-Frame-Options：

### sql注入攻击
攻击者在HTTP请求中注入恶意的SQL代码，并在服务端执行。

#### 如何防御
- 限制字符串输入的长度；
- 有效的校验

### canvas 基础

### 作用域 作用域链
- 作用域：变量或者函数的有效作用范围
- 作用域链：我们需要查找某个变量值，会先在当前作用域查找，如果找不到会往上一级查，如果找到的话，就返回停止查找，返回查找的值，这种向上查找的链条关系，叫作用域

### 闭包
指的是能够访问另一个函数作用域的变量的函数。
闭包就是一个函数，这个函数能够访问其他函数的作用域中的变量

### 原型 原型链
- 一个函数可以看成一个类，原型是所有类都有的一个属性，原型的作用就是给这个类的每一个对象（实例）都添加一个统一的方法
- 「prototype ：」 每个函数都会有这个属性，这里强调，是函数，普通对象是没有这个属性的（这里为什么说普通对象呢，因为JS里面，一切皆为对象，所以这里的普通对象不包括函数对象）。它是构造函数的原型对象；
- 「「proto」 ：」 每个对象都有这个属性，这里强调，是对象，同样，因为函数也是对象，所以函数也有这个属性。它指向构造函数的原型对象；
- 「constructor ：」 这是原型对象上的一个指向构造函数的属性。

### rem 

### 纯css 实现一个三角形
```css
span {
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #ff0000;
}
```
### html5标签 details 收缩展开
```html
<details open>
  <summary>我相信的</summary>
  <div>
    <p>我是一只小小鸟</p>
    <p>怎么，肥业飞不高</p>
    <p>寻寻觅觅，寻寻觅觅</p>
  </div>
</details>
</div>
```
- details：标签容器
- open：表示默认展开
- summary：子标签，展示标题

### 网络协议
> 1物理层、2数据连接层主要有以太网、无线LAN、电缆、光纤......；3网络层是IPv4、IPv6、ICMP/ARP......；4传输层：TCP、UDP......；5会话层、6表示层、7应用层：HTML/ftp/ssh/ssl......

### 克隆双循环对象
> 两个对象中有相互对象的指针，本是个无限循环，再克隆过程中，碰到死循环对象，不再递归，直接返回此对象
```js
(
  function test () {
    const a = {
      aa: {
        name: 'aa'
      }
    }
    const b = {
      bb: 'bb'
    }
    a.point = b
    b.point = a
    const ws = new WeakSet()
    function clone (obj) {
      if (!ws.has(obj)) {
        ws.add(obj)
      } else {
        return obj
      }
      const cloneObj = {}
      for (let k in obj) {
        if (typeof obj[k] === 'object') {
          cloneObj[k] = clone(obj[k])
        } else {
          cloneObj[k] = obj[k]
        }
      }
      return cloneObj
    }
    const c = clone(a)
    console.log(c)
  }()
)
```
