# 计算机网络  HTTP

- a  怎么样点击它   不跳转?
- 浏览器上输入    http://www.baidu.com   http 协议
  会发生什么？   状态码？
    307 
    200
  https://www.baidu.com/  跳转到  加密的http协议

 1. http://www.baidu.com
    res   writeHead(307)   location:https://www.baidu.com/

    1XX   正在处理中
    2XX   成功
    3XX   跳转
    4XX   客户端错误   404
    5XX   服务器端错误   500   503  服务器端无响应

cookie是短暂保存在客户端，
session是短暂保存在服务器端，
locaStorage是永久保存在本地