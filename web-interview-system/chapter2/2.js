// function test() {
//   var num = []
//   var i

//   for (i = 0; i < 10; i++) {
//     num[i] = function () {
//       console.log(i)
//     }
//   }

//   return num[9]
// }

// test()()    // 输出10

// var test = (function () {
//   var num = 0
//   // console.log(num)
//   return () => {
    
//     return num++
//   }
  
// }())


// for (var i = 0; i < 10; i++) {
//   // test()
//   console.log(test())
// }

// console.log(test())   // 输出10

// function foo(a, b) {
//   console.log(b);
//   return {
//     foo: function (c) {
//       return foo(c, a);
//     }
//   }
// }

// var func1 = foo(0);
// func1.foo(1);
// func1.foo(2);
// func1.foo(3);
// var func2 = foo(0).foo(1).foo(2).foo(3);
// var func3 = foo(0).foo(1);
// func3.foo(2);
// func3.foo(3);


// var a = 1;
// function test() {
//   a = 2;
//   return function () {
//     console.log(a);
//   }
//   var a = 3;
// }
// test()();


function A() {}
function B(a) {
    this.a = a;
}
function C(a) {
    if (a) {
        this.a = a;
    }
}
A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;

console.log(new A().a); // 1
console.log(new B().a); // undefined
console.log(new C(2).a); // 2