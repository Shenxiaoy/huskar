
## flex
### 容器的属性
### flex-direction   定义主轴、排列起始方向
- row
- row-reverse
- column
- column-reverse

### flex-wrap    如何换行
- nowrap   不换行
- wrap  换行 第一行在上面
- wrap-reverse   第一行在下面

> flex-flow   flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

### justify-content  定义子元素主轴的对齐方式
- flex-start  左对齐
- flex-end  右对齐
- center  居中对齐
- space-between  两端对齐
- space-around  两侧间隔相等

### align-items   定义了项目在交叉轴的对齐方式
- flex-start    交叉轴起点对齐
- flex-end    交叉轴终点对齐
- center      交叉轴中心对齐
- stretch     如果项目未设置高度或设为auto，将占满整个容器的高度
- baseline  项目的第一行文字的基线对齐

### 项目的属性
- order： 定义项目的排列属性       //  .item {order: 1}。
- flex-grow：  定义项目的放大比例    //  .item { flex-grow: 2}。
- flex-shrink： 定义了项目的缩小比例，  // .item { flex-shrink:  2}。
- flex-basis：    属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。  //  .item { flex-basis: 350px }。
- align-self：  属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。 // auto flex-start flex-end center baseline strech