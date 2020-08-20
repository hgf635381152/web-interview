## cookie
name
value
Domain: cookie 生效的域名  baidu.com
path: /a/b  /c   /a  /  生效的路径
express: 过期时间  默认就是当前 session 失效
httpOnly: cookie 只在http传输, js 是无法操作的 
          可以由后端的set-cookie 响应头设置, 也可以由前端 js document.cookie='' 设置
secure: 只在 https 的环境下生效

cookie 只要符合 domain + path 的生效范围 就会随着 http请求发送
CSRF
sameSite: lax  strict(cookie只在同域生效)  none

www.a.com  当前域名 cookie (a.com + /)
www.b.com  请求 www.a.com