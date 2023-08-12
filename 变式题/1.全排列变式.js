// fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']

const fn = (arr) => {
  const res = [];
  const len = arr.length;
  const dfs = (path = [], curr) => {
    if (path.length === len) {
      res.push(path.join(""));
      return;
    }
    for (let i = 0; i < arr[curr].length; i++) {
      path.push(arr[curr][i]);
      dfs(path, curr + 1);
      path.pop();
    }
  };
  dfs([], 0);
  return res;
};
console.log(fn([['a', 'b'], ['n', 'm'], ['0', '1']]))