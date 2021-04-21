## 设计模式

- 观察者模式
  对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，所有依赖它的对象 Observer 都会得到通知。

- 发布订阅者模式
  比观察者模式多了一个调度中心 可以订阅不同类型的事件

## webpack

Webpack 的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack 将从这个文件开始找到你的项目的所有依赖文件，使用 loaders 处理它们，最后打包为一个（或多个）浏览器可识别的 JavaScript 文件。

1. loader 和 plugin？原理？

- loader 就是一个打包的方案，它知道对于某个特定的文件该如何去打包。 处理非.js 文件
- plugin 是一个扩展器，它丰富了 wepack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，执行广泛的任务。

2. webpack 优化方式

- production 模式 自带压缩优化
- 将 CSS 提取到独立文件中 Mini-css-extract-plugin
- 自动添加 CSS 前缀 使用 postcss，需要使用 postcss-loader 和 autoprefixer
- import 动态导入 @babel/plugin-syntax-dynamic-import

## 前端工程化

前端工程化可以分成四个方面来说，分别为模块化、组件化、规范化和自动化。

- 模块化
  模块化是指将一个文件拆分成多个相互依赖的文件，最后进行统一的打包和加载，这样能够很好的保证高效的多人协作。
- 组件化
  不同于模块化，模块化是对文件、对代码和资源拆分，而组件化则是对 UI 层面的拆分。
- 规范化
  正所谓无规矩不成方圆，一些好的规范则能很好的帮助我们对项目进行良好的开发管理。规范化指的是我们在工程开发初期以及开发期间制定的系列规范
- 自动化
  从最早先的 grunt、gulp 等，再到目前的 webpack、parcel。这些自动化工具在自动化合并、构建、打包都能为我们节省很多工作。而这些只是前端自动化其中的一部分，前端自动化还包含了持续集成、自动化测试等方方面面。

## 同构

同构是指同开发一个可以跑在不同的平台上的程序。

- 好处

1. 减少代码开发量, 提高代码复用量。因为一份代码能同时跑在浏览器和服务器，因此不仅代码量减少了，而且很多业务逻辑不需要在浏览器和服务端两边同时维护，因而同时减小了程序出错的可能。
2. 可以以较小的成本完成 SSR （Server-Side Render）的功能。而 SSR 能带来至少以下两点好处。
   首屏性能，让用户更早看到页面内容。
   SEO (Search Engine Optimization), 对爬虫友好。

- 问题

1. 性能损失，客户端服务端都要渲染页面, 存在一定的性能浪费（可以通过客户端 dom 反收集和 virtual-dom 等手段尽量优化，但不可避免）。
2. 一个可以同构的模块必须同时兼容客户端和 Node.js 环境，因此会带来额外的一些开发成本。
3. 存在服务端内存溢出的风险

- 可以同构的部分

1. 单页应用的路由可以被同构，这样访问任意单页应用的子页面都可以享受 SSR 带来的好处。
2. 模板，前后端共用一个渲染引擎就可以做到前后端共用模板，这样类似于因同一份数据要用于前后端渲染而需要开发两套模板的日子就一去不复返了。
3. 数据请求，开发支持同构的 httpClient，那么前后端请求数据的代码也可以同构了。需要注意的是服务端没有 cookie，因此会话相关的请求代码需要极其小心。
4. 其他平台不相关的代码，例如 react 和 vue 都有的全局状态管理模块、数据处理过程和一些平台无关的纯函数。

## 前端路由

1. Hash
   Hash 方法是在路由中带有一个 #，主要原理是通过监听 # 后的 URL 路径标识符的更改而触发的浏览器 hashchange 事件，然后通过获取 location.hash 得到当前的路径标识符，再进行一些路由跳转的操作

- location.href：返回完整的 URL
- location.hash：返回 URL 的锚部分
- location.pathname：返回 URL 路径名
- hashchange 事件：当 location.hash 发生改变时，将触发这个事件

2. H5 History
   HTML5 提供了一些路由操作的 Api

- history.go(n)：路由跳转，比如 n 为 2 是往前移动 2 个页面，n 为 -2 是向后移动 2 个页面，n 为 0 是刷新页面
- history.back()：路由后退，相当于 history.go(-1)
- history.forward()：路由前进，相当于 history.go(1)
- history.pushState()：添加一条路由历史记录，如果设置跨域网址则报错
- history.replaceState()：替换当前页在路由历史记录的信息
- popstate 事件：当活动的历史记录发生变化，就会触发 popstate 事件，在点击浏览器的前进后退按钮或者调用上面前三个方法的时候也会触发

区别：
Hash 模式是使用 URL 的 Hash 来模拟一个完整的 URL，因此当 URL 改变的时候页面并不会重载。History 模式则会直接改变 URL，所以在路由跳转的时候会丢失一些地址信息，在刷新或直接访问路由地址的时候会匹配不到静态资源。因此需要在服务器上配置一些信息，让服务器增加一个覆盖所有情况的候选资源，比如跳转 index.html 什么的

## ajax

异步的 javascript 和 xml AJAX 是一种用于创建快速动态网页的技术。 ajax 用来与后台交互

步骤：

```js
//创建 XMLHttpRequest 对象
var ajax = new XMLHttpRequest();
//规定请求的类型、URL 以及是否异步处理请求。
ajax.open("GET", url, true);
//发送信息至服务器时内容编码类型
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//发送请求
ajax.send(null);
//接受服务器响应数据
ajax.onreadystatechange = function () {
  if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {
  }
};
```

1. Promise 封装 ajax

```js
function pajax({
  url = null,
  method = "GET",
  dataType = "JSON",
  async = true,
}) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.responseType = dataType;
    xhr.onreadystatechange = () => {
      if (!/^[23]\d{2}$/.test(xhr.status)) return;
      if (xhr.readyState === 4) {
        let result = xhr.responseText;
        resolve(result);
      }
    };
    xhr.onerror = (err) => {
      reject(err);
    };
    xhr.send();
  });
}
```
