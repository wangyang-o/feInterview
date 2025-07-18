/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
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
        res.unshift(arr);
    }
    return res;
};