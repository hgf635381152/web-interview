## 说说HTML5在标签、属性、存储、API上的新特性
标签：新增语义化标签（aside / figure / section / header / footer / nav等），增加多媒体标签video和audio，使得样式和结构更加分离
属性：增强表单，主要是增强了input的type属性；meta增加charset以设置字符集；script增加async以异步加载脚本
存储：增加localStorage、sessionStorage和indexedDB，引入了application cache对web和应用进行缓存
API：增加拖放API、地理定位、SVG绘图、canvas绘图、Web Worker、WebSocket


## 对axios的理解   jsonp原理
jsonp利用的是script没有跨域的限制，通过在script里面传入跨域的地址，然后将回调函数以参数的形式穿进去，就可以在后端获取到数据，自己定义好的回调函数里面就可以获取数据。

## 强缓存和协商缓存

## 从输入一个URL 到页面显示发生了什么
- 首先，用户从浏览器进程里输入请求信息；
- 然后，网络进程发起 URL 请求；
 1. 查找缓存
 2. DNS解析
 3. 建立连接
 4. 可能要重定向
 5. 响应数据类型处理
- 服务器响应 URL 请求之后，浏览器进程就又要开始准备渲染进程了；
- 渲染进程准备好之后，需要先向渲染进程提交页面数据，我们称之为提交文档阶段；
  “提交文档”的消息是由浏览器进程发出的，渲染进程接收到“提交文档”的消息后，会和网络进程建立传输数据的“管道”。
  等文档数据传输完成之后，渲染进程会返回“确认提交”的消息给浏览器进程。
  浏览器进程在收到“确认提交”的消息后，会更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面。
- 渲染进程接收完文档信息之后，便开始解析页面和加载子资源，完成页面的渲染
  1. 渲染进程将 HTML 内容转换为能够读懂的DOM 树结构。
  2. 渲染引擎将 CSS 样式表转化为浏览器可以理解的styleSheets，计算出 DOM 节点的样式。
  3. 创建布局树，并计算元素的布局信息。
  4. 对布局树进行分层，并生成分层树。
  5. 为每个图层生成绘制列表，并将其提交到合成线程。
  6. 合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。
  7. 合成线程发送绘制图块命令DrawQuad给浏览器进程。
  8. 浏览器进程根据 DrawQuad 消息生成页面，并显示到显示器上。


## event-loop 事件循环机制
消息队列   宏任务与微任务  先进先出 
每次执行完宏任务就会把当前微任务全部执行完再执行下一个宏任务


## cookies、localStorage、sessionStorage
cookies： HTML5之前本地储存的主要方式，大小只有4k，HTTP请求头会自动带上cookie，兼容性好
localStorage：HTML5新特性，持久性存储，即使页面关闭也不会被清除，以键值对的方式存储，大小为5M
sessionStorage：HTML5新特性，操作及大小同localStorage，和localStorage的区别在于sessionStorage在选项卡(页面)被关闭时即清除，且不同选项卡之间的sessionStorage不互通

Cookie
1. 服务器通过Set-Cookie头给客户端一段字符串
2. 客户端每次访问相同域名的网页的时候，必须带上这段字符串
3. 客户端要在一段时间内保存这个Cookie
注意：前端不要写Cookie,影响性能

Session
1. 将SessionId通过Cookie发给客户端
2. 客户端访问服务器时，服务器读取SessionId
3. 服务器中有一块内存（哈希表）保存了所有session
4. 通过SessionId我们可以得到对应用户的隐私信息，如用户名密码等

## GET和POST的区别
GET - 从指定的资源请求数据。
POST - 向指定的资源提交要被处理的数据。

GET：不同的浏览器和服务器不同，一般限制在2~8K之间，更加常见的是1k以内。
GET和POST的底层也是TCP/IP，GET/POST都是TCP链接。
GET产生一个TCP数据包；POST产生两个TCP数据包。
对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；
而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。


# 前端性能优化


## JavaScript 的性能优化

1. 提升单次脚本的执行速度，避免 JavaScript 的长任务霸占主线程，这样可以使得页面快速响应交互；
2. 避免大的内联脚本，因为在解析 HTML 的过程中，解析和编译也会占用主线程；
3. 减少 JavaScript 文件的容量，因为更小的文件会提升下载速度，并且占用更低的内存。

## 加载优化
- 首屏加载
1. 增加loading提示   提升用户体验
2. 开启http2
3. 开启浏览器缓存

- 组件加载
1. 组件懒加载 (lazy + Suspense)
2. 组件预加载

## Web性能优化
1. 减少重绘和重排，利用合成(例如使用transform属性)
