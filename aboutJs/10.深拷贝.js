const deepClone = (obj, cached = new Map()) => {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  // if (obj instanceof Function) return obj;
  if (obj instanceof Function) {
    return function () {
      return obj.apply(this, arguments);
    };
  }

  if (typeof obj !== "object" && obj === null) return obj;

  if (cached.has(obj)) return cached.get(obj);

  const copy = Array.isArray(obj) ? [] : {};
  cached.set(obj, copy);
  Object.keys(obj).forEach((key) => {
    copy[key] = deepClone(obj[key], cached);
  });
  return copy;
};

// 测试例子
const obj1 = {
  a: 1,
  b: [2, 3],
  c: { d: 4 },
  e: new Date(),
  f: /[a-z]/,
  g: function () {
    console.log("Function");
  },
};
obj1.h = obj1; // 添加循环引用

const obj2 = deepClone(obj1);
console.log(obj2);

// 测试循环引用是否正确处理
console.log(obj2.h === obj2); // true

console.log(obj1.g === obj2.g); //???

// 测试函数是否正确复制
obj2.g(); // "Function"
