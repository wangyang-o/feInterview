/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const value = target - nums[i];
        if (map.has(value)) {
            return [map.get(value), i];
        } else {
            map.set(nums[i], i);
        }
    }
};