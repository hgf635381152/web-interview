function mutiple(...args) {
    let result = 1;
    console.log(args)
    for (var val of args) {
      result *= val;
    }
    return result;
}

mutiple(1, 2, 3, 4) // 24