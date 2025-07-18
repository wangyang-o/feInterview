Array.prototype.myFlat = function (deep = Infinity) {
    const arr = this;
    if (deep === 0) {
        return arr;
    }
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? cur.myFlat(--deep) : cur);
    }, [])
}
console.log([[[[1], 2], 3], 8].myFlat());