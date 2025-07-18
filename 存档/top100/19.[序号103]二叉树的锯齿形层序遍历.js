/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  let deep = 0;
  while (queue.length) {
    const arr = [];
    let len = queue.length;
    while (len--) {
      const node = queue.shift();
      arr[deep % 2 ? "unshift" : "push"](node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    deep++;
    res.push(arr);
  }
  return res;
};
