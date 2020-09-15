- es6
      arrow function 箭头函数
      let const 
      promise 五星
      async await
      proxy
      Object.defineProperty
      map reduce
- ajax
      xhr  state  1 2 3 4
      JSONP  跨域
      axios  统一  原理分析
- 手写代码
      抄写 + 理解
      实现Promise
      实现防抖函数（debounce）
      实现节流函数（throttle）
      实现Event(event emitter)
      实现instanceOf
      模拟new
      实现一个call/apply
      模拟Object.create
      解析 URL Params 为对象
      深拷贝浅拷贝


## 基本数据类型

## 数组的API
for of 遍历数组
for in 遍历对象

## es6新特性
1. 块级作用域(let const)
2. 数组的扩展
3. 箭头函数
4. rest参数
5. 展开运算符
6. 解构赋值
7. 模板字符串
8. Promise
9. 类(实际上是语法糖，还是基于原型链)

## Set(集合)和Map(字典)
  Set是ES6 新增的一种新的数据结构，类似于数组，但成员是唯一且无序的，没有重复的值。
  Set 本身是一种构造函数，用来生成 Set 数据结构。
  add(value)：新增，相当于 array里的push
  delete(value)：存在即删除集合中value
  has(value)：判断集合中是否存在 value
  clear()：清空集合

  集合 与 字典 的区别：

  共同点：集合、字典 可以储存不重复的值
  不同点：集合 是以 [value, value]的形式储存元素，字典 是以 [key, value] 的形式储存

## 深浅拷贝
- 浅拷贝
1. Object.assign()
2. 展开运算符...
3. Array.prototype.concat()
4. Array.prototype.slice()
- 深拷贝
1. JSON.parse(JSON.stringify())
2. 手写深拷贝

## this
看函数在哪里调用？
  4: new：this 指向 new 创建完的对象
  3: call/apply 和 bind：第一个参数  
  bind 未来调用  call，apply立即调用但参数不同 一个个传参  一个传数组
  2: obj.  : 指向这个对象
  1: 默认 window，严格模式指向 undefined


## 闭包
在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。
- 应用
1. 私有变量的实现
2. 柯里化、偏函数

## JS 异步解决方案的发展历程以及优缺点。
  1. 回调函数（callback）
  优点：解决了同步的问题（只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。）
  缺点：回调地狱，不能用 try catch 捕获错误，不能 return
  2. Promise
  优点：解决了回调地狱的问题
  缺点：无法取消 Promise ，错误需要通过回调函数来捕获
  3. Generator
  特点：可以控制函数的执行，可以配合 co 函数库使用
  4. Async/await
  async、await 是异步的终极解决方案
  优点：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题
  缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。

## es5的继承
寄生组合式继承

## es6模块化
其模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

/** 定义模块 math.js **/

## Promise
一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。promise 对象初始化状态为 pending ；当调用resolve(成功)，会由pending => fulfilled ；当调用reject(失败)，会由pending => rejected。

- Promise的使用流程
new Promise一个实例，而且要 return
new Promise 时要传入函数，函数有resolve reject 两个参数
成功时执行 resolve，失败时执行reject
then 监听结果

function loadImg(src){
   const promise=new Promise(function(resolve,reject){
     var img=document.createElement（'img'）
     img.onload=function(){
        resolve(img)
   }
     img.onerror=function（）{
        reject()
   }
    img.src=src
 })
  return promise//返回一个promise实例
}
var src="http://www.imooc.com/static/img/index/logo_new.png"
var result=loadImg(src)
result.then(function(img){
    console.log(img.width)//resolved(成功)时候的回调函数
},function(){
    console.log("failed")//rejected(失败)时候的回调函数
})
result.then(function(img){
    console.log(img.height)
})


##  手写函数

1. 节流
```js
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
```

2. 防抖
```js
const throttle = (fn, delay) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};
```

3. new
```js
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}
```

4. call
```js
Function.prototype.myCall = function(thisArg, ...args) {
    const fn = Symbol('fn')        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    thisArg = thisArg || window    // 若没有传入this, 默认绑定window对象
    thisArg[fn] = this              // this指向调用call的对象,即我们要改变this指向的函数
    const result = thisArg[fn](...args)  // 执行当前函数
    delete thisArg[fn]              // 删除我们声明的fn属性
    return result                  // 返回函数执行结果
}
```

5. apply
```js
Function.prototype.myApply = function(thisArg, args) {
    const fn = Symbol('fn')        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    thisArg = thisArg || window    // 若没有传入this, 默认绑定window对象
    thisArg[fn] = this              // this指向调用call的对象,即我们要改变this指向的函数
    const result = thisArg[fn](...args)  // 执行当前函数（此处说明一下：虽然apply()接收的是一个数组，但在调用原函数时，依然要展开参数数组。可以对照原生apply()，原函数接收到展开的参数数组）
    delete thisArg[fn]              // 删除我们声明的fn属性
    return result                  // 返回函数执行结果
}
```

6. bind
```js
Function.prototype.myBind = function (thisArg, ...args) {
    var self = this
    // new优先级
    var fbound = function () {
        self.apply(this instanceof self ? this : thisArg, args.concat(Array.prototype.slice.call(arguments)))
    }
    // 继承原型上的属性和方法
    fbound.prototype = Object.create(self.prototype);
    return fbound;
}
```

7. 深拷贝
```js
function deepClone(obj) {
    if (obj === null) return obj; 
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    let cloneObj = new obj.constructor();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 实现一个递归拷贝
        cloneObj[key] = deepClone(obj[key]);
      }
    }
    return cloneObj;
}
```