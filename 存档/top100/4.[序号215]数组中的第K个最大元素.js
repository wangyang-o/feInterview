/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const quickSort = (nums) => {
    if (nums <= 1) return nums;
    const left = [];
    const right = [];
    let index = Math.floor(nums.length / 2);
    let pivot = nums.splice(index, 1)[0];
    for (const item of nums) {
      if (item <= pivot) {
        left.push(item);
      } else {
        right.push(item);
      }
    }
    return quickSort(left).concat([pivot], quickSort(right));
  };
  const sorted = quickSort(nums);
  return sorted[sorted.length - k];
};
