
const add = (a, b) => {
  const str1 = a.split('').reverse();
  const str2 = b.split('').reverse();
  const maxLen = Math.max(str1.length, str2.length)
  let result = []
  let flag = false
  for (let i = 0; i < maxLen; i++) {
    let total = flag ? Number(str1[i] || 0) + Number(str2[i] || 0) + 1 : Number(str1[i] || 0) + Number(str2[i] || 0)
    if (total >= 10) {
      flag = true
      total = total - 10
    } else {
      flag = false
    }
    result.push(total)
  }
  return result.reverse().join('')
}

console.log('add==>代码执行：', add('12345678', '22222222'), '正确结果：', 12345678 + 22222222)