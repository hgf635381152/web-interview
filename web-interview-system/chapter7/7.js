// console.log(1)

// setTimeout(function() {
//   console.log(2)
// })
// setTimeout(function() {
//     console.log(7)
//   })

// new Promise(function (resolve) {
//   console.log(3)
//   resolve()
//  }).then(function () {
//   console.log(4)
// }).then(function() {
//   console.log(5)
// })

// console.log(6)


async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
    new Promise(function(resolve) {
        console.log('promise3');
        resolve();
    }).then(function() {
        console.log('promise4');
    });
}, 0)
setTimeout(function() {
    console.log('setTimeout1');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');


// Promise.resolve().then(function () {
//     console.log("promise1")
// }).then(function () {
//     console.log("promise2")
// });

// process.nextTick(() => {
//     console.log('nextTick1')
//     process.nextTick(() => {
//         console.log('nextTick2')
//         process.nextTick(() => {
//             console.log('nextTick3')
//             process.nextTick(() => {
//                 console.log('nextTick4')
//             })
//         })
//     })
// })