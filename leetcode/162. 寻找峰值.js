/**
 * @param {number[]} nums
 * @return {number}
 */
 const findPeakElement = nums => {
    let [left, right] = [0, nums.length - 1];
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            //  如果nums[mid] > nums[mid + 1]，说明left～mid区间一定有最大值
            right = mid;
        } else {
            //  如果nums[mid] < nums[mid + 1]，说明mid+1~right区间一定有最大值
            left = mid + 1;
        }
    }
    return left;
};