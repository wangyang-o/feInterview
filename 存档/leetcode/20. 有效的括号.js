/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    if (s.length % 2) return false;
    const map = new Map([
        [']', '['],
        [')', '('],
        ['}', '{'],
    ]);
    const stack = [];
    for (const item of s) {
        if (map.has(item)) {
            if (stack.pop() !== map.get(item)) return false;
        } else {
            stack.push(item);
        }
    }
    return !stack.length;
};