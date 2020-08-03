# 对象

## Object.assign 对象合并
> 相同的属性，后面会覆盖前面的对象；
> 可以合并数组，但会把数组视为对象进行合并；
> 可以实现浅拷贝；
```js
Object.assign([1,2,3], [4,5])

result: [4,5,3]
```