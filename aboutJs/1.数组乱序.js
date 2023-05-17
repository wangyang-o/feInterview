// 数组乱序
function handleArr(arr) {
    const newArr = [];
    newArr.length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        while (i == index || newArr[index]) {
            index = Math.floor(Math.random() * arr.length);
        }
        newArr[index] = arr[i];
    }
    return newArr;
}

// 数组乱序
function handleArr1(arr) {
    const newArr = [];
    const len = arr.length;
    while (newArr.length < len) {
        let index = Math.floor(Math.random() * (arr.length - 1));
        newArr.push(arr.splice(index, 1)[0]);
    }
    return newArr;
}
function shuffleArray(array) {
  // 遍历数组
  for (let i = array.length - 1; i > 0; i--) {
    // 生成随机索引
    const j = Math.floor(Math.random() * (i + 1));

    // 交换当前元素和随机位置的元素
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

console.log(handleArr1([1, 2, 3, 4, 5, 6, 7]));