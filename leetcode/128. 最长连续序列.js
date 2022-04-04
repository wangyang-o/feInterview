/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let max = 0;
    for (const item of set) {
        //没有左邻居
        if (!set.has(item - 1)) {
            let count = 1;
            let cur = item;
            // 找出右边的连续个数
            while (set.has(cur + 1)) {
                count++;
                cur++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
};