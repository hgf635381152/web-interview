## http1和http2
HTTP2多路复用:采用二进制格式传输，取代了HTTP1.x的文本格式，二进制格式解析更高效。
多路复用代替了HTTP1.x的序列和阻塞机制，所有的相同域名请求都通过同一个TCP连接并发完成。在HTTP1.x中，并发多个请求需要多个TCP连接，浏览器为了控制资源会有6-8个TCP连接都限制。
HTTP2中

同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。
单个连接上可以并行交错的请求和响应，之间互不干扰


## http和https
https协议栈引入了安全层，通过对称加密和非对称加密搭配使用加数字证书保证数据传输的安全


## XSS和CSRF
- XSS Cross Site Scripting(跨站脚本攻击)
XSS 攻击就是黑客往页面中注入恶意脚本，然后将页面的一些重要数据上传到恶意服务器。常见的三种 XSS 攻击模式是存储型 XSS 攻击、反射型 XSS 攻击和基于 DOM 的 XSS 攻击。
针对这些 XSS 攻击，主要有三种防范策略，第一种是通过服务器对输入的内容进行过滤或者转码，第二种是充分利用好 CSP，第三种是使用 HttpOnly 来保护重要的 Cookie 信息。

- CSRF Cross-site request forgery(跨站请求伪造)
CSRF攻击就是黑客利用了用户的登录状态，通过第三方的站点进行攻击
三种防范：第一种是充分利用好Cookie的SameSite属性，第二种是验证请求的来源站点，第三种是使用CSRF Token


## 三次握手四次挥手


## 状态码
- 200  请求成功
- 301  永久重定向
- 302  临时重定向
- 304 Not Modified  向缓存中拿数据
- 400 Bad Request   表示由于语法无效，服务器无法理解该请求
- 403 Forbidden     指的是服务器端有能力处理该请求，但是拒绝授权访问。
- 404 Not Found     说明服务器端无法找到所请求的资源
- 500 Internal Server Error   表示所请求的服务器遇到意外的情况并阻止其执行请求。
- 503 Service Unavailable     表示服务器尚未处于可以接受请求的状态。


## 跨域

1. jsonp  
jsonp利用的是script没有跨域的限制，通过在script里面传入跨域的地址，然后将回调函数以参数的形式穿进去，就可以在后端获取到数据，自己定义好的回调函数里面就可以获取数据。
2. cors(跨域资源共享)
在请求头上附上Origin属性，表明这是一个跨域请求。服务器接到请求，根据设定的跨域规则来验证，验证通过，返回Access-Control-Allow-Origin等以Access-Control-开头的响应头以及请求的资源
若为非简单请求，则先要进行一次预请求：
请求方法为OPTIONS
请求头字段包括 Origin, Access-Control-Request-Method(表明正式的跨域请求可能用到的方法)，Access-Control-Request-Headers(表明正式的跨域请求可能用到的头字段)
3. postMessage html5新特性

## 手写ajax
```js
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
    if (xhr.readystate == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            alert(xhr.responseText)
        } else {
            alert("Request was unsuccessful: " + xhr.status)
        }
    }
}
xhr.open("get", "example.php", true)
xhr.send(null)
```

