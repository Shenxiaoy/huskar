# css 基础

### user-select 禁用选择文本
```css
#user-select {
  user-select: none;
  -ms-user-select: none;
}
```

### rgba 和 hsla 的区别
> 在CSS3里可以使用RGBA和HSLA两种色彩模式，都可以用来在设置颜色的同时也可以设置它的透明度。RGBA指的是“红色、绿色、蓝色和Alpha透明度”（Red-Green-Blue-Alpha），而HSLA则代表“色调、饱和度、亮度和Alpha透明度”（Hue-Saturation-Lightness-Alpha）。 

> 在RGBA模式里，前三个参数分别是红色、绿色和蓝色的强度值，取值从0~255或0%-100%。而在HSLA模式里，前三个参数则分别代表色调（0-360）、饱和度（0%-100%）和亮度（0%-100%）。透明度的取值从0（完全透明）到1（完全不透明）

## 文本省略号
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

### white-space 不换行属性
- nowrap: 不换行，直到遇到<br>标签；
- pre： 类似pre标签，空白会被保留；
- ……

### word-break 换行属性
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

## 背景
- background-color
- background-image
- background-repeat
- background-position
- background-attachment
- background-origin
- background-clip
- background-size

### 多重背景图片
```css
style{
.div1{
    margin:50px auto;
    width:700px;
    height:450px;
    border:10px dashed #ff00ff;
    background-image:url(images/1.jpg),url(images/2.jpg),url(images/3.jpg),url(images/4.jpg),url(images/5.jpg);
    background-repeat:no-repeat,no-repeat,no-repeat,no-repeat,no-repeat;
    background-position:top left,top right,bottom left,bottom right,center center;
    }
}
<div class="div1">
<a href="#" title="background">background</a>
</div>
```

### background-origin  用于决定背景图片定位于哪个盒子
1) content-box
2) padding-box
3) border-box

### background-repeat  设置图片是否平铺，和平铺的效果
1) repeat-x　　repeat-y　　repeat　　no-repeat   这一行值， 只能设置一个。
2) round(图片两端对齐， 但其多出来空间通过自身的拉伸来填充)　　space( 图片两端平铺，多出来的空间空白代替)　　这一行值，可以设置一个 或 两个   第一个值代表横向， 第二个值代表 纵向。  如果只设置了一个值，那么这个值会 应用于 横向 和 纵向
3) 默认值是：repeat  表示在 横向， 和纵向 都平铺

### background-position 背景图片的位置
根据容器来定位 图片的位置。  默认值是：0%  0% ，  第一个值设置 left  第二个值设置 top。 如果只设置一个值， 第二个值默认是 center。

可以接受 定位 第二张图片， 第三张图片的写法， 只需要加个 ，号    例如 ：  background-position: 0  0 , 10px 10px

### background-attachment
- scroll: 背景图相对于元素固定，背景随页面滚动而移动，即背景和内容绑定,可以理解为fixed效果。
- local: 背景图相对于内容固定，当元素内的内容滚动时，背景也会滚动；（overflow: 'scroll'）
- fixed：背景图相对于视图固定, 所以随页面滚动背景不动，相当于背景被设置在了body上，当元素滚动完，元素的背景图片也就消失了；

### background-clip 背景区域中背景图片裁切的位置
1) content-box
2) padding-box
3) border-box
4) text： 只有webkit内核的浏览器可以使用。 搭配  text-fill-color(也只有webkit内核的浏览器有)  使用 [exam](/html/css/background/background-clip.html)

### backround-size 控制图片的大小尺寸
- cover ： 将背景图片等比例缩放到完全覆盖容器大小，有可能背景图片大小会超出容器
- contain：会以最佳比例平铺，因为比例问题但会留有空白背景；

