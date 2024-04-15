// 柯里化
function currying(fn, ...args) {
  return args.length >= fn.length
    ? fn(...args)
    : (...args1) => currying(fn, ...args, ...args1);
}
const add = (a, b, c) => a + b + c;
const curried = currying(add);
console.log("curried", curried(2, 4)(3)); // 输出 6

// 设计一个sum函数，使其满足以下要求
function sum(...args) {
  console.log(args);
  // sum函数内定义的链式函数f
  const f = (...moreArgs) => sum(...args, ...moreArgs);
  // 链式函数f的sumOf方法
  f.sumOf = () => args.reduce((acc, curr) => acc + curr);

  return f;
}

// console.log(sum(1, 2).sumOf()); // 返回 3
// console.log(sum(1, 2)(3).sumOf()); // 返回 6
// console.log(sum(1)(2, 3, 4).sumOf()); // 返回 10
console.log(sum(1, 2)(3, 4)(5).sumOf()); // 返回 15
