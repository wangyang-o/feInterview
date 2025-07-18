/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const toZero = (grid, r, c) => {
    const flag =
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      grid[r][c] === "0";
    if (flag) return;
    grid[r][c] = "0";
    toZero(grid, r - 1, c);
    toZero(grid, r + 1, c);
    toZero(grid, r, c - 1);
    toZero(grid, r, c + 1);
  };
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        count++;
        toZero(grid, r, c);
      }
    }
  }
  return count;
};
// 相似问题 https://leetcode.cn/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/
