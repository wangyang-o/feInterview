/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    let cur = 0;
    let max = nums[0];
    for (item of nums) {
        cur = Math.max(item, item + cur);
        max = Math.max(pre, max);
    }
    return max;
};