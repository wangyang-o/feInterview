// 实现 [name, age] = { name: "tom", a: 23 };

Object.prototype[Symbol.iterator] = function () {
  return Object.values(this)[Symbol.iterator]();
};

const [name, age] = { name: "tom", a: 23 };
console.log(name, age);
