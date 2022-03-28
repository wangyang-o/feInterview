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
 var isSymmetric = function (root) {
    const isSame = (left, right) => {
        if (left === null && right === null) return true;
        if (left === null && right || right === null && left) return false;
        if (left.val === right.val) {
            return isSame(left.left, right.right) && isSame(left.right, right.left);
        }
        return false;
    }
    return isSame(root, root);
};