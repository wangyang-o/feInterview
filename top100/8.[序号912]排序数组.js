// 快排

function sortArray(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const pivotIndex = Math.floor(nums.length / 2);
  const pivotValue = nums[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    nums[i] < pivotValue ? left.push(nums[i]) : right.push(nums[i]);
  }

  return [...sortArray(left), pivotValue, ...sortArray(right)];
}

// 三路快排
function threeSortArray(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const pivotIndex = Math.floor(Math.random() * nums.length);
  const pivotValue = nums[pivotIndex];
  const left = [];
  const right = [];
  const mid = [];

  for (const num of nums) {
    if (num < pivotValue) {
      left.push(num);
    } else if (num > pivotValue) {
      right.push(num);
    } else {
      mid.push(num);
    }
  }

  return [...sortArray(left), ...mid, ...sortArray(right)];
}
