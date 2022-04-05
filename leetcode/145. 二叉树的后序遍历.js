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
 * @return {number[]}
 */
 const postorderTraversal = function (root) {
    const res = [];
    const stack = [];
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            // 根
            res.unshift(cur.val);
            // 右边
            cur = cur.right;
        }
        cur = stack.pop();
        // 左
        cur = cur.left;
    }
    return res;
}
// 递归 左右根
const postorderTraversal1 = function (root) {
    const res = [];
    const handle = (node) => {
        if (!node) return;
        // 左
        handle(node.left);
        // 右
        handle(node.right);
        // 根
        res.unshift(node.val);
    }
    handle(root);
}