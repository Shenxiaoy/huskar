

### 结束绘制
- 这时因为当我们结束绘制的，电脑会自动将你设置的线段自动连接起来
```text

           ctx.closePath();
```

### 
```text
    // 开始绘制
    ctx.beginPath();
    
    //设置绘制起点
    ctx.moveTo(100,100);
    
    //设置绘制下一个点
    ctx.lineTo(700,400);
    
    //设置创建边角的类型； round:圆角； bevel:斜角； miter:尖角（默认）
    ctx.lineJoin = 'round';
    
    //结束绘制
    ctx.closePath();  
    
    //设置线的宽度
    ctx.lineWidth = 10;
    
    //设置绘制的样式
    ctx.strokeStyle = "red";
    
    //绘制点之间的线路
    ctx.stroke();
    
    // 设置填充样式
    ctx.fillStyle = "green";
    
    // 填充当前视图
    ctx.fill();
    
    // 注意：所有的绘制相应属性全部应该放在 closePath 之前
```

### 矩形
- strokeRect(float x,float y,float width,float height)      //绘制一个矩形边框
- fillRect(float x,float y,float width,float height)        //填充一个矩形边框

### 绘制字符串
填充字符串
- fillText(String Text, float x, float y, [float maxWidth])

绘制字符串边框
- strokeText(String Text, float x, float y, [float maxWidth])

设置绘制字符串的水平对齐方式(start、end、left、right、center等)
- textAlign

设置绘制字符串的垂直对齐方式(top、hanging、middle、alphabetic、idecgraphic、bottom 等)
- textBaseAlign

字体
- font

### 设置文字阴影
shadowBlur
- 设置阴影的模糊程度。该值是一个浮点数，该数值越大，阴影的模糊程度也就越大。

shadowColor
- 设置阴影的颜色。

shadowOffsetX
- 设置阴影在 X 方向的偏移

shadowOffsetY
- 设置阴影在 Y 方向的偏移

### 绘制圆、多边形、曲线
- 参考 （https://www.jianshu.com/p/2f79c3d8f9d0）












