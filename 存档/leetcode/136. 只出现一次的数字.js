/**
 * @param {number[]} nums
 * @return {number}
 */
// 异或运算
// 任何数和0做异或运算，结果仍然是原来的数。
// 任何数和其自身做异或运算，结果是 0。

 var singleNumber = function (nums) {
    let res = 0;
    for (item of nums) res = res ^ item;
    return res;
}