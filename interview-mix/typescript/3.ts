// 面向接口的编程是一切高级编程范式的开端   使用设计模式    

interface IUser {
  name: string;
  age: number;
}

const getUserinfo = (user: IUser): string => {
  return `name: ${user.name}, age: ${user.age}`
}