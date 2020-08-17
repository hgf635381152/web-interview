// 题目
// 分析一个项目的依赖结构，并按依赖优先级排序。

// 在前端开发中，通常会把多个 js 文件合并成一个文件，以减少网络请求次数，达到优化加载速度的目的，但是当文件之间存在依赖关系时，对 js 合并的顺序，会有一定的要求，比如 a 依赖了 b，那打包后的文件，b 需要排在 a 的前面
// 每一个依赖被加载后都会被立刻执行，那么如果要争取加载一个依赖，则其子依赖都应该优先被加载
// 每一个依赖不希望在钱多出现冗余的情况，若依赖出现多版本的情况，则默认使用更新的版本，比如已知项目依赖结构为（其中 @后面的为依赖版本号）：

// ProjectA

// a@0.1.0
//   - d@0.2.0
//   - c@0.1.0
// b@0.1.1
//   - e@0.1.2
//   - c@0.1.2
// c@0.2.0
// 则其中一种输出的依赖优先级排序为：
// ['d@0.2.0', 'c@0.2.0', 'a@0.1.0', 'e@0.1.2', 'b@0.1.1']

// 输出分析：
// 为了让 a 加载后可以争取执行，则必须先加载 d 和 c，b 的加载同理，又因为在整个依赖关系下，c 的最新版本为 0.2.0 于是有了如上的输出结果。

var tree2 = {
  name: "page.js",
  require: [
    {
      name: "a@0.1.0",
      require: [
        {
          name: "d@0.2.0",
        },
        {
          name: "c@0.1.0",
        }
      ]
    },
    {
      name: "b@0.1.1",
      require: [
        {
          name: "e@0.1.2",
        },
        {
          name: "c@0.1.2",
        }
      ]
    },
    {
      name: "c@0.2.0",
    }
  ]
};
var compareVersion = function (version1, version2) {
  let v1 = version1.split('.'),
    v2 = version2.split('.');
  // 
  let len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    let a = v1[i] ? v1[i] : '0';
    let b = v2[i] ? v2[i] : '0';
    a = +a; b = +b;
    // console.log(a, b);
    if (a > b) return 1;
    else if (a < b) return -1;
  }
  return 0;
}
function resolve(tree) {
  let arr = []
  let map = new Map()
  function walk(node) {
    if (node.require) {
      for (let child of node.require)
        walk(child)
      // for (let i = node.require.length - 1; i >= 0; i--) {
      //   walk(node.require[i])
      // }
      if (!node.name.includes('@')) return
      let version = node.name.split('@')[1]
      let name = node.name.split('@')[0]
      if (map.get(name)) {
        let oldVersion = map.get(name)
        if (compareVersion(version, oldVersion) == 1) {
          map.set(name, version)
        }
      } else {
        map.set(name, version)
      }
    }
  }
  walk(tree)
  // return arr
  return map
}
console.log(resolve(tree2))