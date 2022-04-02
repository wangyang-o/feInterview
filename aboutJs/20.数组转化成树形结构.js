let data = [
    { id: 0, pid: -1, name: "面试" },
    { id: 1, pid: 0, name: "计算机基础知识及原理" },
    { id: 2, pid: 0, name: "前端技能" },
    { id: 3, pid: 0, name: "综合素质" },
    { id: 4, pid: 1, name: "编码" },
    { id: 5, pid: 1, name: "操作系统" },
    { id: 6, pid: 1, name: "网络" },
    { id: 7, pid: 1, name: "数据结构" },
    { id: 8, pid: 2, name: "js" },
    { id: 9, pid: 2, name: "异步" },
    { id: 10, pid: 2, name: "项目" },
    { id: 11, pid: 3, name: "学习能力" },
    { id: 12, pid: 3, name: "解决问题能力" },
];
// 请实现这个函数，要求时间复杂度 O(n)
// （可以直接修改结点列表 data 中的各个结点，如增加 children 属性）
function build(list, rootValue = -1) {
    let arr = [];
    list.forEach(item => {
        if (item.pid === rootValue) {
            // 找到之后 就要去找 item 下面有没有子节点
            const children = build(list, item.id)
            if (children.length) {
                // 如果children的长度大于0 说明找到了子节点
                item.children = children
            }
            arr.push(item) // 将内容加入到数组中
        }
    })
    return arr;
}
console.log(JSON.stringify(build(data),null,2));