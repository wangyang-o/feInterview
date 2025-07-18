/** 给一个递增的数组 a （元素可以有相同的值），含有 a.length 个元素，一个目标值 t, 求数组 a 中小于 t 的元素个数
    （请用最高效的算法实现，并注明时间复杂度）
    
    参数:  
    - a: 递增的数组
    - t: 目标值 t
    
    return 数组 a 中小于 t 的元素的个数
    
    例子:
        f([1, 3, 6, 6, 8, 12], 0) === 0  
        f([1, 3, 6, 6, 8, 12], 1) === 0  
        f([1, 3, 6, 6, 8, 12], 2) === 1  
        f([1, 3, 6, 6, 8, 12], 3) === 1  
        f([1, 3, 6, 6, 8, 12], 4) === 2  
        f([1, 3, 6, 6, 8, 12], 6) === 2  
        f([1, 3, 6, 6, 8, 12], 7) === 4  
        f([1, 3, 6, 6, 8, 12], 8) === 4  
        f([1, 3, 6, 6, 8, 12], 9) === 5  
        f([1, 3, 6, 6, 8, 12], 12) === 5  
        f([1, 3, 6, 6, 8, 12], 13) === 6  
*/

// 用二分查找
function f(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
     let  mid = (left + right) >> 1;
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
  console.log(f([1, 3, 6, 6,7, 8, 12], 7))
 