let data = [
  { id: 0, pid: -1, name: "面试" },
  { id: 1, pid: 0, name: "计算机基础知识及原理" },
  { id: 2, pid: 0, name: "前端技能" },
  { id: 3, pid: 1, name: "编码" },
  { id: 4, pid: 2, name: "js" },
  { id: 5, pid: 3, name: "学习能力" },
];

// 请实现这个函数，要求时间复杂度 O(n)
// （可以直接修改结点列表 data 中的各个结点，如增加 children 属性）
// 方法一，递归。
function build(list, pid = -1) {
  let arr = [];
  list.forEach((item) => {
    // 如果当前结点的 pid 与传入的 pid 相等，则将当前结点添加到父结点的 children 属性中
    if (item.pid === pid) {
      // 如果有子节点，递归
      const children = build(list, item.id);
      if (children.length) {
        //   如果有子节点，添加到children属性
        item.children = children;
      }
      arr.push(item); // 将内容加入到数组中
    }
  });
  return arr;
}
// 方法二，迭代。
const buildTree = (list) => {
  const map = {};
  let rootNode = null;
  list.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });
  list.forEach((item) => {
    if (item.pid === -1) {
      rootNode = map[item.id];
    } else {
      const parent = map[item.pid];
      parent.children.push({ ...item });
    }
  });
  return rootNode;
};
const res = buildTree(data);
console.log(JSON.stringify(res, null, 2));

// 树形结构转换成数组
function treeToArray1(tree) {
  const arr = [];
  const stack = [tree];
  while (stack.length) {
    const node = stack.shift();
    arr.push(node);
    if (node.children.length) {
      stack.push(...node.children);
    }
  }
  return arr;
  // return tree.reduce((arr, item) => {
  //     const { children = [], ...args } = item;
  //     arr.push({ ...args },...treeToArray1(children));
  //     return arr;
  // }, []);
}
console.log(treeToArray1(build(data)));
