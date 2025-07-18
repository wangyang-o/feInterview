const printArr = (arr = []) => {
  let top = 0;
  let left = 0;
  let bottom = arr.length - 1;
  let right = arr[0].length - 1;
  while (true) {
    // 打印顶部行
    for (let i = left; i <= right; i++) {
      console.log(arr[top][i]);
    }
    if (++top > bottom) break;
    // 打印右侧列
    for (let i = top; i <= bottom; i++) {
      console.log(arr[i][right]);
    }
    if (--right < left) break;
    // 打印底部行
    for (let i = right; i >= left; i--) {
      console.log(arr[bottom][i]);
    }
    if (--bottom < top) break;
    // 打印左侧列
    for (let i = bottom; i >= top; i--) {
      console.log(arr[i][left]);
    }
    if (++left > right) break;
  }
};
// 示例二维数组
var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// 调用函数
// printArr(matrix);

function generateParenthesis(n) {
  if (n === 0) return [""]; // 当n为0时，返回一个包含空字符串的列表

  const result = [];
  const prevCombinations = generateParenthesis(--n); // 递归生成n-1对括号的组合

  // 遍历n-1对括号的所有有效组合
  prevCombinations.forEach((combination) => {
    // 对于每个组合，我们可以在任何位置插入一对新的括号
    for (let i = 0; i < combination.length; i++) {
      // 只在左括号后插入新的括号对，以避免重复
      if (combination[i] === "(") {
        const newCombination =
          combination.slice(0, i + 1) + "()" + combination.slice(i + 1);
        // 避免添加重复的组合
        if (!result.includes(newCombination)) {
          result.push(newCombination);
        }
      }
    }
    // 在组合的开始处添加一对新的括号
    result.push("()" + combination);
  });

  return result;
}

// 示例：生成3对括号的所有有效组合
const combinations = generateParenthesis(3);
console.log(combinations);
