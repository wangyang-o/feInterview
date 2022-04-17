/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 从尾部开始遍历
var merge = function (nums1, m, nums2, n) {
    let max;
    let i = m - 1; let j = n - 1; let k = n + m - 1;
    while (k >= 0) {
        if (i === -1) max = nums2[j--];
        else if (j === -1) max = nums1[i--];
        else if (nums1[i] > nums2[j]) {
            max = nums1[i--]
        } else {
            max = nums2[j--];
        }
        nums1[k--] = max;
    }
};