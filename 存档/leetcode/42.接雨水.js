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
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                res++;
            } else {
                arr[i] = arr[i] - 1;
            }
        }
        _trap(arr);
    }
    _trap(height);
    return res;
};
// 双指针
const trap1 = height => {
    let count = 0;
    let [left, right] = [0, height.length - 1];
    let [leftMax, rightMax] = [0, 0];
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (leftMax < rightMax) {
            count += leftMax - height[left++];
        } else {
            count += rightMax - height[right--];
        }
    }
    return count;
};
console.log('a:', trap1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// console.log('a:', trap([4,2,0,3,2,5]));