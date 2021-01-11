# 动效 动画
### FLIP 图片插入过渡移动动画
实现思路：在先后两次不同的imgs数据中，通过<code>getBoundingClientRect</code>获取图片相对于视口的位置，通过前后数据不同，从而获取dom不同位置的距离，然后添加animation translate 动画属性。

[exam](http://www.shenxiaoyu.cn/basic/html/js/FLIP) 
> 摘自于(https://github.com/sl1673495/flip-animation)，侵删