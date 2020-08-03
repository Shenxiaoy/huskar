# 数组方法

## 判断是否是数组的方法

### isArray
```js
const ary = [1, 2]
Array.isArray(ary)  // true
```

### instanceof
```js
const ary = []
ary instanceof Array // true
```

### constructor
```js
const ary = []
a.constructor === Array  // true
```

### Object.prototype.toString.call()
```js
const ary = []
Object.prototype.toString.call(ary) === '[object Array]' // true
```
> 还可以判断Number Function String ...

## 数组的添加、删除
- push() 往数组末尾添加一项；
- unshift() 往数组开头添加一项；
- pop() 删掉数组末尾一项；
- shift() 删掉数组开头一项；

## sort 对数组元素进行排序
```js
// 升序
[23,4,56,33,35,12].sort((a, b)=>a-b)

// 降序
[23,4,56,33,35,12].sort((a, b)=>b-a
```

## splice 
可以删除、替换、插入指定索引下内容

## reverse 数组翻转
```js
const a = [1,2,3,4]
const b = a.reverse()
b  // [4,3,2,1]
```

## 类数组转数组
#### 方法一
```js
[].slice.call()
```
#### 方法二
```js
Arrary.from()
```

## filter
##### 遍历数组，返回结果为true的所有项，无任何true结果，得到的是一个空数组。
```js
const a = [1,2,3,4]
const b = a.filter(item => item === 2 )
b  // [2]
```

## find
##### 查找返回true的那项内容，如果返回true，终止遍历，找不到返回undefind。
```js
const a = [1,2,3,4]
const b = a.find(item => item === 2 )
b  // 2
```

## findIndex
##### 不同于find返回的是数组项，findIndex返回的下标索引。

## some和every
##### some接受一个判断回调，回调的参数是数组的每一项，如果回调判断返回 true，那么将终止继续遍历，some函数最终返回的是true; 如果最终都没有符合条件的，那么最后会返回false。
##### every跟some方法结构一样，不同的是接受的参数回调中返回的是false，就会终止继续遍历，最终every方法返回的是false；如果最终都没有符合条件的，那么最后会返回true。

##


