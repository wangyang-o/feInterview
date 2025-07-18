/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let cur = 0;
  let max = nums[0];
  for (const item of nums) {
    // cur小于0的话，无增益效果，就直接取item
    cur = Math.max(item, cur + item);
    max = Math.max(max, cur);
  }
  return max;
};
