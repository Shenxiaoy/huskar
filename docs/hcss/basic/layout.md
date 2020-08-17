
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

---------


## grid

exam:
```
display: grid;
grid-template-columns: 30px 30px 30px;
grid-template-rows: 30px 30px 30px;
```
排列成三行三列；

定义在容器上：（单位可以是px、%）
- grid-template-columns: 定义每一个列的宽度；
- grid-template-rows: 定义每一行的宽度；

##### repeat() 定义重复的值；
```css
.container {
  display: grid;
  grid-template-coumns: repeat(3, 33.3%);
  grid-template-rows: repeat(3, 33.3%);
}

// 重复模式
grid-template-columns: repeat(2, 100px 20px 80px);
```

##### auto-fill 自动填充
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}

```

##### fr 比例关系单位
- grid-template-columns: 1fr 1fr; // 表示均分；
- grid-template-columns: 150px 1fr 2fr;  // 表示第一列为150px ,剩下空间第二、三列1:2均分；

##### minmax  长度范围
- grid-template-columns: 1fr 1fr minmax(100px, 1fr);

##### auto 自动分派空间
- grid-template-columns: 100px auto 100px;

#### grid-row-gap: 设置行间距

#### grid-columns-gap: 设置列间距

#### grid-gap: 是行和列间距的缩写，exam: grid-gap: 10px 10px

> 最新标准 grid的前缀可以去掉  如 grid-row-gap 改为 row-gap, grid-columns-gap => columns-gap , grid-gap => gap

#### 定义网格线的名称
通过方括号去名称定义
```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

#### grid-template-areas 指定区域，定义单元格的名称

- 
```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

- 相邻的单元名称一样，为一个区域，可以理解为单元格合并
```
grid-template-areas: "header header header"
                     "main main sidebar"
                     "footer footer footer";
```

- 如果某些区域不需要利用定义，可以用 . 代替
```
grid-template-areas: 'a . c'
                     'd . f'
                     'g . i';
```

#### grid-auto-flow 设置子元素的排列顺序 值默认为row，表示先行后列；值为column， 表示先列后行

- grid-auto-flow: row dense： 表示按照先行排列，尽可能填满单元格；
- grid-auto-flow: column dense: 表示按照先列后行，尽可能填满单元格；

#### justify-items 设置单元格内容的水平对齐方式
#### align-items: 设置单元格内容的垂直对齐方式
#### place-items 是 justify-item 和 align-items 的简写方式
```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}

// stetch 表示拉伸，占满整个单元格，默认值
```



#### justify-content 整个容器内容区域的水平对齐方式
#### align-content 整个容器内容区域的垂直对齐方式
#### place-content 是容器内容区域对齐简写方式
```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```
- stretch 整个容器内容区域拉升填满容器空间；
- space-around : 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
- space-between: 项目与项目的间隔相等，项目与容器边框之间没有间隔;
- space-evenly: 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

> rid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。
> grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。
> grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。

### 项目属性

#### grid-column-start属性：左边框所在的垂直网格线
#### grid-column-end属性：右边框所在的垂直网格线
#### grid-row-start属性：上边框所在的水平网格线
#### grid-row-end属性：下边框所在的水平网格线

> 每列网格线默认是1开始计数，到结束；比如是3列，总共有4条网格纵线，分别为1、2、3、4；如果在项目属性中设置了超出设置的列数，比如默认为3列；
grid-column-end: 5, 那么最终会形成4列5条网格纵线。
> 如果第二列gird-column-start 大于等于总网格线，就会并到第一列；

##### 指定网格线的名称
```css
.item-1 {
  grid-column-start: header-start;
  grid-column-end: header-end;
}
```

##### 使用 span（移动） 关键字设置项目内容跨越几个单元格；
```css
// 表示 左边框距离右边框跨越2个网格
.item-1 {
  grid-column-start: span 2;
}
```
> grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。
```
.item-1 {
  background: #b03532;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  background: #b03532;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

#### grid-area 指定项目放在哪个区域下面；
```css
.item-1 {
  grid-area: e;
}
```

#### justify-self: 设置单元格水平对齐方式；
#### align-self: 设置单元格垂直对齐方式；
#### place-self: 是以上两种方式的简写；

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

