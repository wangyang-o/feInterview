

// reduce实现
Array.prototype.customReduce = function (cb, initValue) {
  let res = initValue || this[0]
  for (let i = initValue ? 0 : 1; i < this.length; i++) {
    res = cb(res, this[i], this, i)
  }
  return res
}
console.log([1, 2, 3, 4, 5].customReduce((a, b) => a + b, 10));

// 数组扁平化
Array.prototype.customFlatten = function (deep = Infinity) {
  if (deep === 0) return this;
  return this.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? cur.customFlatten(--deep) : cur)
  }, [])

}
console.log([[[[1], 2], 3], 8].customFlatten());