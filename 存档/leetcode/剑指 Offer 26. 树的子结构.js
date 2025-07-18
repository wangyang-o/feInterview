/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function (A, B) {
    if (!A || !B) return false;
    const isSame = (A, B) => {
        if (B === null) return true;
        if (A === null) return false;
        if (A.val !== B.val) return false;
        return isSame(A.left, B.left) && isSame(A.right, B.right);
    }
 return isSame(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B);
};