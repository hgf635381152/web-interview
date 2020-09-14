## 设计模式
  发布订阅者模式


## webpack

1. loader和plugin

loader就是一个打包的方案，它知道对于某个特定的文件该如何去打包。 处理非.js文件

plugin是一个扩展器，它丰富了wepack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务。
