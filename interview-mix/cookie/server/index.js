const http = require('http');
const fs = require('fs');
let count = 10000;
let sessiontable = [{
  userName: 'liming',
  userId: 1001,
  login: true,
  expire: '2021',
  id: 01
}]
// 用户登录状态保持
// 1 第一次登录完 后端写入 一个 cookie: username=lining, userID=1001
// cookie: sessionId:01
// 2 cookie 每次都随着 http 请求自动发送
// 3 每次 后端 取出 cookie 信息 if(login) { 登录状态有效的 }
http.createServer((req, res) => {
  function isLogin() {
    if (req.headers['cookie']) {
      let cookie = req.headers['cookie'];
      // let [name, sessionId] = cookie.split('=');
      let cookies = cookie.split(';');
      let sessionCookie = cookies.find(cookie => cookie.includes('session'));
      let [name, sessionId] = sessionCookie.split('=');
      if (sessiontable.find((item) => {
        return item.id === Number(sessionId);
      })) {
        return true
      } else {
        return false
      }
    } else { 
      return false
    }
  }
  if (req.url === '/transfer') {
    if (!isLogin()) {
      res.end('un auth')
      return
    }
    count -= 100;
    res.end('ok');
  } else if (req.url === '/count') {
    res.end(count + '')
  } else if (req.url === '/islogin') {
    if (isLogin()) {
      res.end('login')
    }else {
      res.end('not login')
    }
  }
  else {
    // console.log(req.url)
    const html = fs.readFileSync('./index.html', 'utf-8');
    res.setHeader('set-cookie', 'sessionid=1');
    res.end(html);
  }
})
  .listen(9090, () => {
    console.log(9090)
  })
// 合法的  localhost:9090
// hack   [localhost:9099]  zhaomeng.com:9099

// 防止CSRF攻击
// 1.
// sameSite: lax  localhost的某些get请求在zhaomeng.com 发出也能带cookie
// samesite：strict   localhost 的请求只有在localhost 发出才会带cookie
// sameSite： none localhost的get请求不管在什么域都会携带cookie
// 2. csrf_token:
// 用户登录完  服务端 给你一个token  abcd
// 前端存起来
// 之后的请求都要携带这个token
// 这样对于 zhaomeng.com  他发出去是没有这个token

// 3. 浏览器 会给每个请求一个reffer字段  表明这个请求来源
// 服务端检测来源



// const Koa = require('koa');
// const path = require('path');
// const router = require('koa-router')();
// const app = new Koa();

// let count = 10000;

// router.get('/', async (ctx) => {
//   const fs = require('fs');
//   const html = fs.readFileSync('./index.html', 'utf-8')
//   ctx.cookies.set('login', 'hahaha', { 'sameSite': 'lax' });
//   ctx.body = html;
// })
// router.get('/transfer', async (ctx) => {

// })
// router.get('/count', async (ctx) => {
//   ctx.body = count;
// })

// app
//   .use(router.routes())
//   .use(router.allowedMethods());

// app.listen(9090, () => {
//   console.log('server is running 9090');
// });