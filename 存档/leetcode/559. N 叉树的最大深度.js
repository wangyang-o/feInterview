/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function (root) {
    if (!root) return 0;
    let max = 0;
    root.children.forEach(item => {
        max = Math.max(maxDepth(item), max);
    })
    return max+1;
};