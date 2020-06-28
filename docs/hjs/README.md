# 常用js-api
## base64 转换
### btoa 明文转密；atob 密转明文
```js
window.btoa('shenxiaoyu')
"c2hlbnhpYW95dQ=="

window.atob("c2hlbnhpYW95dQ==")
"shenxiaoyu"
```

## Unicode 转换
### window.encodeURIComponent
### window.decodeURIComponent
```js
window.encodeURIComponent(a)
"zg%20%E4%B8%AD%E5%9B%BD"

window.decodeURIComponent("zg%20%E4%B8%AD%E5%9B%BD")
"zg 中国"
```