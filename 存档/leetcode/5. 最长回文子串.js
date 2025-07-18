/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  const handle = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    const str = s.slice(l + 1, r);
    res = res.length > str.length ? res : str;
  };
  for (let i = 0; i < s.length; i++) {
    // 奇数个
    handle(i, i);
    // 偶数个
    handle(i, i + 1);
  }

  return res;
};
console.log(longestPalindrome("bb"));
//  动态规划法
const longestPalindrome1 = (s) => {
  const len = s.length;
  const arr = Array.from(new Array(len), () => new Array(len).fill(false));
  let maxLen = 0;
  let start = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j <= len; j++) {
      if (s[i] === s[j] && (j - i <= 2 || arr[i + 1] === arr[j - 1])) {
        arr[i][j] = true;
        if (j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          start = i;
        }
      }
    }
  }
  return s.substring(start, start + maxLen);
};
