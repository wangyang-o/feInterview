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
 * @return {boolean}
 */
 var isBalanced = function (root) {
    let flag = true;
    const maxDeep = (root) => {
        if (!root) return 0;
        const leftMax = maxDeep(root.left);
        const rightMax = maxDeep(root.right);
        if (Math.abs(leftMax - rightMax) > 1) {
            flag = false;
        }
        return Math.max(leftMax, rightMax) + 1;
    }
    maxDeep(root);
    return flag;
};