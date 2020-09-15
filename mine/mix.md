## 设计模式
  发布订阅者模式


## webpack
Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

1. loader和plugin
- loader就是一个打包的方案，它知道对于某个特定的文件该如何去打包。 处理非.js文件
- plugin是一个扩展器，它丰富了wepack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务。

2. webpack优化方式
- production模式   自带压缩优化
- 将CSS提取到独立文件中  Mini-css-extract-plugin
- 自动添加CSS前缀 使用 postcss，需要使用 postcss-loader 和 autoprefixer
- import动态导入   @babel/plugin-syntax-dynamic-import


## 前端工程化
