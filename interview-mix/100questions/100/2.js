// 函数和构造函数  即统一又分离
const Person = function(name) {
  this.name = name
  // return 1
  return {
    name: 'Jascon'
  }
}


Person.prototype.sayName = function() {
  console.log(this.name)
}

const person = new Person('Tony')
console.log(person.name)
console.log(person.sayName)
console.log(person instanceof Person)
console.log(person.sayName)

