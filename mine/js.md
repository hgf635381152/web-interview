- es6
      arrow function 箭头函数
      et const 
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

## this

## 闭包

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
const throttle = (fn, delay = 500) => {
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