### text-shadow 文字阴影
```css
text-shadow : x y blur  color
/* x轴偏移  y轴偏移  模糊度  颜色
多层阴影制作文字立体效果 ,设置多种颜色,中间以逗号隔开 */

/* 单阴影 */
text-shadow: 3px 1px 3px red;
/* 设置多个文字阴影，在逗号后面追加设置参数就行； */
text-shadow: 3px 1px 3px red, -3px -1px 3px blue;
```

### 文字描边
```css
/* 文字添加边框 */
     text-stroke: 2px blue
    /* 通过设定1px的透明边框，可以让文字变得平滑
    颜色设成透明能创建镂空字体 */

/* 镂空描边，把字体颜色设为背景颜色；如果背景是图片，设置color为透明 */
-webkit-text-stroke: 1px red;
color: white;
/* 背景为图片 */
webkit-text-stroke: 1px red;
color: transparent;
/* 背景剪切 用到-webkit-background-clip: text; */
-webkit-background-clip: text;
color: transparent;
```

## html5中的拖拽功能

### drag api
拖拽元素支持的事件
- ondrag 应用于拖拽元素，整个拖拽过程都会调用
- ondragstart 应用于拖拽元素，当拖拽开始时调用
- ondragleave 应用于拖拽元素，当鼠标离开拖拽元素是调用
- ondragend 应用于拖拽元素，当拖拽结束时调用

目标元素支持的事件
- ondragenter 应用于目标元素，当拖拽元素进入时调用
- ondragover 应用于目标元素，当停留在目标元素上时调用
- ondrop 应用于目标元素，当在目标元素上松开鼠标时调用
- ondragleave 应用于目标元素，当鼠标离开目标元素时调用

浏览器默认会阻止ondrop事件：我们必须在ondrapover中阻止默认行为, 添加 <code>e.preventDefault()</code>

### 可以通过setDragImage 方法设置拖放图标
```js
dataTransfer.setDragImage(img, xOffset, yOffset)
```
  1) img 为element元素
  2) xOffset 、 yOffset 为位置偏移量

### dataTransfer对象
它是事件对象的属性，所以只能在拖放事件的事件处理程序中访问dataTransfer对象在拖放过程中数据传递交换的集合；

### getData()和setData()
dataTransfer对象有 getData()和setData()两个主要方法，操作dataTransfer中携带的数据。不难想象，getData()可以取得由setData()保存的值。setData()方法的第一个参数，也是getDAta()方法唯一的一个参数，表示保存的数据类型。

### 使用 effectAllowed 和 dropEffect 属性设置 拖放效果
effectAllowed属性作用于被拖放元素；而 dropEffect 属性作用于目标元素。
> 必须在ondraggstart事件处理程序中设置effectAllowed属性，dropEffect属性只有搭配effectAllowed属性才有用。effectAllowed属性表示允许拖放元素的哪种dropEffect。

其中，通过dropEffect属性可以知道被拖动的元素能够执行哪种放置行为。这个属性有下列4个可能的值。
- none：不能把拖动的元素放在这里。这是除文本框之外所有元素的默认值。
- move：应该把拖动的元素移动到放置目标
- copy：应该把拖动的元素复制到放置目标
- link：表示放置目标会打开拖动的元素（但拖动的元素必须是一个链接，有URL）。

effectAllowed属性可能的值如下：
- uninitialized：没有该被拖动元素放置行为。
- none：被拖动的元素不能有任何行为。
- copy：只允许值为“copy”的dropEffect。
- link：只允许值为“link”的dropEffect。
- move：只允许值为“move”的dropEffect。
- copyLink：允许值为“copy”和“link”的dropEffect。
- copyMove：允许值为“copy”和”link”的dropEffect。
- linkMove：允许职位“link”和”move”的dropEffect。
- all：允许任意dropEffect。

