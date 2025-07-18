/**
 * @param {number[]} prices
 * @return {number}
 */
// 关键是记录最小值和最大差值
var maxProfit = function (prices) {
    //  最小值
    let min = prices[0];
    // 最大差值
    let max = 0;
    for(const item of prices){
        min = Math.min(min,item);
        max = Math.max(max,item-min);
    }
    return max;
};