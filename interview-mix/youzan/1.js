let name = "lilei"
function foo () {   // 看定义的位置   向外找
  console.log(name)  // lilei
}

function changename() {
  let name = "lihua";
  foo()
}
changename()  // 结果为lilei