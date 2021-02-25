# 随记


### 实现web端自定义截屏
[参考](https://juejin.cn/post/6924368956950052877)

## 大文件断点续传
思路：前端使用blob.slcie 切割文件成数组片段，片段包括文件片段内容和序号，然后使用Promise.all()http并发上传；服务端接收文件片段根据序号进行合并。
[参考](https://mp.weixin.qq.com/s/dU7AU3SXJo1nYcA1DH-6Dg)

## 复制粘贴
- clipboard.js  || 引用外部插件
- document.execCommand()
### clipboard.js插件使用方法：
- 引入插件：<scriptsrc="dist/clipboard.min.js"></script>
- 或者 <span>npm install clipboard --save  import Clipboard from 'clipboard'</span>
- 在 button 标签中添加了一个 data-clipboard-target 属性，它的值是需要复制的 input 的 id，顾名思义是从整个标签中复制内容。
```js
<input id="demoInput" value="hello world">
<button class="btn" data-clipboard-target="#demoInput">点我复制</button>
import Clipboard from 'clipboard';
const btnCopy = new Clipboard('btn');
```
- 不从input中复制，直接复制内容
```js
<button class="btn" :data-clipboard-text="copyValue">点我复制</button>
import Clipboard from 'clipboard';
const btnCopy = new Clipboard('btn');
this.copyValue = 'hello world';
```

## 网页中文本阅读
- 浏览器支持（Chrome 33+、Firefox 49+ 或 IE-Edge）
- api支持 SpeechSynthesisUtterance（用于语音合成）、  SpeechSynthesis（用于朗读）
- 参考文章 ：https://blog.cdswyda.com/post/2017120914
```js
var speechSU = new window.SpeechSynthesisUtterance();
speechSU.text = '你好，世界！';
window.speechSynthesis.speak(speechSU);
//复制到浏览器控制台收听声音
```
