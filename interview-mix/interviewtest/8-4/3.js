function zip() {
  // todo
  let arr = Array.from(arguments), Arr1 = [],Arr2 = []
  for (let j = 0; j < arr[0].length; j++) {
    for (let i = 0; i < arr.length; i++) {
      Arr1.push(arr[i][j])
    }
    Arr2.push(Arr1)
    Arr1 = []
  }
  console.log(Arr2)
}
zip(['fred', 'barney'], [30, 40], [true, false]);
  // => [['fred', 30, true], ['barney', 40, false]]