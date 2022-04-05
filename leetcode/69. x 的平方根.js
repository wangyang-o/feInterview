// 69. x 的平方根 
const mySqrt = (x) => {
    let left = 0;
    let right = x;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid <= x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}