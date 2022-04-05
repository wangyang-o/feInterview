// 94. 二叉树的中序遍历 左根右
// 迭代
const inorderTraversal = function (root) {
    const res = [];
    const stack = [];
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            // 左
            cur = cur.left;
        }
        cur = stack.pop();
        // 根节点
        res.push(cur.val);
        // 右
        cur = cur.right;
    }
    return res;
}
// 递归 左根右
const inorderTraversal1 = function (root) {
    const res = [];
    const handle = (node) => {
        if (!node) return;
        // 左
        handle(node.left);
        // 根
        res.push(node.val);
        // 右
        handle(node.right);
    }
    handle(root);
    return res;
}
