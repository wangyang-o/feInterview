/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function (preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;
    const root = new TreeNode(preorder[0]);
    const index = inorder.indexOf(preorder[0]);
    // 分割中序
    const leftIn = inorder.slice(0, index + 1);
    const rightIn = inorder.slice(index + 1);
    // 分割前序
    const leftPre = preorder.slice(1,index+1);
    const rightPre = preorder.slice(index+1);
    
    root.left = buildTree(leftPre,leftIn);
    root.right = buildTree(rightPre,rightIn);
    return root;
};