var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  for (const item of prices) {
    min = Math.min(min, item);
    // 第i天最大收益 = max「第i-1天的最大收益，第i天价格-前i天的最小值」
    max = Math.max(item - min, max);
  }
  return max;
};
