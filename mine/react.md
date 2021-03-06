常见react面试题: https://juejin.im/post/6844903922453200904

## MVVM   MVC

## redux流程, 源码

## 函数式组件和类组件
  函数式组件性能更高，因为类组件使用的时候要实例化，而函数组件直接执行函数取返回结果即可
  函数式组件没有复杂的生命周期，并且可以灵活地模拟、组合功能

## state 和 props 之间的区别是什么？

`props（“properties” 的缩写）`和 `state` 都是普通的 `JavaScript` 对象。它们都是用来保存信息的，这些信息可以控制组件的渲染输出，而它们的几个重要的不同点就是：

- `props` 是传递给组件的（类似于函数的形参），而 `state` 是在组件内被组件自己管理的（类似于在一个函数内声明的变量）。
- `props` 是不可修改的，所有 `React` 组件都必须像纯函数一样保护它们的 `props` 不被更改。 由于 `props` 是传入的，并且它们不能更改，因此我们可以将任何仅使用 `props` 的 `React` 组件视为 `pureComponent`，也就是说，在相同的输入下，它将始终呈现相同的输出。
- `state` 是在组件中创建的，一般在 `constructor`中初始化 `state`
- `state` 是多变的、可以修改，每次`setState`都异步更新的。


## setState
setState只在合成事件和钩子函数中是“异步”的，在原生事件和setTimeout 中都是同步的。
setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。
setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。
