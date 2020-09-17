## position
- static 正常的布局行为，即元素在文档常规流中当前的布局位置。
- relative 元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置
- absolute 脱离正常文档流，通过指定元素相对于最近的非static定位祖先元素的偏移，来确定元素位置
- fixed 和absolute类似，但是它是相对于屏幕视口的位置来指定元素位置。
- sticky 盒位置根据正常流计算，然后相对于该元素在流中的 flow root（BFC）和最近的块级祖先元素定位。在所有情况下，该元素定位均不对后续元素造成影响。

## 行内元素、块级元素
1. 行内元素
最常使用的是span，另外行内元素还包括img、a、big、small、sub、sup、strong、u、button(属性默认为display：inline-block)
行内元素的特点：相邻的行内元素不换行，设置宽高无效，margin设置仅左右方向有效，上下无效，padding设置上右下左都有效。
2. 块级元素
块级元素最具有代表性的就是div，其余的有p、h1~h6、table、ul、li、ol、等等以及H5新增的属性header、section、aside、footer等等。
块级元素的特点，能够自动换行开启新的一行，能够设置宽高，margin和padding对上下左右四个方向设置均有效。
3. 行内块级元素
元素排列在一行，不会自动换行，可设置宽度和高度以及外边距和内边距的所有样式。



## 清除浮动
1.添加新元素
2.使用伪元素
3.触发父元素BFC 添加overflow:hidden

## 居中方式
1. 绝对定位 + margin
2. 绝对定位 + transform
3. 通过text-align
4. 使用flex
5. 使用Grid

## 移动端适配/1px问题
rem + viewport   设置inital-scale


## flex布局
- justify-content
定义了子元素在主轴(横轴)上的对齐方式

- align-items
定义了定义项目在交叉轴(竖轴)上对齐方式

1. flex-grow
定义项目的放大比例，默认为0，即使有剩余空间也不放大。如果所有子元素flex-grow为1，那么将等分剩余空间，如果某个子元素flex-grow为2，那么这个子元素将占据2倍的剩余空间
2. flex-shrink
定义项目的缩小比例，默认为1，即如果空间不足，子元素将缩小。如果所有子元素flex-shrink都为1，某个子元素flex-shrink为0，那么该子元素将不缩小
3. flex-basis
定义在分配多余空间之前，项目占据的主轴空间，默认auto，即子元素本来的大小，如果设定为一个固定的值，那么子元素将占据固定空间

## 三列布局
- 定位实现三列布局
左右两列绝对定位并且固定宽度；
中间元素自适应，且左右margin设置为左右元素的宽度；
定位的缺点：当出现滚动条时，内容区在滚动条后边显示，而且内容区仍旧被压缩(不推荐使用)
- 浮动实现三列布局
注意：因为浮动脱离了文档流，所以middle一定要放在三列元素的最后面；
- 圣杯布局
- 双飞翼布局

## 选择器权重
!important
行内样式
id
class
通配符(*)



## margin重叠问题
 对于上下margin有用，左右margin没有用


## 盒模型
盒模型就是 将**content内容区域+padding+border+margin**

1. W3C 标准盒模型：
属性width,height只包含内容content，不包含border和padding。
2. IE 盒模型：
属性width,height包含border和padding，指的是content+padding+border。



## BFC
BFC全称 Block Formatting Context 即块级格式上下文，简单的说，BFC是页面上的一个隔离的独立容器，不受外界干扰或干扰外界

1. 如何触发BFC

float不为 none
overflow的值不为 visible
position 为 absolute 或 fixed
display的值为 inline-block 或 table-cell 或 table-caption 或 grid

2. BFC的渲染规则是什么

BFC是页面上的一个隔离的独立容器，不受外界干扰或干扰外界
计算BFC的高度时，浮动子元素也参与计算（即内部有浮动元素时也不会发生高度塌陷）
BFC的区域不会与float的元素区域重叠
BFC内部的元素会在垂直方向上放置
BFC内部两个相邻元素的margin会发生重叠

3. BFC的应用场景

清除浮动：BFC内部的浮动元素会参与高度计算，因此可用于清除浮动，防止高度塌陷
避免某元素被浮动元素覆盖：BFC的区域不会与浮动元素的区域重叠
阻止外边距重叠：属于同一个BFC的两个相邻Box的margin会发生折叠，不同BFC不会发生折叠
