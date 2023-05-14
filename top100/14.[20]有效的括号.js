/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) return false;
  const stack = [];
  const map = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  for (const item of s) {
    if (Object.keys(map).includes(item)) {
      stack.push(item);
    } else {
      const key = stack.pop();
      if (map[key] !== item) return false;
    }
  }
  return stack.length === 0;
};
