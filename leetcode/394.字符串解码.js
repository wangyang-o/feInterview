// 事例： '3[a2[c]]'
/**
 * LeetCode 394字符串解码
 * @param {string} str
 */
const decodeString = (str) => {
  let currentStr = "";
  let currentNum = 0;
  const stack = [];
  for (const char of str) {
    // 是数字的话
    if (!isNaN(char)) {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "[") {
      stack.push([currentStr, currentNum]);
      currentNum = 0;
      currentStr = "";
    } else if (char === "]") {
      const [preStr, num] = stack.pop();
      currentStr = preStr + currentStr.repeat(num);
    } else {
      // 是字符
      currentStr = currentStr + char;
    }
  }
  return currentStr;
};
console.log(decodeString("3[a2[c]]"));
