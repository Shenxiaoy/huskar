# 深入理解
### 深拷贝
```js
/**
 * 浅拷贝
 *
 * @param {*} obj
 */
var shallowCopy = function (obj) {
  if (typeof obj != 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}


/**
 * 深拷贝
 *
 * @param {*} obj
 */
var deepCopy = function (obj) {
  if (typeof obj != 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] == 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
} 
```

### new实现
> 生成一个新对象
> 链接到原型
> 绑定this的指向
> 返回新对象（如果构造函数有自己的返回值，则返回这个值）
```js
function create() {
    const obj = new Object();  // 1
    const Con = Array.prototype.shift.call(arguments);
    obj.__proto__ = Con.prototype; // 2
    const ret = Con.apply(obj, arguments); // 3
    return ret instanceof Object ? ret : obj;  // 4
}
```

## 设计模式

### 单例模式
> 保证一个类仅有一个实例，并提供一个访问它的全局访问点
> 
> 优点：减少内存开销
> 
> 确定：扩展难，测试不利
```js
var Singleton = function(name) {
  this.name = name;
  this.instance = null;
}

Singleton.prototype.getName = function() {
  return this.name;
}

Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

// 使用
var a = Singleton.getInstance('abcd');
```

### 工厂模式
> 抽象了具体创建对象的过程
> 
> 优点：良好的封装性，模块间低耦合，扩展性强
```js
function createObject(value1, value2, value3) {
  var obj = new Object();
  obj.value1 = value1;
  obj.value2 = value2;
  obj.value3 = value3;
  obj.fun = function() {
  }
  return obj;
}

var obj1 = createObject(1,2,3);
```

### 观察者模式
> 观察者模式，也叫发布订阅模式（Publish/subscribe），定义如下：
>
>定义对象间一种一对多的依赖关系，使得每当一个对象改变状态，则所有依赖于它的对象都会得到通知并被自动更新
>
> 在JavaScript中，一般用事件模式来替代传统的发布订阅模式
>
> 优点：时间上的解耦，对象间的解耦
>
> 缺点：对象间的逻辑被隐藏，难以追踪逻辑，消耗内存，如果事件不被使用，也会占用内存
```js
// 观察者模式（发布订阅模式）

var Event = (function () {
  var clientList = {};
  var listen = function (key, fn) {
    if (!clientList[key]) {
      clientList[key] = [];
    }
    clientList.push(fn);
  },

  var trigger = function () {
    var key = Array.prototype.shift.call(arguments),
      fns = clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (var i = 0, length = fns.length; i < length; i++) {
      fns[i].apply(this, arguments);
    }
  }

  return {
    listen,
    trigger
  }
})();

Event.listen('myfun', () => {});
Event.trigger('myfun');
```

### 代理模式
> 为其他对象提供一种代理以控制对这个对象的访问
> 
> 优点：职责清晰 高扩展性 智能化
```js
// 图片预加载
var myImage = (function(){
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);

  return {
    setSrc: function(src) {
      imgNode.src = src;
    }
  }
 })();

 // 代理类
 var proxyImage = (function() {
   var img = new Image();
   img.onload = function() {
     myImage.setSrc(this.src);
   }

   return {
     setSrc: function(src) {
       myImage.setSrc('https://loading.gif');
       img.src = src;
     }
   }
 })();

 proxyImage.setSrc('https://myImage.png');
```

> [待参考学习](https://github.com/louzhedong/blog)

## 数据结构

### 栈
> 后进先出

> 就是先push 在pop


### 队列
> 先进先出 只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作

### 链表