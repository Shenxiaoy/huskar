# svg

## svg 环形进度条
code: vue版本
```vue
<template>
  <div>
    <p>3333</p>
    <svg class="box" width="110" height="110" viewBox="0 0 110 110">
      <linearGradient
        id="svg-gradient"
        gradientUnits="userSpaceOnUse"
        x1="100%"
        y1="100%"
        x2="0%"
        y2="0%"
      >
        <stop offset="0%" style="stop-color: yellow" />
        <stop offset="100%" style="stop-color: green" />
      </linearGradient>
      <circle class="cirlcle" cx="50%" cy="50%" r="50" />
      <circle
        class="cirlcle1"
        cx="50%"
        cy="50%"
        r="50"
        transform="rotate(-90, 55, 55)"
        id="ring"
      />
    </svg>
    <el-button @click="handleTotal">计算</el-button>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    handleTotal() {
      this.processStart()
    },
    processStart() {
      const targetRing = document.getElementById("ring")
      const totalLength = targetRing.getTotalLength()
      console.log(totalLength, "total")
      targetRing.style.strokeDasharray = 200 + ", " + totalLength
    },
  },
}
</script>

<style>
.box {
  display: inline-block;
}
.cirlcle {
  stroke: #f2f2f2;
  stroke-width: 10px;
  fill: none;
}
.cirlcle1 {
  /* stroke: url(#svg-gradient); */
  stroke: blue;
  stroke-width: 10px;
  fill: none;
  stroke-dasharray: 0, 314;
  transition: stroke-dasharray 2s;
  -webkit-transition: stroke-dasharray 2s;
}
</style>
```

## path

### 弧度路径
- 指令： A(绝对) a(相对)
- 参数：(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
  1) rx ry : 是椭圆的两个半轴的长度
  2) x-axis-rotation 是椭圆相对于坐标系的旋转角度，角度数而非弧度数。
  3) large-arc-flag 是标记绘制大弧(1)还是小弧(0)部分。
  4) sweep-flag 是标记向顺时针(1)还是逆时针(0)方向绘制。
  5) x y 是圆弧终点的坐标。

- 从当前点绘制一段椭圆弧到点 (x, y)，椭圆的大小和方向由 (rx, ry) 和 x-axis-rotation 参数决定， x-axis-rotation 参数表示椭圆整体相对于当前坐标系统的旋转角度。椭圆的中心坐标 (cx, cy) 会自动进行计算从而满足其它参数约束。large-arc-flag 和 sweep-flag 也被用于圆弧的计算与绘制。

> 每次进行绘制都是以上一次节点为原点就行绘制，坐标向右、向下为正
