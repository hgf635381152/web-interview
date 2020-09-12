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

1. 基本数据类型

2. 数组的API

3. Set(集合)和Map(字典)
  Set是ES6 新增的一种新的数据结构，类似于数组，但成员是唯一且无序的，没有重复的值。
  Set 本身是一种构造函数，用来生成 Set 数据结构。
  add(value)：新增，相当于 array里的push
  delete(value)：存在即删除集合中value
  has(value)：判断集合中是否存在 value
  clear()：清空集合

  集合 与 字典 的区别：

  共同点：集合、字典 可以储存不重复的值
  不同点：集合 是以 [value, value]的形式储存元素，字典 是以 [key, value] 的形式储存

4. this

5. 闭包

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