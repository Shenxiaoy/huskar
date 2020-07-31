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
