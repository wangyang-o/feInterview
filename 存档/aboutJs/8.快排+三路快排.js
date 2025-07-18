const quickSort = (arr = []) => {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  for (const item of arr) {
    if (item <= pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
// console.log(quickSort([3, 5, 7, 7, 2, 3, 6, 8, 0, 76, 3, 3, 5, 67, 73, 5, 56]));

const threeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const left = [];
  const mid = [];
  const right = [];
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];
  for (const item of arr) {
    if (item < pivot) {
      left.push(item);
    } else if (item === pivot) {
      mid.push(item);
    } else if (item > pivot) {
      right.push(item);
    }
  }
  return [...threeSort(left), ...mid, ...threeSort(right)];
};
console.log(
  "threeSort",
  threeSort([3, 5, 7, 7, 2, 3, 6, 8, 0, 76, 3, 3, 5, 67, 73, 5, 56])
);
