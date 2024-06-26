// 层序遍历
const levalOrder = (root) => {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};

// [1,[2,3],[4,5,6,7]]
const levelOrder1 = (root) => {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const arr = [];
    let len = queue.length;
    while (len--) {
      const node = queue.shift();
      arr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(arr);
  }
  return res;
};

// [1,[3,2],[4,5,6,7]]
const levelOrder2 = (root) => {
  if (!root) return [];
  const res = [];
  const queue = [root];
  let deep = 0;
  while (queue.length) {
    const arr = [];
    let len = queue.length;
    while (len--) {
      const node = queue.shift();
      arr[deep % 2 ? "push" : "unshift"](node.val);
      // arr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    deep++;
    res.push(arr);
  }
  return res;
};

// 层序遍历
const level1 = (root) => {
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length) {
    const node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};

const level2 = (root) => {
  const res = [];
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    const arr = [];
    while (len--) {
      const node = queue.shift();
      arr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(arr);
  }
  return res;
};
const level3 = (root) => {
  const res = [];
  const queue = [root];
  let deep = 0;
  while (queue.length) {
    const len = queue.length;
    const arr = [];
    deep++;
    while (len--) {
      const node = queue.shift();
      arr[deep % 2 ? "push" : "unshift"](node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(arr);
  }
  return res;
};

// 实现call,apply,bind
Function.prototype.MyCall = function (context, ...args) {
  context = typeof context === "object" ? context : window;
  const MyCall = Symbol("MyCall");
  context[MyCall] = this;
  return context[MyCall](...args);
};

// const a = { name: "wangyang" };
// const b = {
//   name: "wangyang--b",
//   func: function () {
//     console.log(this.name);
//   },
// };
// b.func();
// b.func.MyCall(a);

const deepClone = (obj, cached = new Set()) => {
  const copy = Array.isArray(obj) ? [] : {};
  for (const key in ob) {
    if (obj.hasOwnProperty(key)) {
      if (typeof key === "object" && !cached.has(key)) {
        cached.add(key);
        copy[key] = deepClone(key, cached);
      } else {
        copy[key] = obj[key];
      }
    }
  }
  return copy;
};

// 柯里化

const curry = (fn, ...args) => {
  if (fn.length > args.length) {
    return (...args1) => {
      return curry(fn, ...args, ...args1);
    };
  }
  return () => {
    return fn(...args);
  };
};

const sum = (a, b, c, d) => {
  return a + b + c + d;
};
// console.log(curry(sum)(1)(2)(3)(4)());

/**
 *
 * @param {object} a
 * @param {object} b
 * @returns
 */
function _instanceOf(a, b) {
  let left = a.__proto__;
  while (left) {
    if (left === b.prototype) {
      return true;
    }
    left = left.__proto__;
  }
  return false;
}
class Animal {}

class Dog extends Animal {}

const animal = new Animal();
const dog = new Dog();

console.log(_instanceOf(animal, Animal)); // true
console.log(_instanceOf(dog, Dog)); // true
console.log(_instanceOf(dog, Animal)); // true
console.log(_instanceOf(animal, Dog)); // false
