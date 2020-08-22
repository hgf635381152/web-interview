console.log(1 == '1')
console.log(true == 'true')
console.log(NaN == 'NaN')
console.log(NaN == NaN)
console.log(-0 == 0)
console.log(0 == '')
console.log([1] == true)
console.log(null == undefined)
console.log({ "name": "Arwa" } == { "name": "Arwa" })

let a = { "name": "Arwa" }
let b = a
console.log(a == b)

console.log(1 === '1')
console.log(true === 'true')
console.log(true === true)
console.log(NaN === NaN)
console.log(null === null)
console.log('Ara' === 'ara')
console.log(-0 === 0)
console.log(null === undefined)
console.log({ "name": "Arwa" } == { "name": "Arwa" })

Object.is('Comparison Operators', 'Comparison Operators')
Object.is('Comparison Operators', 'comparison Operators')

Object.is(null, null)
Object.is(null, 'null')

let a = { "name": "Arwa" }
let b = a
Object.is(a, b)

Object.is(0, ' ');
Object.is({ "name": "Arwa" }, { "name": "Arwa" })
Object.is(window, window)
Object.is(0, 0)
Object.is(0, -0)
Object.is(NaN, NaN)
Object.is(NaN, 0 / 0)
Object.is(null, undefined)
Object.is([1], true)

// Array.prototype.indexOf() 使用了哪个运算符

// SameValueZero