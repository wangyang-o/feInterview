/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param string1 string字符串
 * @param string2 string字符串
 * @return bool布尔型
 */
function isGoodFriends(string1, string2) {
  // write code here
  if (string1 === string2) {
    return false;
  } else {
    const a = string1.split("").sort();

    const b = string2.split("").sort();

    console.log(a, b);
    return a === b;
  }
}
console.log("isGoodFriends()"), isGoodFriends("cmbchina", "ccanbmhi");

try {
} catch (error) {}
