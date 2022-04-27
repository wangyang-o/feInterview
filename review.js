// 层序遍历
const levalOrder = (root) => {
    if (!root) return [];
    const res = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        res.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return res;
}

// [1,[2,3],[4,5,6,7]]
const levelOrder1 = (root) => {
    if (!root) return [];
    const res = [];
    const queue = [root];
    while (queue.length) {
        const arr = [];
        let len = queue.length;
        while (len--) {
            const node = queue.shift();
            arr.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(arr);
    }
    return res;
}

// [1,[3,2],[4,5,6,7]]
const levelOrder2 = (root) => {
    if (!root) return [];
    const res = [];
    const queue = [root];
    let deep = 0;
    while (queue.length) {
        const arr = [];
        let len = queue.length;
        while (len--) {
            const node = queue.shift();
            arr[deep % 2 ? 'push' : 'unshift'](node.val);
            // arr.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        deep++;
        res.push(arr);
    }
    return res;
}