/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function (inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;
    const mid = postorder[postorder.length - 1];
    const root = new TreeNode(mid);
    const midIndex = inorder.indexOf(mid);
    // 中序
    const inLeft = inorder.slice(0, midIndex + 1);
    const inRight = inorder.slice(midIndex + 1);
    // 后序
    const postLeft = postorder.slice(0, midIndex);
    const postright = postorder.slice(midIndex, postorder.length - 1);
    root.left = buildTree(inLeft, postLeft);
    root.right = buildTree(inRight, postright);
    return root;
};