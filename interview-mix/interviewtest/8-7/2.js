// ## 笔记草稿
// 题目
// 徐队长写了一篇笔记草稿，请你帮忙输出最后内容。
// 1.输入字符包括，"(", ")" 和 "<"和其他字符。
// 2.其他字符表示笔记内容。
// 3.()之间表示注释内容，任何字符都无效。 括号保证成对出现。
// 4."<"表示退格, 删去前面一个笔记内容字符。括号不受"<"影响 。

// 输入
// Corona(Trump)USA<<<Virus
//   输出
//   CoronaVirus

function note (strs) {
  var arr = [], num = 0;
  strs = strs.split('')
  strs.map((item) => {
    if (item === "(") {
      num += 1
    }
    else if (item === ")") {
      num -= 1
    } else if (num === 0) {
      if (item === "<") {
        arr.pop()
      } else
        arr.push(item)
    }
  })
  return arr.join("")
};
note('Corona(Trump)USA<<<Virus')