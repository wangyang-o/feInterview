/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  let maxLen = 0;
  let start = 0;
  const dp = Array.from(Array(len), () => Array(len).fill(false));
  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        if (j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          start = i;
        }
      }
    }
  }
  return s.substring(start, start + maxLen);
};
