
const a = [1, 2, 3, 4];
const b = [2, 3, 4, 5];
// 并集
const union = (a, b) => [...new Set([...a, ...b])];
// 交集
const intersection = (a, b) => [...a].filter(x => b.includes(x));
// 差集
const difference = (a, b) => [...a].filter(x => !b.includes(x));

console.log(union(a, b), '并集');
console.log(intersection(a, b), '交集');
console.log(difference(a, b), '差集');