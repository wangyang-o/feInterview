// =======================开始=======================
// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
// 给定二叉树: [3, 9, 20, null, null, 15, 7],返回：[3, 9, 20, 15, 7]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const levelOrder = function (root) {
  // TODO
  // ...
};





// =======================结束=======================

// 以下为参考答案及解析：
// 解析：1.考察编码能力 2.数据结构二叉树相关,层序遍历
// 力扣：https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/


// 面试官可以根据实际情况，变化，扩展下列题：
// 剑指 Offer 32 - I. 从上到下打印二叉树 
// 1.从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
// 给定二叉树: [3, 9, 20, null, null, 15, 7],返回：[3, 9, 20, 15, 7]
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const levelOrder1 = function (root) {
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

// 剑指 Offer 32 - II. 从上到下打印二叉树 II
// 2.从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
// 输入[3,9,20,null,null,15,7],输出[[3],[9,20],[15,7]]
const levelOrder2 = function (root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
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
// 剑指 Offer 32 - III. 从上到下打印二叉树 III
// 请实现一个函数按照Z字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
const levelOrder3 = function (root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  let deep = 0;
  while (queue.length) {
    const arr = [];
    let len = queue.length;
    while (len--) {
      const node = queue.shift();
      arr[deep % 2 !== 0 ? 'unshift' : 'push'](node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(arr);
    deep++;
  }
  return res;
};