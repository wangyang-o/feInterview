// 大数相加
// 事例：
// add(123456789, 987654321)
// 输出：
// 123456789 + 987654321 = 1111111110

const add = (a, b) => {
    const num1 = a.split('').reverse();
    const num2 = b.split('').reverse();
    const len = Math.max(num1.length, num2.length);
    let flag = 0;
    let res = '';
    for (let i = 0; i < len; i++) {
        const sum = Number(num1[i] || 0) + Number(num2[i] || 0) + flag;
        res = sum % 10 + res;
        flag = sum >= 10 ? 1 : 0;
    }
    if (flag) {
        res = flag + res;
    }
    return res;
}
console.log(add('10000000000000000001', '99999999999999999999'));