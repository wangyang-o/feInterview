/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
    let res = '';
    const handle = (l, r) => {
        // 判断回文
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        const str = s.slice(l + 1, r);
        res = str.length > res.length ? str : res;
    }
    for (let i = 0; i < s.length; i++) {
        // 奇数个
        handle(i, i);
        // 偶数个
        handle(i, i + 1);
    }

    return res;
};