# css 基础

## user-select 禁用选择文本
```css
#user-select {
  user-select: none;
  -ms-user-select: none;
}
```

## rgba 和 hsla 的区别
> 在CSS3里可以使用RGBA和HSLA两种色彩模式，都可以用来在设置颜色的同时也可以设置它的透明度。RGBA指的是“红色、绿色、蓝色和Alpha透明度”（Red-Green-Blue-Alpha），而HSLA则代表“色调、饱和度、亮度和Alpha透明度”（Hue-Saturation-Lightness-Alpha）。 

> 在RGBA模式里，前三个参数分别是红色、绿色和蓝色的强度值，取值从0~255或0%-100%。而在HSLA模式里，前三个参数则分别代表色调（0-360）、饱和度（0%-100%）和亮度（0%-100%）。透明度的取值从0（完全透明）到1（完全不透明）

## text-overflow 文本省略号
- clip： 不显示省略文本，简单裁切；
- ellipsis： 表示对象文本溢出时显示省略标记，省略标记插入的位置是最后一个字符；
- ellipsis-word： 表示当对象文本溢出时显示省略标记，省略标记插入的位置是最后一个词（word）。

### 单行文本实现省略号
```css
.box {
    width: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap; 
}
```
### 多行文办实现省略号
```css
.box {
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

## white-space 不换行属性
- nowrap: 不换行，直到遇到<br>标签；
- pre： 类似pre标签，空白会被保留；
- ……

## word-break 换行属性
- break-all: 强制英文单词断行;
- break-wor：自动换行

### 选中文字的背景颜色
```css
<style>
    ::selection {
        background: #C14835;
        color:#E8E8E8;
    }

    ::-moz-selection {
        background:#C14835;
        color:#E8E8E8;
    }

    ::-webkit-selection {
        background:#C14835;
        color:#E8E8E8;
    }
</style>
```

## css3 选择器
```css
ul:nth-child(n)  第几个子元素
ul:nth-child(2n)  偶数元素
ul:nth-child(2n+1)   基数元素
ul:nth-of-type(1)    下的同种类型（标记名相同）的第一个子元素
ul:first-child       第一个子元素
ul:first-of-type      同类型的第一个子元素
ul li:nth-child(3)     先找到第三个子元素，看这个子元素的标记名是否是li;
ul li:nth-of-type(3)     从所有的li中找到第三个li标签
ul li:nth-child(2n)     n从0开始设置 偶数元素 0 ,2,4....
ul li:nth-child(2n+1)      奇数元素 1,3,5,7....
p:only-child            规定属于其父元素的唯一子元素的每个 p 元素：
p:only-of-type       指定属于父元素的特定类型的唯一子元素的每个 p 元素：
p:empty        选择器匹配没有子元素（包括文本节点）的每个元素。

.否定选择器
:not();

.属性选择器
E[attr=val]
E[attr|=val]  只能等于val  或只能以val-开头
E[attr*=val]  包含val字符串
E[attr~=val]   属性值有多个,其中有一个是val
E[attr^=val]   以val开头
E[attr$=val]   以val结尾;
如：
可以对所有带有 alt 属性的图像应用样式，从而突出显示这些有效的图像：
img[alt] {border: 5px solid red;};

.目标伪类选择器
 :target 用来匹配url指向的目标元素
 存在url指向该匹配元素时,样式效果才会生效
.伪元素
 : first-line  匹配第一行文本
 : first-letter 匹配第一个首字符
 : before 和 : after  DOM元素前后插入额外的内容

选择器
* E > F 子元素选择器，匹配所有E元素的子元素F
* E + F 毗邻元素选择器，匹配所有紧随E元素之后的同级元素F
属性选择器
* E[att] 匹配所有具有att属性的E元素，不考虑它的值。（注意：E在此处可以省略，比如"[cheacked]"。以下同。）
* E[att=val] 匹配所有att属性等于"val"的E元素
* E[att~=val] 匹配所有att属性具有多个空格分隔的值、其中一个值等于"val"的E元素
*  E[att|=val] 匹配所有att属性具有多个连字号分隔（hyphen-separated）的值、其中一个值以"val"开头的E元素，主要用于lang属性，比如"en"、"en-us"、"en-gb"等等
CSS 2.1中的伪类
* E:first-child 匹配父元素的第一个子元素
* E:link 匹配所有未被点击的链接
* E:visited 匹配所有已被点击的链接
*  E:active 匹配鼠标已经其上按下、还没有释放的E元素
* E:hover 匹配鼠标悬停其上的E元素
* E:focus 匹配获得当前焦点的E元素
* E:lang(c) 匹配lang属性等于c的E元素
CSS 2.1中的伪元素
* E:first-line 匹配E元素的第一行
* E:first-letter 匹配E元素的第一个字母
* E:before 在E元素之前插入生成的内容
* E:after 在E元素之后插入生成的内容
CSS 3的同级元素通用选择器
* E ~ F 匹配任何在E元素之后的同级F元素
CSS 3 属性选择器
* E[att^="val"] 属性att的值以"val"开头的元素
* E[att$="val"] 属性att的值以"val"结尾的元素
* E[att*="val"] 属性att的值包含"val"字符串的元素
CSS 3中与用户界面有关的伪类
* E:enabled 匹配表单中激活的元素
* E:disabled 匹配表单中禁用的元素
* E:checked 匹配表单中被选中的radio（单选框）或checkbox（复选框）元素
* E::selection 匹配用户当前选中的元素
CSS 3中的结构性伪类
* E:root 匹配文档的根元素，对于HTML文档，就是HTML元素
* E:nth-child(n) 匹配其父元素的第n个子元素，第一个编号为1
* nth-last-child(n) 匹配其父元素的倒数第n个子元素，第一个编号为1
* E:nth-of-type(n) 与:nth-child()作用类似，但是仅匹配使用同种标签的元素（匹配父元素下同种标签的元素）
* E:nth-last-of-type(n) 与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素
* E:last-child 匹配父元素的最后一个子元素，等同于:nth-last-child(1)
* E:first-of-type 匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)
* E:last-of-type 匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1)
* E:only-child 匹配父元素下仅有的一个子元素，等同于:first-child:last-child或 :nth-child(1):nth-last-child(1)
* E:only-of-type 匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1)
* E:empty 匹配一个不包含任何子元素的元素，注意，文本节点也被看作子元素
* E:not(s) 匹配不符合当前选择器的任何元素
* E:target 匹配文档中特定"id"点击后的效果

