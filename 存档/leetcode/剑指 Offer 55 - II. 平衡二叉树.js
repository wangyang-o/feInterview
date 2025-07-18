/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function (root) {
    let flag = true;
    const maxdeep = (root) => {
        if (!root) return 0;
        const maxLeft = maxdeep(root.left);
        const maxRight = maxdeep(root.right);
        if (Math.abs(maxLeft - maxRight) > 1) {
            flag = false;
            return;
        }
        return Math.max(maxLeft, maxRight) + 1;
    }
    maxdeep(root);
    return flag;
};