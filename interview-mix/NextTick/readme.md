1. nextTick接受一个回调函数时（当不传参数的时候，提供一个Promise化的调用），传入的回调函数会在callbacks中存起来，根据一个状态标记 pending 来判断当前是否要执行 timerFunc()
2. timerFunc() 是根据当前环境判断使用哪种方式实现，按照 Promise.then和 MutationObserver以及setImmediate的优先级来判断，支持哪个就用哪个，如果执行环境不支持，会采用setTimeout(fn, 0)代替
3. timerFunc() 函数中会执行 flushCallbacks函数，flushCallbacks函数的作用就是对所有callback进行遍历，然后指向响应的回调函数

Vue是异步更新DOM的，在平常的开发过程中，我们可能会需要基于更新后的 DOM 状态来做点什么，比如后端接口数据发生了变化，某些方法是依赖于更新后的DOM变化，这时我们就可以使用 Vue.nextTick(callback)方法。