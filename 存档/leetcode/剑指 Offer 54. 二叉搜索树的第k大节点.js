/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 二叉搜索树的中序遍历是递增，所以用逆向中序遍历。
 var kthLargest = function (root, k) {
    let res = undefined;
    const inOrder = (root) => {
        if (!root) return null;
        inOrder(root.right);
        if (!--k) return (res = root.val);
        inOrder(root.left);
    }
    inOrder(root);
    return res;
};