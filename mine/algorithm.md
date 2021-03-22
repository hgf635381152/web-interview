## 介绍下深度优先遍历和广度优先遍历

深度优先遍历
深度优先遍历DFS 与树的先序遍历比较类似。
假设初始状态是图中所有顶点均未被访问，则从某个顶点v出发，首先访问该顶点然后依次从它的各个未被访问的邻接点出发深度优先搜索遍历图，直至图中所有和v有路径相通的顶点都被访问到。若此时尚有其他顶点未被访问到，则另选一个未被访问的顶点作起始点，重复上述过程，直至图中所有顶点都被访问到为止。
```js
let deepTraversal2 = (node) => {
    let nodes = []
    if (node !== null) {
      nodes.push(node)
      let children = node.children
      for (let i = 0; i < children.length; i++) {
        nodes = nodes.concat(deepTraversal2(children[i]))
      }
    }
    return nodes
}
```

广度优先遍历
广度优先遍历 BFS
从图中某顶点v出发，在访问了v之后依次访问v的各个未曾访问过的邻接点，然后分别从这些邻接点出发依次访问它们的邻接点，并使得“先被访问的顶点的邻接点先于后被访问的顶点的邻接点被访问，直至图中所有已被访问的顶点的邻接点都被访问到。 如果此时图中尚有顶点未被访问，则需要另选一个未曾被访问过的顶点作为新的起始点，重复上述过程，直至图中所有顶点都被访问到为止。
```js
let widthTraversal2 = (node) => {
  let nodes = []
  let stack = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      let item = stack.shift()
      let children = item.children
      nodes.push(item)
        // 队列，先进先出
        // nodes = [] stack = [parent]
        // nodes = [parent] stack = [child1,child2,child3]
        // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
        // nodes = [parent,child1,child2]
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i])
      }
    }
  }
  return nodes
}
```

## 快速排序
从数组中选择一个元素作为基准点
排序数组，所有比基准值小的元素摆放在左边，而大于基准值的摆放在右边。每次分割结束以后基准值会插入到中间去。
最后利用递归，将摆放在左边的数组和右边的数组在进行一次上述的1和2操作。
```js
var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
```

## 排序

1. 冒泡排序
每一次遍历 都从后往前进行比较， 相邻的两两比较大小，小的向前浮动 时间复杂度 O(n^2^)
```js
function bubbleSort(target) {
    let temp = null

    for(let i = 0; i < target.length - 1; i++) {
        for(let j = target.length - 1; j > i; j--) {
            if (target[j] < target[j - 1]) {
                temp = target[j]
                target[j] = target[j - 1]
                target[j - 1] = temp
            }
        }

        console.log(`第 ${i + 1} 次排序`)
    }

    return target
}
```
复杂度 O(n^2)
定义一个布尔值
在遍历每一次的时候，如果发生位置交换，就改变布尔值 当这一次循环结束之后，判断该布尔值是否变化 变化了则继续下一次，没变则退出
```js
function bubbleSort(target) {
    let temp = null
    let flag = false
    for(let i = 0; i < target.length - 1; i++) {
        for(let j = target.length - 1; j > i; j--) {
            if (target[j] < target[j - 1]) {
                temp = target[j]
                target[j] = target[j - 1]
                target[j - 1] = temp
                flag = true
            }
        }

        console.log(`第 ${i + 1} 次排序`)
        if (!flag) break
    }

    return target
}
```

2. 选择排序
从左到右开始找，每遍历一次将最小值跟当前遍历的第一个元素交换 时间复杂度 O(n^2 ) 
```js
function selctionSort(target) {
    for (let i = 0; i < target.length - 1; i++) {
        let min = target[i]
        let minIndex = i

        for (let j = i + 1; j < target.length; j++) {
            if (target[j] < min) {
                min = target[j]
                minIndex = j
            }
        }

        console.log(`第${i + 1}次循环`, target)
        if (minIndex === i) continue
        target[minIndex] = target[i]
        target[i] = min
    }

    return target
}
```