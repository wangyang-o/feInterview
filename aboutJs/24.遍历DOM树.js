// 遍历dom树
const root = document.getElementById('root');
const traverse = (root) => {
    const queue = [root];
    while(queue.length){
        const node = queue.shift();
        console.log(node.tagName, node.className);
        if(node.children.length){
            queue.push(...node.children);
        }
    }
}
    