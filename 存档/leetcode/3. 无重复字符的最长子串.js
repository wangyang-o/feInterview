// 无重复字符的最长子串
const lengthOfLongestSubstring = function (s) {
    let max = 0;
    let start = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            // 如果出现重复字符，则更新start
            start = Math.max(start, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        max = Math.max(max, i - start + 1);
    }
    return max;
}
console.log(lengthOfLongestSubstring('abcasabcdbb'));