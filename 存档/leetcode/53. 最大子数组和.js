/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    let cur = 0;
    let max = nums[0];
    for (const item of nums) {
        cur = Math.max(item, cur + item);
        max = Math.max(cur, max);
    }
    return max;
};