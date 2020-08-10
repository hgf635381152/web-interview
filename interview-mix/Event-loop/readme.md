1. settimeout
2. Promise
3. 请求
4. addevent
5. 页面

浏览器内部有很多线程:
1. 定时器能触发线程
2. http
3. GUI线程

什么是 Event-loop?
  浏览器协调用户交互, 渲染, 网络等任务

```js
setTimeout(() => {
 console.log(1);
}, 0)
Promise.resolve(3).then(console.log);
console.log(2);
```

宏任务、任务: 由宿主环境引起的任务
setTimeout, 整体的一段script


微任务: 由 js 本身引起的任务
Promise.then  MuatationObserver  Process.nextTick

## 流程
1. 从宏任务队列里面取出 **一个** 执行
2. 从微任务队列里取出 **所有的** 执行, 如果在这执行过程中又产生了微任务, 再次 重复 第2步
3. 有可能进入浏览器的更新渲染
  - reqAnimationframe 回调
  - 执行 IntersectionObserver 回调
  - 重新绘制渲染

以 60fps  每一帧花费16.666ms
我们的渲染是
一个宏任务 -> 清空微任务 -> 渲染 -> 一个宏任务 -> 清空微任务 -> 渲染 -> 一个宏任务 -> 清空微任务 -> 渲染



```js
async function foo() {
  await bar();
  console.log(1);
}
async function bar() {
 console.log(0)
 Promise.resolve(3).then(console.log)
 return new Promise((resolve, reject) => {
   console.log(2)
   resolve();
 })
}
foo()
```

```js
async function foo() {
  await bar();
  console.log(1);
}
async function bar() {
 console.log(0)
 Promise.resolve(3).then(console.log)
 return new Promise((resolve, reject) => {
   console.log(2)
   setTimeout(() => { resolve() })
 })
}
Promise.resolve(4).then(console.log)
foo()
```


## 简化路径
https://leetcode-cn.com/problems/simplify-path/

## 笔记草稿
题目
薯队长写了一篇笔记草稿，请你帮忙输出最后内容。
1.输入字符包括，"(" , ")" 和 "<"和其他字符。
2.其他字符表示笔记内容。
3.()之间表示注释内容，任何字符都无效。 括号保证成对出现。
4."<"表示退格, 删去前面一个笔记内容字符。括号不受"<"影响 。

输入
Corona(Trump)USA<<<Virus
输出
CoronaVirus

## URL 简化路径
实现一个方法 function resolve(baseUrl: string, moduleId: string): string {}

resolve('http://www.baidu.com', 'a/b/c'); 
简化为-> http://www.baidu.com/a/b/c
resolve('http://www.baidu.com', 'a/../c'); 
简化为-> http://www.baidu.com/c
resolve('http://www.baidu.com/1/2', 'a/.././c'); 
简化为-> http://www.baidu.com/1/2/c