exam:
```html
    <div id="box1" draggable="true"></div>
    <div id="box2"></div>
```
```js
    const box1 = document.getElementById('box1')
    const box2 = document.getElementById('box2')
    box1.addEventListener('dragstart', function(ev) {
      // ev.dataTransfer.effectAllowed = 'copy'
      ev.dataTransfer.setData('text', ev.target.id)
      const div = document.createElement('div')
      const img = new Image()
      img.src = './sdman.png'
      div.style.width = '20px'
      div.style.height = '20px'
      div.style.overflow = 'hidden'
      div.appendChild(img)
      ev.dataTransfer.setDragImage(document.getElementById('box1'), 5, 5)
    })
    box2.addEventListener('dragover', function (ev) {
      ev.preventDefault()
    })
    box2.addEventListener('drop', function (ev) {
      const data = ev.dataTransfer.getData('text')
      this.appendChild(document.getElementById(data))
      ev.preventDefault()
      
    })
```

## 滤镜
### filter -wekit-filter

-webkit-filter: blur(2px);  高斯模糊

-webkit-filter: normal;  正常

-webkit-filter: grayscale(1);  灰度，取值范围0-1

-webkit-filter: brightness(0. 亮度，取值范围0-1

-webkit-filter: invert(1); 反色5); ，取值范围0-1, 0为原图，1为彻底反色之后

-webkit-filter: sepia(0.5); 叠加褐色，取值范围0-1

-webkit-filter: hue-rotate(30deg); 色相（按照色相环进行旋转，顺时针方向，红-橙-
黄-黄绿-绿-蓝绿-蓝-蓝紫-紫-紫红-红）此处为叠加黄色滤镜

-webkit-filter: saturate(4); 饱和度，取值范围0 ~ *, 0为无饱和度，1为原图，值越高饱
和度越大

-webkit-filter: contrast(2); 对比度，取值范围0 ~ *, 0为无对比度（灰色），1为原图，
值越高对比度越大

-webkit-filter: opacity(0.8); 透明度，取值范围0 ~ 1, 0为全透明，1为原图

-webkit-filter: drop-shadow(0 0 20px red); 阴影

[exam](http://shenxiaoyu.cn/basic/html/css/filter.html)


### clip-path 裁切裁剪
> 参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)
> 
按矩形进行裁切
```css
/* 语法 */
inset( <length-percentage>{1,4} [ round <border-radius> ]? )
/* 说明 */
inset()可以传入5个参数，分别对应top,right,bottom,left的裁剪位置,round radius（可选，圆角）
/* 示例 */
clip-path: inset(10px 20px 50px 40px round 4px);
```

定义圆裁切
```css
/* 语法 */
circle( [ <shape-radius> ]? [ at <position> ]? )
/* 说明 */
circle()可以传人2个可选参数；
1. 圆的半径，默认元素宽高中短的那个为直径，支持百分比
2. 圆心位置，默认为元素中心点
/* 半径公式 */
如果半径使用百分比：圆的半径 = (sqrt(width^2+height^2)/sqrt(2)) * 百分比 

/* 示例 */
clip-path: circle(30% at 150px 120px);
```

定义椭圆裁切
```css
/* 语法 */
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
/* 说明 */
ellipse()可以传人3个可选参数；
1. 椭圆的X轴半径，默认是宽度的一半，支持百分比
2. 椭圆的Y轴半径，默认是高度的一半，支持百分比
3. 椭圆中心位置，默认是元素的中心点

/* 示例 */
clip-path: ellipse(45% 30% at 50% 50%);
```

定义多边形裁切
```css
/* 语法 */
polygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )
/* 说明 */
<fill-rule>可选，表示填充规则用来确定该多边形的内部。可能的值有nonzero和evenodd,默认值是nonzero
后面的每对参数表示多边形的顶点坐标（X,Y），也就是连接点

/* 示例 */
clip-path: polygon(50% 0,100% 50%,0 100%);
```
> 多边形裁切路径中，如果要实现动画渐变效果，需保证路径坐位数量一致。
> 
[exam](http://shenxiaoyu.cn/basic/html/css/background/background-clip.html)
