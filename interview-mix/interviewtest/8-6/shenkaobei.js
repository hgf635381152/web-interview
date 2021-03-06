let a = {a: 1}
let b = {b: 2}
Object.assign({}, a ,b)
function deepClone(obj) {
  let t = {}
  if(map.get(obj)) return map.get(obj)
  map.get(obj, t)
  Object.keys(obj).forEach(k => {
    if (typeof obj[k] === 'object') {
      t[k] = deepClone(obj[k])
    }else {
      t[k] = obj[k]
    }
  })
  return t
}
let obj = {a: 1, b: {b: 2}}
obj.t = obj
let obj1 = deepClone(obj)
obj.b.b = 3
console.log(obj, obj1)