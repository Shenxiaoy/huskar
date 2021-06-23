# 字符串

## 字符串相乘

## 获取字符串中最长不重复子串
```js
/**
 * 思路：
 * 1、首先字符串遍历过程中把当前字符串存入preStr中,然后把当前字符在遍历过去的字符串中查找是否重复；
 * 2、如果重复，更新之前上一个重复字符的索引给starti;然后截取上一个重复字符到当前字符的长度跟preStr长度判断，如果大于preStr长度，把当前不重复字符串赋值给preStr；
 * 3、如果没找到重复，更新不重复字符串的结尾字符的索引；判断当前不重复字符串的长度是否超过preStr，如果超过，进行替换；
*/
function getMaxL(str) {
  let starti = 0, endi = 0, preStr = ''
  for(let k in str) {
    
    const result = str.slice(starti, parseInt(k))
    const cur = str[k]

    if(result.indexOf(cur) > -1) {
      starti = parseInt(result.indexOf(cur)) + 1 + starti
      let curStr = str.slice(starti, parseInt(k) + 1)
      if(preStr.length < curStr.length) {
        preStr = curStr
      }

      // console.log(starti,k, preStr, '0000')
    } else {
      endi = parseInt(k)
      let curStr = str.slice(starti, endi + 1)
      if(preStr.length < curStr.length) {
        preStr = curStr
      }
    }
  }
  console.log(preStr, 'list')

}
getMaxL('shenxiaoyuh902')

```





