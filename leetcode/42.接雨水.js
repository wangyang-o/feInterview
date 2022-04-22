// 自己想的，类似于俄罗斯方块的想法，会超时
var trap = function (height) {
    let res = 0;
    const _trap = (height) => {
        let left = 0;
        let right = height.length - 1;
        while (left < right && height[left] === 0) left++;
        while (left < right && height[right] === 0) right--;
        const arr = height.slice(left, right + 1);
        if (arr.length < 3) return;
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                res++;
                console.log(res);
            } else {
                arr[i] = arr[i] - 1;
            }
        }
        _trap(arr);
    }
    _trap(height);
    return res;
};

console.log('a:', trap([2,0,2]));
// console.log('a:', trap([4,2,0,3,2,5]));