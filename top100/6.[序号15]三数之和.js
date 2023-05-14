/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  const len = nums.length;
  if (len < 3) return res;

  // 排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    let left = i + 1;
    let right = len - 1;
    // 去重,表示当前数和前一个数相同且不是第一个数
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        // 跳过相同的数
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
        left++;
        right--;
      }
      if (nums[i] + nums[left] + nums[right] < 0) left++;
      if (nums[i] + nums[left] + nums[right] > 0) right--;
    }
  }
  return res;
};
