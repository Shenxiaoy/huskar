
## css隔离

### css modules
vue 模板语法中style标签中配置 scoped 配置样式隔离，使用类似方法；给标签上定义属性，给选择器加上特殊的字符串，达到css隔离的效果。
```css
/* dom */
<div data-v-6b215b54 class="head-text-content">...

/* css */
.head-text-content[data-v-6b215b43] {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #F6F6F6;
    font-size: 16px;
    color: #B0B0B0;
    text-align: center;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
}
```

### Shadow DOM
通过Element.attachShadow() 方法给指定的元素挂载一个shadow DOM，并且返回给对 shadow DOM 的引用，shadowDom能对其挂载的元素做css处理。
> a标签不能挂载 shadow dom，对于具有语义的标签名称和独立存在的自定义元素，都可挂载shadow dom。

exam:
```js
  var box = document.querySelector('#box')
  var root = box.attachShadow({mode: 'open'})
  root.textContent = 'two'
```
- 参数：mode; open: 表示开放的封装模式，shadow root元素可以从js外部访问根节点；close: 指定为关闭的封装模式，拒绝从js外部访问关闭的shadow root节点。
- 参数delgatesFocus; 焦点委托
  [MDN参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow)

  ### 工程化追加css前缀
  通过webpack工具构建过程中，通过webpack loader、plugin形式对class 类名统一添加前缀。

  