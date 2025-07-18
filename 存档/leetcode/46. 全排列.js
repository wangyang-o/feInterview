// 46. 全排列
// 时间复杂度
var permute = function (nums) {
    let res = [];
    let len = nums.length;
    const dfs = (path) => {
        if(path.length === len) {
            res.push([...path]);
            return;
        }
        for(let i = 0; i < len; i++) {
            if(path.includes(nums[i])) continue;
            path.push(nums[i]);
            dfs(path);
            path.pop();
        }
    }
    dfs([]);
    return res;
};


