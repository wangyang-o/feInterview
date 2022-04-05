/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res = '';
    const handle = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        const str = s.slice(l + 1, r);
        res = res.length > str.length ? res : str;
    }
    for (let i = 0; i < s.length; i++) {
        // 奇数个
        handle(i, i);
        // 偶数个
        handle(i, i + 1);
    }

    return res;
};
console.log(longestPalindrome('bb'));