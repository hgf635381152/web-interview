// 类型   定义文件   React  FC
// 类型  声明和业务分离

interface IUser {
  name: string;
  age: number;
}

type IUserInfoFunc = (user: IUser) => string

const getuserinfo: IUserInfoFunc = (user) => {
  return `name: ${user.name}, age: ${user.age}`
}