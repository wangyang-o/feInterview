/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const index = arr.indexOf(s[i]);
    if (index !== -1) arr.splice(0, index + 1);
    arr.push(s[i]);
    maxLen = Math.max(maxLen, arr.length);
  }
  return maxLen;
};
