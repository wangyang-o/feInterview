

const currying = (fn, ...args) => {
  return args.length >= fn.length ? fn(...args) : (...args1) => currying(fn, ...args, ...args1);
}




// 设计一个sum函数，使其满足以下要求
function sum(...args) {
  const _f = (..._args) => sum(...args, ..._args)
  _f.sumOf = () => args.reduce((pre, cur) => pre + cur, 0)
  return _f
}

// console.log(sum(1, 2).sumOf()); // 返回 3
// console.log(sum(1, 2)(3).sumOf()); // 返回 6
// console.log(sum(1)(2, 3, 4).sumOf()); // 返回 10
console.log(sum(1, 2)(3, 4)(5).sumOf()); // 返回 15

// 实现add函数add(1,2)(3)  =>6

function add(...args) {
  const fn = (...args1) => add(...args, ...args1)
  fn.toString = function () {
    return args.reduce((total, curr) => total + curr)
  }
  return fn
}
console.log('add', add(1, 2)(3).toString())