function trim(str) {
  // todo
  let L = 0,
    R = str.length - 1;
  while (str[L] === " ") {
    L++;
  }
  while (str[R] === " ") {
    R--;
  }
  console.log(L, R)
  return str.substring(L, R + 1)
}
console.log(trim("   1   "))

// '    1   '   =>.'1'