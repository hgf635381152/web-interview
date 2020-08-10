
// ## 简化路径
// https://leetcode-cn.com/problems/simplify-path/


var simplifyPath = function (path) {
  path = path.split("/");
  let arr = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "." || path[i] === "") {
    }
    else if (path[i] === "..") {
      arr.pop();
    }
    else {
      arr.push(path[i]);
    }
  }
  console.log("/" + arr.join("/"))
  return "/" + arr.join("/");
};
simplifyPath('/a/../../b/../c//.//')


