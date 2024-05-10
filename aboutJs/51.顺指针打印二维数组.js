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
    [13, 14, 15, 16]
];

// 调用函数
printArr(matrix);
