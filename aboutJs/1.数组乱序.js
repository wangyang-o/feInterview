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

console.log(handleArr1([1, 2, 3, 4, 5, 6, 7]));