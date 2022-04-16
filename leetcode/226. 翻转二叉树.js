const reverseTree = (root) => {
    if (!root) return null;
    root.left = reverseTree(root.right);
    root.right = reverseTree(root.left);
    return root;
}