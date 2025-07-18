// 前序遍历 根左右
//  迭代
const preorderTraversal = function (root) {
    const res = [];
    const stack = [];
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            // 根
            res.push(cur.val);
            stack.push(cur);
            // 左
            cur = cur.left;
        }
        cur = stack.pop();
        // 右
        cur = cur.right;
    }
    return res;
}
// 递归
const preorderTraversal1 = function (root) {
    const res = [];
    const handle = (node) => {
        if (!node) return;
        // 根
        res.push(node.val);
        // 左
        handle(node.left);
        // 右
        handle(node.right);
    }
    handle(root);
    return res;
}