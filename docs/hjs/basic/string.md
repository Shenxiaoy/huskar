# 字符串方法

## 汉字正则匹配
* 1、旧的正则匹配，一些新加入的汉字匹配不到，比如 鿏
```js
const regold=/[\u4e00-\u9fa5]/
regold.test('好')  //true
```
* 2、最新 unicode 转义，兼容需要用babel转译插件@babel/plugin-proposal-unicode-property-regex
```js
const regnew=/\p{Unified_Ideograph}/u
regnew.test('断点')  // true
```

## replace
字符串替换，第一个参数为替换内容，可为字符串或正则表达式；第二项为替换的内容或者一个替换的回调。
### 普通替换
```js
var str = 'hello world';
str = str.replace(/world/, 'javascript');
console.log(str) // -> hello javascript;
```

### 特殊标记$
|字符|替换文本|
|----|:---:|
|$1、$2、……$99|与 regexp 中的第 1 到第 99 个子表达式相匹配的文本。|
|$&|与regexp相匹配的子串|
|$`|位于匹配子串左侧的文本|
|$'|位于匹配子串右侧的文本|
|$$|插入一个“$”|

1) $i(i: 1 - 99)：表示从左到右，正则子表达式（组）匹配到的文本。
```js
var name = 'Peppa Pig';
name = name.replace(/(\w+)\s* \s*(\w+)/, '$2 $1');
console.log(name); // -> Pig Peppa
```
```js
var str = '"a", "bc"';
str = str.replace(/"([^"]*)"/g, "'$1'");
console.log(str); // -> 'a','bc'
```
2) $`（tab键上方的字符）：表示匹配字符串文本左边的文本
```js
var str = 'hello world';
str = str.replace(/world/g, '$`');
console.log(str); // -> hello hello 
```
3) $'：表示匹配字符串右边的文本
```js
var str = 'hello world';
str = str.replace(/hello/g, "$'");
console.log(str); // -> world world
```
4) $&: 表示与正则表达式匹配的全文本
```js
var str = 'hello world';
str = str.replace(/hello world/g, "$& ,fun");
console.log(str); // -> hello world ,fun

// 与$'组合使用
var myString = "javascript";
myString = myString.replace(/java/, "$&$' is ");
console.log(myString); // -> javascript is script
```
5) $$: 表示插入一个$
```js
var str = '￥20000.00';
str = str.replace(/￥/, "$$");
console.log(str); // -> $20000.00
```

### 第二个参数为函数
函数参数表示：
- param 1: 匹配到的字符串
- param 2: 匹配的子字符串
- param 3: 匹配的子字符串
- param 4: 匹配到的字符串在字符串中的位置
- param 5: 原始字符串
> 如果匹配到的全字符串有多个，每个都会执行一次函数（有多少（n）个子字符串，第二个参数开始到第n个都是表示子串,最后一个参数为原始字符串。

1) 单子首字母大写
```js
var str = 'please make heath your first proprity';
str = str.replace(/\b\w+\b/g, function(word) {
    return word[0].toUpperCase() + word.slice(1);
});
console.log(str); // -> Please Make Heath Your First Proprity

// and
var str = 'please make heath your first proprity';
str = str.replace(/(^|\s)([a-z])/g, function(word, p1, p2) {
    return p1 + p2.toUpperCase();
});
console.log(str); // -> Please Make Heath Your First Proprity
```

## startsWith
类似Java中this.jsonString.startsWith(prefix)，判断字符串是否是以str为开头的
```js
var a = 'fanxianfeng'
a.startsWith('fan')  // true
```

## subString substr
### 字符串截取
1) 语法：substr(start, ?length) 从索引位置开始截取长度的字符串
```js
var a = 'fanxianfeng'
a.substr(2,4) // "nxia"
```
2) 语法：subString(start, ?end) 解决索引之间的字符串，不包括索引结尾对应的字符串。 
```js
var a = 'fanxianfeng'
a.substring(2,5)  // "nxi"
```

## 大小写字母转换
### toUpperCase 转成大写字母
### toLowerCase 转成小写字母
### css标签 text-transform
 ```css
text-transform: uppercase  // 全部大写
text-transform:  lowercase  // 全部小写
text-transform:  capitalize // 单次以大写开头
 ```
