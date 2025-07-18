// =======================开始=======================

/** 给一个递增的数组 a （元素可以有相同的值），含有 a.length 个元素，一个目标值 t, 求数组 a 中小于 t 的元素个数
    （请用最高效的算法实现，并注明时间复杂度）
    
    参数:  
    - a: 递增的数组
    - t: 目标值 t
    
    return 数组 a 中小于 t 的元素的个数
    
    例子:
        f([1, 3, 6, 6, 8, 12], 0) => 结果 0  
        f([1, 3, 6, 6, 8, 12], 1) => 结果 0  
        f([1, 3, 6, 6, 8, 12], 2) => 结果 1  
        f([1, 3, 6, 6, 8, 12], 3) => 结果 1  
        f([1, 3, 6, 6, 8, 12], 4) => 结果 2  
        f([1, 3, 6, 6, 8, 12], 6) => 结果 2  
        f([1, 3, 6, 6, 8, 12], 7) => 结果 4  
        f([1, 3, 6, 6, 8, 12], 8) => 结果 4  
        f([1, 3, 6, 6, 8, 12], 9) => 结果 5  
        f([1, 3, 6, 6, 8, 12], 12) => 结果 5  
        f([1, 3, 6, 6, 8, 12], 13) => 结果 6  
*/

// 函数类型：(arr: number[], target: number)=》 number
function find(arr, target) {
  // TODO
  // ...
}
console.log(find([1, 3, 6, 6, 8, 12], 0));
console.log(find([1, 3, 6, 6, 8, 12], 1));
console.log(find([1, 3, 6, 6, 8, 12], 2));
console.log(find([1, 3, 6, 6, 8, 12], 3));
console.log(find([1, 3, 6, 6, 8, 12], 4));
console.log(find([1, 3, 6, 6, 8, 12], 6));
console.log(find([1, 3, 6, 6, 8, 12], 7));
console.log(find([1, 3, 6, 6, 8, 12], 8));
console.log(find([1, 3, 6, 6, 8, 12], 9));
console.log(find([1, 3, 6, 6, 8, 12], 12));
console.log(find([1, 3, 6, 6, 8, 12], 13));


// =======================结束=======================






// 以下为参考答案及解析：
// 解析：1.考察编码能力 2.二分查找的应用
// 用二分查找
function find(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return left;
}
// 面试评价可以分2档：
// 1.暴力法
// 2.二分查找