// 257. 二叉树的所有路径
const binaryTreePaths = function (root) {
    const res = [];
    if (!root) return res;
    const dfs = (root, path) => {
        if (!root) return;
        path.push(root.val);
        if (!root.left && !root.right) {
            res.push(path.join('->'));
            path.pop();
            return;
        }
        dfs(root.left, path);
        dfs(root.right, path);
        path.pop();
    }
    dfs(root,[]);
    return res;
};