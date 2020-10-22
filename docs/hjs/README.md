# 常用js-api
> [MDN](https://developer.mozilla.org/zh-CN/)
### WeakMap
> weakMap 只接受对象作为健名，健名是弱引用，当健名为null的时候，引用对象会被垃圾回收；
```js
const wmp = new WeakMap()
const a = {query: 'query'}
wmp.set(a, 'coco')
```
 WeakMap只有四个属性，set/get/has/delete
##### 应用场景
- 在 DOM 对象上保存相关数据
```js
let wm = new WeakMap(), element = document.querySelector(".element");
wm.set(element, "data");
let value = wm.get(elemet);
console.log(value); // data
element.parentNode.removeChild(element);
element = null;
```
- 数据缓存
```js
const cache = new WeakMap();
function countOwnKeys(obj) {
    if (cache.has(obj)) {
        console.log('Cached');
        return cache.get(obj);
    } else {
        console.log('Computed');
        const count = Object.keys(obj).length;
        cache.set(obj, count);
        return count;
    }
}
```
- 私有属性
```js
const privateData = new WeakMap();

class Person {
    constructor(name, age) {
        privateData.set(this, { name: name, age: age });
    }
    getName() {
        return privateData.get(this).name;
    }
    getAge() {
        return privateData.get(this).age;
    }
}
export default Person;
```


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
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    static resolve(val) {
        return new MyPromise((resolve, reject) => {
            resolve(val)
        })
    }
    //reject方法
    static reject(val) {
        return new MyPromise((resolve, reject) => {
            reject(val)
        })
    }
    static all(promiseArr) {
        return new MyPromise((resolve, reject) => {
            let result = [];

            promiseArr.forEach((promise, index) => {
                promise.then((value) => {
                    result[index] = value;

                    if (result.length === promiseArr.length) {
                        resolve(result);
                    }
                }, reject);
            });
        });
    }
    static race(promiseArr) {
        return new MyPromise((resolve, reject) => {
            promiseArr.forEach(promise => {
                promise.then((value) => {
                    resolve(value);
                }, (err) => reject(err));
            });
        });
    }
    static deferred() {
        let dfd = {};
        dfd.promies = new MyPromise((resolve, reject) => {
            dfd.resolve = resolve;
            dfd.rfeject = reject;
        });
        return dfd;
    }

    constructor(executor) {
        this.state = PENDING;
        this.value = null;
        this.reason = null;
        // 存放成功回调的函数
        this.onFulfilledCallbacks = [];
        // 存放失败回调的函数
        this.onRejectedCallbacks = [];

        const resolve = value => {
            if (this.state === PENDING) {
                this.value = value;
                this.state = FULFILLED;
                this.onFulfilledCallbacks.map(fn => fn());
            }
        }

        const reject = value => {
            if (this.state === PENDING) {
                this.reason = value;
                this.state = REJECTED;
                this.onRejectedCallbacks.map(fn => fn());
            }
        }

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        let self = this;
        let promise2 = null;
        //解决onFulfilled,onRejected没有传值的问题
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : y => y
        //因为错误的值要让后面访问到，所以这里也要跑出个错误，不然会在之后then的resolve中捕获
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw err;
        }

        promise2 = new MyPromise((resolve, reject) => {
            if (self.state === PENDING) {
                self.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(self.value);
                            self.resolvePromise(promise2, x, resolve, reject);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, 0)

                });
                self.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(self.reason);
                            self.resolvePromise(promise2, x, resolve, reject);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, 0);
                });
            }

            if (self.state === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value);
                        self.resolvePromise(promise2, x, resolve, reject);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
            }

            if (self.state === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        self.resolvePromise(promise2, x, resolve, reject);
                    } catch (reason) {
                        reject(reason);
                    }
                })
            }
        });

        return promise2;
    }

    resolvePromise(promise2, x, resolve, reject) {
        let self = this;
        let called = false; // called 防止多次调用
        //因为promise2是上一个promise.then后的返回结果，所以如果相同，会导致下面的.then会是同一个promise2，一直都是，没有尽头
        //相当于promise.then之后return了自己，因为then会等待return后的promise，导致自己等待自己，一直处于等待
        if (promise2 === x) {
            return reject(new TypeError('循环引用'));
        }
        //如果x不是null，是对象或者方法
        if (x !== null && (Object.prototype.toString.call(x) === '[object Object]' || Object.prototype.toString.call(x) === '[object Function]')) {
            // x是对象或者函数
            try {
                let then = x.then;

                if (typeof then === 'function') {
                    then.call(x, (y) => {
                        // 别人的Promise的then方法可能设置了getter等，使用called防止多次调用then方法
                        if (called) return;
                        called = true;
                        // 成功值y有可能还是promise或者是具有then方法等，再次resolvePromise，直到成功值为基本类型或者非thenable
                        self.resolvePromise(promise2, y, resolve, reject);
                    }, (reason) => {
                        if (called) return;
                        called = true;
                        reject(reason);
                    });
                } else {
                    if (called) return;
                    called = true;
                    resolve(x);
                }
            } catch (reason) {
                if (called) return;
                called = true;
                reject(reason);
            }
        } else {
            // x是普通值，直接resolve
            resolve(x);
        }
    }
    //catch方法
    catch (onRejected) {
        return this.then(null, onRejected)
    } finally(fn) {
        return this.then(value => {
            fn();
            return value;
        }, reason => {
            fn();
            throw reason;
        });
    }
}

