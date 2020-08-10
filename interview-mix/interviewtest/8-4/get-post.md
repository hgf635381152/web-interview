
## GET    POST
一个req body， 一个是 querstring (a=1&b=2)
在浏览器

baidu.com/search?s=js
组成 url 的一部分

从协议本身来看，并没有限制 GET 传递参数不能放到 body 
POST 传递参数 也可以放到 querstring

一个 url 由哪些部分组成


- 语义不一样， GET  POST
- GET 资源可以缓存  POST 不能缓存
- GET url 长度有限(浏览器)  post req body 不限制的
- GET 不安全