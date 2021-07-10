### 变量地址引用
```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x)     
console.log(b.x)
```
> 理解：赋值从右到左， .的优先级比=高，a的内存指向改变成了{n:2}，而原地址执行的内存多了x属性。

###







































