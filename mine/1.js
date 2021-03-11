// var myname = " 极客时间 "
// function showName(){
//   console.log(myname);
//   if(0){
//    var myname = " 极客邦 "
//   }
//   console.log(myname);
// }
// showName()

// function foo(){
//   var a = 1
//   let b = 2
//   {
//     let b = 3
//     var c = 4
//     let d = 5
//     console.log(a)
//     console.log(b)
//   }
//   console.log(b) 
//   console.log(c)
//   console.log(d)
// }   
// foo()

// let myname= '极客时间'
// {
//   console.log(myname) 
//   let myname= '极客邦'
// }

// function foo() {
//   var myName = " 极客时间 "
//   let test1 = 1
//   const test2 = 2
//   var innerBar = {
//       getName:function(){
//           console.log(test1)
//           return myName
//       },
//       setName:function(newName){
//           myName = newName
//       }
//   }
//   return innerBar
// }
// var bar = foo()
// // bar.setName(" 极客邦 ")
// bar.getName()
// console.log(bar.getName())

// var bar = {
//   myName:"time.geekbang.com",
//   printName: function () {
//       console.log(myName)
//   }    
// }
// function foo() {
//   let myName = " 极客时间 "
//   return bar.printName
// }
// let myName = " 极客邦 "
// let _printName = foo()
// _printName()
// bar.printName()

var myObj = {
  name : " 极客时间 ", 
  showThis: function(){
    console.log(this)
    var bar = ()=>{
      this.name = " 极客邦 "
      console.log(this)
    }
    bar()
  }
}
myObj.showThis()
console.log(myObj.name)
console.log(window.name)