# 对象

## Object.assign 对象合并
> 相同的属性，后面会覆盖前面的对象；
> 可以合并数组，但会把数组视为对象进行合并；
> 可以实现浅拷贝；
```js
Object.assign([1,2,3], [4,5])

result: [4,5,3]
```

## Object.freeze 冻结
可以冻结一个对象，一个被冻结的对象再也不能被修改。
```js
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42
```