- 面试题想考察什么
- 牛客网
- 复盘时间 > 准备时间

1. css 属性名和属性值不区分大小写   
    id  className  querySelector  敏感

2. 盒模型
    margin
    行内元素
    当我们使用外边距时, 只有左右方向有效, 竖直方向没有效果
    四个方向的内边距都有效果, 但是竖直方向的内边距只有效果, 不会对其他元素产生影响

3. 怎么回答才完美
    - 自适应
        flexible.js  过时了
    - rem, em
        一切可依 等比例关系 px2rem
        蓝湖 用法 750px
    - media query
    - vw/vh
        100vw px -> vw工具
        vm 方案如何做适配???
    - 百分比
    - calc
    适配   我还用过vue/react+vw 实现
    js babel
    工作流 webpack
    webpack css .styl .scss -> css-loader stylus-loader stylus css 编译
    postcss 全新的css库, 平台 插件系统
    babel-core  autoprefixer
    box-shadow: 
    -webkit-box-shadow
    cssnext css variable
    三明治  什么东西写在哪里都规定好了
    1. 移动适配
        vw
    2. postcss
        vue内置了postcss
        .postcssrc.js
        px-to-vw
        postcss-px-to-viewport
    
    postcss