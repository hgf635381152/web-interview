let a = [1, 2, [{a: 1}, [4, [5]]]];
// a.push(a)
let map = new Map()
function flat(arr) {
  let Arr = []
  function Flat(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        Flat(arr[i])
      }
      else {
        Arr.push(arr[i])
      }
    }
  }
  Flat(arr)
  return Arr
}
flat(a)
// 数组拍平   [1, 2, 3, 4, 5]