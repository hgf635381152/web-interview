// const url = require('url')


const urlString = 'http://baidu.com:8080/test/h?query=js&a=1#node'
// console.log(url.parse(urlString))

// queryString  有什么方法获取？
// 想到什么解决方案？
// 1. 正则写法
function getQueryString(urlStr) {
  var obj = new Object();
  if (urlStr.indexOf("?") != -1){
    var queryStr = urlString.split('?')[1];
    if (urlStr.indexOf("#") != -1){
      // 前端也有 node 那样的 url模块就好了
      queryStr = queryStr.split('#')[0];
    }
    // console.log(queryStr)
    var strs = queryStr.split("&");
    // console.log(strs)
    for (var i = 0; i < strs.length; i++){
      obj[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  return obj;
}

console.log(getQueryString(urlString));