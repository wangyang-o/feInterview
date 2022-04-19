Array.prototype.myReduce = function (callback, initialValue) {
    let result = initialValue ? initialValue : this[0];
    for (let i = initialValue ? 0 : 1; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

console.log([1, 2, 3, 4, 5].myReduce((a, b) => a + b,10));