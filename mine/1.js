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

// var myObj = {
//   name : " 极客时间 ", 
//   showThis: function(){
//     console.log(this)
//     var bar = ()=>{
//       this.name = " 极客邦 "
//       console.log(this)
//     }
//     bar()
//   }
// }
// myObj.showThis()
// console.log(myObj.name)
// console.log(window.name)

// function* genDemo() {
//   console.log(" 开始执行第一段 ")
//   yield 'generator 2'

//   console.log(" 开始执行第二段 ")
//   yield 'generator 2'

//   console.log(" 开始执行第三段 ")
//   yield 'generator 2'

//   console.log(" 执行结束 ")
//   return 'generator 2'
// }

// console.log('main 0')
// let gen = genDemo()
// console.log(gen.next())
// console.log('main 1')
// console.log(gen.next())
// console.log('main 2')
// console.log(gen.next())
// console.log('main 3')
// console.log(gen.next())
// console.log('main 4')

// async function foo() {
//   console.log(1)
//   let a = await 100
//   console.log(a)
//   console.log(2)
// }
// console.log(0)
// foo()
// console.log(3)


// async function foo() {
//   console.log('foo')
// }
// async function bar() {
//   console.log('bar start')
//   await foo()
//   console.log('bar end')
// }
// console.log('script start')
// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)
// bar();
// new Promise(function (resolve) {
//   console.log('promise executor')
//   resolve();
// }).then(function () {
//   console.log('promise then')
// })
// console.log('script end')

// console.log(typeof(null), Object.prototype.toString.call(null))


// function mp(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let flag = true
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 flag = false
//             }
//         }
//         console.log(`第${i+1}次排序`)
//         // if (flag) break
//     } 
//     return arr
// }

// function mp(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = arr[i]
//         let index = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < min) {
//                 min = arr[j]
//                 index = j
//             }
//         }
//         arr[index] = arr[i]
//         arr[i] = min 
//     }
//     return arr
// }

let left = []
let right = []
function mp(arr, left, right) { 
    if (arr.length <= 1) return arr
    let index = arr.length / 2 || 0
    left = []
    right = []
    const pivotValue = arr.splice(index, 1)[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] > pivotValue ? right.push(arr[i]) : left.push(arr[i])
    }
    return [...mp(left), pivotValue, ...mp(right)]
}

console.log(mp([1,8,3,7,5,2], left, right))