// const mp1 = MyPromise.resolve(1);
// const mp2 = MyPromise.resolve(2);
// const mp3 = MyPromise.resolve(3);
// const mp4 = MyPromise.reject(4);

// MyPromise.all([mp1, mp2, mp3]).then(x => {
//     console.log(x);
// }, (err) => {
//     console.log('err1', err);
// })
// MyPromise.race([mp1, mp4, mp2, mp3]).then(x => {
//     console.log(x);
// }, (err) => {
//     console.log('err2', err);
// })

var mp = new MyPromise((resolve, reject) => {
    console.log(11111);
    setTimeout(() => {
        resolve(22222);
        console.log(3333);
    }, 1000);
});
mp.then(x => {
    console.log(x);
}, (err) => {
    console.log('err2', err);
})

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

### DOM 节点的操作
1) 创建元素节点
```js
const odiv  = document.createElement("div")
```
2) 插入追加一个节点,可以添加已经存在的元素，会将其元素从原来的位置移到新的位置
```js
document.body.appendChild(oDiv)
```
3) 插入节点，a节点会插入b节点的前面
```js
document.body.insertBefore(a, b)
```
4) 删除节点
```js
box.remove()
// or
 box2.parentNode.removeChild(box2)
// 删除子节点
var removeChild = box.removeChild(box.childNodes[0])
```
5) 替换节点
```js
// 子节点替换
var replaceChild= document.body.replaceChild(div1,div2)
```
6) 克隆节点
```js
// obj.cloneNode(布尔值) true:深度克隆  false:只克隆表面
const newNode = e.target.cloneNode()
```

### 元素节点获取
```js
document.getElementById()        //  id获取元素
document.getElementsByTagName()
document.getElementsByClassName()
document.getElementsByName()                    //   大部分用于获取表单name
document.querySelector()
document.querySelectorAll()
```
### 如何获取浏览器的可视区宽、高
```js
document.documentElement.clientWidth()||document.body.clientwidth()   // 获取宽
document.documentElement.clientHeight()|| document.body.clientHeight() // 获取高
```
### 节点类型
|节点类型|nodeType|nodeName|nodeValue|
|---|---|---|---|
|元素节点|1|大写的标签名|null|
|文本节点|3|#text|文本内容|
|注释节点|8|#comment|注释内容|
|document|9|#document|null|

### 节点关系
- parentNode    父节点---兼容
- childNodes    子节点 -----兼容  能拿到所有的所有的子节点
- children      子元素-----不兼容
- previousSibling    上一个哥哥节点    previousElementSibiling 上一个哥哥元素
- nextSibiling        下一个滴滴节点
- firstChild     第一个子节点
- lastChild     最后一个子节点

## 事件捕获和冒泡
> 事件捕获：当某个元素触发某个事件（如onclick），顶层对象document就会发出一个事件流，随着DOM树的节点向目标元素节点流去，直到到达事件真正发生的目标元素。在这个过程中，事件相应的监听函数是不会被触发的。

> 事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。

> 从目标元素开始，往顶层元素传播。途中如果有节点绑定了相应的事件处理函数，这些函数都会被一次触发。

#### 通过 ev.stopPropagation 阻止事件的冒泡

#### event. preventDefault() 阻止元素默认的行为，如链接的跳转、表单的提交；

#### addEventListener 第三个参数，true：事件捕获， false：事件冒泡，默认 false；如果为true，按照从外到内的顺序进行事件的触发，false则是从内往外进行事件的触发。

### event 对象常用的属性、方法
- x/y与clientX/clientY值一样，表示距浏览器可视区域（工具栏除外区域）左/上的距离；
- pageX/pageY，距页面左/上的距离，它与clientX/clientY的区别是不随滚动条的位置变化；
- screenX/screenY，距计算机显示器左/上的距离，拖动你的浏览器窗口位置可以看到变化；
- layerX/layerY，表示距有定位属性的父元素左/上的距离。
- offsetX/offsetY 表示鼠标指针距离绑定元素边缘的距离；


### offsetLeft offsetTop
> 表示距离定位父级元素的位置偏移；

## class

### 静态属性 static 和 私有属性private
> 静态属性值类本身的属性，不能被实例对象访问；而私有属性和实例属性不能被定义的静态方法所访问；私有属性只能在类内部访问，可以被实例方法所访问；

```js
class sd {
  constructor () {
    this.age = 456321
    this.name = 'huskar'
  }
  #a = 2
  aa () {
    console.log(this.name)
    console.log(this.age)
    console.log(this.#a)
  }
  static as () {
    console.log(this.name)
    console.log(this.age)
    console.log(this.#a)
  }
}
const a = new sd()
a.aa()
sd.as()
```

### Math
```js
Math.round()   // 四舍五入
Math.floor()  //  向下取整
Math.ceil()  //  向上取整
Math.abs()   //  取绝对值
Math.sqrt()   // 开平发
Math.max()  // 获取最大值
Math.min()  //  获取最小值
Math.pow()  // 幂次方
Math.random() //  获取0-1随机数

```

### WeakSet
【MDN】: WeakSet 对象允许你将弱保持对象存储在一个集合中。
```js
var ws = new WeakSet();
var foo = {};
var bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo);    // true
ws.has(bar);   // true

ws.delete(foo); // 从set中删除 foo 对象
ws.has(foo);    // false, foo 对象已经被删除了
ws.has(bar);    // true, bar 依然存在
```
