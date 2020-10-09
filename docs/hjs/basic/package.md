# 集成

### 平滑滚动到页面顶部
```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

// 事例
scrollToTop()
```

### 范围随机数
```js
function randomNum(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m);
}
```
