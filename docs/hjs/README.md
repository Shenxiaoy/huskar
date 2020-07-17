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

## localStorage
```js
//写入 3中方法
var storage = window.localStorage
storage.a = 1
storage['a'] = 1
storage.setItem('a', 1)

//读取
console.log(storage.a)
console.log(storage.getItem(a)

//清空
storage.clear()

//删除
storage.removeItem(a)
```

## includes
判断数组（array) 或字符串（string）是否包含指定的值，如果包含返回true，否则返回false
```js
const list = [2,3,7,86,1]
list.includes(2)  // true

const str = 'fanxianfeng'
str.includes('fan')  // true
str.includes('fanf')  // false
```

## 模板字符串 自变量

```js
function aa (l, m, n) {
  console.log(l)
  console.log(m)
  console.log(n)
}
const name = 'sxy'
const age = 12
const city = 'bj'
const address = 'dxd'
aa`i am is ${name},age is${age},at${city}, from${address}`

// 输出，第一个参数为字符串集合，剩下参数依次为引用变量
[ 'i am is ', ',age is', ',at', ', from', '' ]
sxy
12
```

## Promise
> 原理：在Promise原型上有两个方法，resolve和reject，分别是对正常处理和异常处理的回调，且都是异步执行，为的是注册then方法中的回调能先一步放大队列中，方便resolve、reject调用的时候去执行then中回调。
> 多次promise.then 链式操作，then执行后返回的都是一个Promise的实例，如果在then中有return返回值且有效，就会加入到实例中resolve需要执行回调的队列中，从而把resolve 返回的值放入then返回的实例中。
> then 也是异步回调。

##### 代码实现：
```js
// promise 构造函数
function promise(fn) {
  let that = this
  that.status = 'pending' // 存储promise的state
  that.value = '' // 存储promise的value
  that.reason = '' // 存储promise的reason
  that.onFulfilledCb = [] // 存储then方法中注册的回调函数（第一个参数）
  that.onRejectedCb = [] // 存储then方法中注册的回调函数（第二个参数）

  // 2.1
  function resolve(value) {
    // 将promise的状态从pending更改为fulfilled，并且以value为参数依次调用then方法中注册的回调
    setTimeout(() => {
      if (that.status === 'pending') {
        that.status = 'fulfilled'
        that.value = value
        // 2.2.2、2.2.6
        that.onFulfilledCb.map(item => {
          item(that.value)
        })
      }
    }, 0)
  }

  function reject(reason) {
    // 将promise的状态从pending更改为rejected，并且以reason为参数依次调用then方法中注册的回调
    setTimeout(() => {
      if (that.status === 'pending') {
        that.status = 'rejected'
        that.reason = reason
        // 2.2.3、2.2.6
        that.onRejectedCb.map(item => {
          item(that.reason)
        })
      }
    }, 0)
  }

  fn(resolve, reject)
}

// 2.2
promise.prototype.then = function(onFulfilled, onRejected) {
  let that = this
  let promise2

  // 2.2.1、2.2.5
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => r

  if (that.status === 'pending') {
    // 2.2.7
    return promise2 = new promise((resolve, reject) => {
      that.onFulfilledCb.push(value => {
        try {
          let x = onFulfilled(value)
          promiseResolution(promise2, x, resolve, reject)
        } catch(e) {
          // 2.2.7.2
          reject(e)
        }
      })

      that.onRejectedCb.push(reason => {
        try {
          let x = onRejected(reason)
          promiseResolution(promise2, x, resolve, reject)
        } catch(e) {
          // 2.2.7.2
          reject(e)
        }
      })
    })
  }
}

// promise resolution
function promiseResolution(promise2, x, resolve, reject) {
  let then
  let thenCalled = false
  // 2.3.1
  if (promise2 === x) {
    return reject(new TypeError('promise2 === x is not allowed'))
  }
  // 2.3.2
  if (x instanceof promise) {
    x.then(resolve, reject)
  }
  // 2.3.3
  if (typeof x === 'object' || typeof x === 'function') {
    try {
      // 2.3.3.1
      then = x.then
      if (typeof then === 'function') {
        // 2.3.3.2
        then.call(x, function resolvePromise(y) {
          // 2.3.3.3.3
          if (thenCalled) return
          thenCalled = true
          // 2.3.3.3.1
          return promiseResolution(promise2, y, resolve, reject)
        }, function rejectPromise(r) {
          // 2.3.3.3.3
          if (thenCalled) return
          thenCalled = true
          // 2.3.3.3.2
          return reject(r)
        })
      } else {
        // 2.3.3.4
        resolve(x)
      }
    } catch(e) {
      // 2.3.3.3.4.1
      if (thenCalled) return
      thenCalled = true
      // 2.3.3.2
      reject(e)
    }
  } else {
    // 2.3.4
    resolve(x)
  }
}

function doSomething() {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise done')
    }, 2000)
  })
}

function doSomethingElse() {
  // return this.promise2

  // return new promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('promise2 done')
  //   }, 1000)
  // })

  // return {
  //   then: (resolvePromise, rejectPromise) => {
  //     setTimeout(() => {
  //       resolvePromise(22)
  //       rejectPromise(33)
  //     })
  //   }
  // }

  // return { test: 4 }

  // return function() {
  //   console.log('xxxx')
  // }

  // return 4

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject('ES6 promise')
  //   }, 1000)
  // })
}

this.promise2 = doSomething().then(doSomethingElse)
console.log(this.promise2)
```

#### Promise 使用 api
- new Promise((res, rej) => {} )
```javascript
export default function (request) {
  return new Promise((res, rej)=>{
    var xhr = new XMLHttpRequest(request.data)
    xhr.open(request.method, request.url, true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.onreadystatechange = function () {
      if ((xhr.readyState == 4) && (xhr.status == 200)) {
        try {
          res(JSON.parse(xhr.responseText))
        }catch (e) {
          rej(e)
        }
      } else {
        // rej(xhr.responseText)
      }
    }
    xhr.send(request.data)
  })
}
```
- Promise.resolve 、Promise.reject 把一个值转化为promise 对象

- Promise.all()   接受多了promise对象, 只要有一个Promise被reject了，那么组成的新的Promise的状态也是reject的

- Promise.race()  接受多个promise对象， 只要包裹的的Promise对象中有一个的状态发生了改变，那么组成的这个新的Promise对象的状态就是上面那个率先改变的Promise实例的状态

## Generator 迭代器
```js
function* showWords() {
    yield 'one';
    yield 'two';
    return 'three';
}

var show = showWords();

show.next() // {done: false, value: "one"}
show.next() // {done: false, value: "two"}
show.next() // {done: true, value: "three"}
show.next() // {done: true, value: undefined}
```

> yield* 后面跟的也是一个生成器

## Set
不含重复值，可以使用Set去重
```js
let a = new Set()
a.add(3)
[...a] // [3]

let b = new Set([2,2,3,4,5,7,7])
[...b]   // [2,3,4,7]

let c =[... new Set('aabcdee')].join('')
c  // 'abcede'
```

## Map
任何类型都可以作为对象的键值
```js
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

