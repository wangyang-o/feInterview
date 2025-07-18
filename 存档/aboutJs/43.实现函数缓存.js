const memoize = function (func, content) {
  let cache = Object.create(null);
  content = content || this;
  return (...key) => {
    if (!cache[key]) {
      cache[key] = func.apply(content, key);
    }
    return cache[key];
  };
};
const add = (a, b) => a + b;
const calc = memoize(add);
const num1 = calc(100, 200);
const num2 = calc(100, 200); // 缓存得到的结果
