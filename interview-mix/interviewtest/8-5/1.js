// 在前端开发中，通常会把多个 js 文件合并成一个文件，
// 以减少网络请求次数，达到优化加载速度的目的，
// 但是当文件之间存在依赖关系时，对 js 合并的顺序，会有一定的要求，
// 比如 A.js 依赖了 B.js，那打包后的文件，B.js 需要排在 A.js 的前面。
// 实现一个函数resolve(tree) ，根据 js 的依赖关系树 tree，输出合理的打包顺序的数组（结果可能不唯一，输出其中一种即可）。

var tree2 = {
  name: "page.js",
  require: [
    {
      name: "D.js",
      require: [
        {
          name: "C.js"
        },
        {
          name: "E.js"
        }
      ]
    },
    {
      name: "A.js",
      require: [
        {
          name: "B.js",
          require: [
            {
              name: "C.js"
            }
          ]
        }
      ]
    }
  ]
};

function resolve(tree) {
  let arr = []
  function walk(node) {
    arr.unshift(node.name);
    if (node.require) {
      // for (let child of node.require)
      //   walk(child)
      for(let i = node.require.length - 1; i >= 0; i--){
        walk(node.require[i])
      }
    }
  }
  walk(tree)
  return arr
}


// const resolve = tree => {
//   let res = []
//   let count = 0
//   const foo = node => {
//     const promise = new Promise((res, rej) => {
//       node?.require?.forEach((e, i) => foo(e))
//       // console.log(node.name,'-----')
//       node.name && res(node.name)
//     })
//     promise.then(name => res.push(name))
//   }
//   foo(tree)
//   return res
// }

console.log(resolve(tree2)); //   ["C.js", "B.js", "A.js", "C.js", "E.js", "D.js", "page.js"]