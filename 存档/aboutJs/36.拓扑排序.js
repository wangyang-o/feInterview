// 题目：
// 如下：是文件和它们之间的依赖关系，以及一个入口文件，要求按照依赖关系的顺序输出所有文件；
const files = {
  "a.js": ["b.js", "c.js"],
  "b.js": ["d.js"],
  "c.js": ["d.js", "e.js"],
  "d.js": ["e.js"],
  "e.js": [],
};

function topoSort(files) {
  const graph = {};
  const visited = {};
  const result = [];

  // 构建图
  for (const [file, deps] of Object.entries(files)) {
    graph[file] = deps;
    visited[file] = false;
  }

  const dfs = (node) => {
    if (visited[node]) return;
    visited[node] = true;
    for (const item of graph[node]) {
      dfs(item);
    }
    result.push(node);
  };

  for (const node of Object.keys(graph)) {
    if (!visited[node]) dfs(node);
  }
  return result;
}

console.log(topoSort(files));
