// 方法一
const rightSideView = function (root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            const node = queue.shift();
            len === 0 && res.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

    }
    return res;
};
//  方法二
const rightSideView1 = function (root) {
    const res = [];
    const dfs = (root, deep = 0) => {
        if (!root) return;
        res[deep] = root.val;
        dfs(root.left, deep + 1);
        dfs(root.right, deep + 1);
    }
    dfs(root);
    return res;
};