```

### 圆角 border-radius
```css
/* border-radius: 1-4个数字 / 1-4个数字
前面是水平半径，后面是垂直半径
四个数字方向分别是左上  右上  右下  左下
不给“/”则水平半径和垂直半径一样
例子 : 圆  椭圆  半圆  扇形 */

// 左半圆
.box {
    width: 10px;
    height: 20px;
    background: blue;
    border-radius: 10px 0 0 10px;
}
// 右半圆
.box {
    width: 10px;
    height: 20px;
    background: blue;
    border-radius: 0 10px 10px 0;
}
// 上半圆
.box {
    width: 20px;
    height: 10px;
    background: blue;
    border-radius: 10px 10px 0 0;
}
//下半圆
.box {
    width: 20px;
    height: 10px;
    background: blue;
    border-radius: 0 0 10px 10px;
}
// 椭圆
.box {
    width: 250px;
    height: 150px;
    margin: 50px;
    background: #FFD900;
    border-radius: 50% / 50%;
}
// 扇形
.box {
    width: 100px;
    height: 100px;
    background: blue;
    border-radius: 100px 0 0 ;
}
// 弧形
.box {
    width: 100px;
    height: 100px;
    background: blue;
    border-radius: 100px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
```

### 判读是否支持css3样式
```css
'grid' in document.documentElement.style ? true : false
```

### classList 操作类名的方法
```js
classList.add( newClassName );
/* 添加新的类名，如已经存在，取消添加 */

classList.contains( oldClassName );
/* 确定元素中是否包含指定的类名，返回值为true 、false； */

classList.remove( oldClassName )；
/* 移除已经存在的类名; */

classList.toggle( className )；
/* 如果classList中存在给定的值，删除它，否则，添加它； */

classList.replace( oldClassName，newClassName )；
/* 类名替换 */
```

### object-fit
用来指定替换元素的内容应该如何适应到其使用的高度和宽度确定的框；
场景：值为cover，常用与图片填充固定大小；
```css
object-fit: cover;  // 替换的内容大小保持其宽高比，同时填充元素的整个内容框。 如果对象的宽高比与盒子的宽高比不匹配，该对象将被剪裁以适应。
object-fit: fill;  // 被替换的内容大小可以填充元素的内容框。 整个对象将完全填充此框。 如果对象的高宽比不匹配其框的宽高比，那么该对象将被拉伸以适应。
object-fit: contain;  // 被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“黑边”。

object-fit: none;   // 被替换的内容尺寸不会被改变。
object-fit: scale-down;  //  
```

### box-reflect 倒影
- box-reflect属性值有：dirrection-方向:above向上，below向下，left向左，right向右
- offset距离：可以是数值，也可以是百分比
- mask-box-image设置倒影的遮罩图像：（1）url（2）linear-gradient线性渐变创建遮罩图像。（3）repeating-linear-gradient重复线性渐变创建遮罩图像。（4）repeating-url重复径向径向渐变创建遮罩图像。
```css
-webkit-box-reflect: below 16px -webkit-linear-gradient(transparent,transparent 50%,rgba(255,255,255,0.6));
```

### resize 调整div元素大小
```css
div{
  resize: both;
  overflow: auto;
}
```

### will-change 通知 gpu 进行渲染加速
```CSS
.element:hover {
  will-change: transform;
}
```

### 滚动条平滑滚动 scroll-behavior
css3 新特性，不用在用js去实现了
```css
html {
  scroll-behavior: smooth;
}
```

### box-decoration-break 处理box盒子断开时候的渲染表现
```css
box-decoration-break: clone;   // 表示断开的各个盒子样式独自渲染
```