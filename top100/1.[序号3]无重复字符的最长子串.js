var lengthOfLongestSubstring = function (s) {
  let max = 0;
  const len = s.length;
  left = 0;
  // 记录出现过的字符的下标
  const map = new Map();
  for (let right = 0; right < len; right++) {
    if (map.has(s[right])) {
      
      left = Math.max(left, map.get(s[right]) + 1);
    }
    // 只记录最新的下标
    map.set(s[right], right);
    max = Math.max(max, right - left + 1);
  }
  return max;
};
console.log(lengthOfLongestSubstring('abba'));