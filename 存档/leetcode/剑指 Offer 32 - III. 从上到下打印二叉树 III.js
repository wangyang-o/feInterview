/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
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