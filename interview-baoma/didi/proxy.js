// 为什么叫proxy
let target = {}  // 对象  数据劫持   代理
let p = new Proxy(target, {})
p.a = 37
console,log(target.a)