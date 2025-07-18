/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  let len = nums.length;
  const dfs = (path) => {
    if (path.length === len) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (path.includes(nums[i])) continue;
      path.push(nums[i]);
      dfs(path);
      path.pop();
    }
  };
  dfs([]);
  return res;
};
