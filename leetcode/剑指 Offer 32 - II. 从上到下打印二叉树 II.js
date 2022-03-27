/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
// 输入[3,9,20,null,null,15,7],输出[[3],[9,20],[15,7]]
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
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