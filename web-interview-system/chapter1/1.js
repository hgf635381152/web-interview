// function a(arr) {
//     let count = null
//     let num = 0
//     for (let i = 0; i < arr.length; i++) {
//         let n = i
//         while(arr[i+1] >= arr[i]) {
//             count = arr[n]
//             i++
//         }
//         if (count != null) {
//             num = num + arr[i] - arr[n]
//             count = null
//         }
//     }
//     return num
// }
// console.log(a([1, 9, 2, 2, 7, 6]))

    // Arr[2] = Math.max(arr[2]+Arr[0], Arr[1])
    // Arr[3] = Math.max(arr[3]+Arr[1], Arr[2])
    // Arr[n] = Math.max(arr[n]+Arr[n-2], Arr[n-1])

// function a(arr) {
//     Arr = []
//     Arr[0] = arr[0]
//     if (arr.length == 1) return Arr[0]
//     Arr[1] = Math.max(arr[0], arr[1])
//     if (arr.length == 2) return Arr[1]
//     let n = 2
//     while (n < arr.length) {
//         Arr[n] = Math.max(arr[n]+Arr[n-2], Arr[n-1])
//         n++
//     }
//     return Arr[n-1]
// }
// console.log(a([1, 2, 3, 1]))

// function getStr(s) {
//     s = s.split('')
//     var A = []
//     var num = 0
//     for (let i = 0; i < s.length; i++) {
//         let j = i
//         let flag = true
//         let count = 0
//         while(j < s.length && flag) {
//             if (A.indexOf(s[j]) == -1) {
//                 A.push(s[j])
//                 j++
//                 count++
//             }else {
//                 flag = false
//                 num = num > count ? num : count
//                 A = []
//             }
//         }
//     }
//     return num
// }

// console.log(getStr('abcdbaefga'))

function getNum(a) {
    var num = 1024 - a
    var count = 0
    while (num >= 1) {
        while (num >= 4) {
            while (num >= 16) {
                while (num >= 64) {
                    num = num - 64
                    count++
                    console.log('64')
                }
                num = num - 16
                count++
                console.log('16')
            }
            num = num - 4
            count++
            console.log('4')
        }
        if (num >= 1) {
            num = num - 1
            count++
        }
    }
    return count
}

console.log(getNum(201))