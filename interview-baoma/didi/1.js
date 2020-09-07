let obj = {a: '1', b: {c: 2}, d: [1,2,3]}
// 深拷贝
// 数据在更新的时候, 通知一下模板
// obj.a obj.a = 2
Object.defineProperty(obj, 'a', { 
  get: function() {
    console.log('get value')
    return val
  },
  set: function(newVal) {
    console.log('change value')
    // 未来通知template 更新
    val = newVal
  }
})

// console.log(obj.a)
obj.a = '2'
obj.a
