/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
    // 准备工作
    const res = [];
    const len = nums.length;
    if (len < 3) return res;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break;//因为排过序，所以nums[i]>0直接break；
        if (i > 0 && nums[i] === nums[i - 1]) continue;//去重
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;//去重
                while (left < right && nums[right] === nums[right - 1]) right--;//去重
                left++;
                right--;
            }
            if (sum < 0) left++;
            if (sum > 0) right--;
        }
    }
    return res;
};