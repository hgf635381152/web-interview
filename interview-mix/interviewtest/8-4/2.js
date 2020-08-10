
// 写一个日期格式化函数
const dateFormat = (dateInput, format) => {
  // todo
  let arr = []
  format = format.split('')
  arr.push(dateInput.getFullYear())
  arr.push(format[4])
  if ((dateInput.getMonth()+1) < 10 ) {
    arr.push(0)
  }
  arr.push(dateInput.getMonth() + 1)
  arr.push(format[7])
  if (dateInput.getDate() < 10 ) {
    arr.push(0)
  }
  arr.push(dateInput.getDate())
  arr.push(format[10] ? format[10] : '')
  console.log(arr.join(''))
  return arr.join('')
}


dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日