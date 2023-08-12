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

const a = { name: "wangyang" };
const b = {
  name: "wangyang--b",
  func: function () {
    console.log(this.name);
  },
};
b.func();
b.func.MyCall(a);

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
