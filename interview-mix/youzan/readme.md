# 有赞一面凉经

css选择器有哪些

选择器的优先级
1,0,0,0 style=""
0,1,0,0 id
0,0,1,0 class
0,0,0,1 元素 div h2
0,0,0,0 * > + ~

flex布局

postion有哪些属性

absolute，relative，fixed定位的区别
是否脱离文档流
相对于什么在定位(自身？包含块)

es6新特性

es5和es6写法上有什么不同
类  定义变量都不同

let,const,var的区别
let,const  定义块级变量  const 定义的变量不可变
var 变量提升(在当前作用域)
暂时性死区

箭头函数和普通函数的区别
this

js异步处理方式有哪些
回调  promise  await

promise有哪些静态方法
promise.all
promise.race
promise.allSettled

js的数据类型

什么是闭包，闭包可以用来做什么

js有哪些类型检查的方法

instance of在原型链上的查找方式，是递归还是...？
1.判断 构造上面存不存在一个  Symbol.hasInstance 的方法，如果有这个方法，则去这个方法的返回值
2.否则判断左边这个 对象的原型链上面  存不存在 右边这个  构造函数的.prototype

call,bind,apply的区别

浏览器事件模型，一个点击按钮点完发生了什么？
事件流

如何对多个事件进行处理？
1. 有10000各 li 节点， 给这些节点绑上事件？？  事件代理
2. 全局事件 (定时器) 一定要清理

跨域，同源策略

jsonp的原理

cors跨域有哪些头部

cookie,seesion,localstorage的区别
