// 柯里化
function currying(fn, ...args) {
  return args.length >= fn.length
    ? fn(...args)
    : (...args1) => currying(fn, ...args, ...args1);
}
const add = (a, b, c) => a + b + c;
const curried = currying(add);
console.log(curried(2, 4)(3)); // 输出 6
