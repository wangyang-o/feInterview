Array.prototype.myMap = function (fn, thisArg) {
    return (thisArg || this).reduce((pre, cur, i, arr) => {
        pre.push(fn.call(thisArg, cur, i, arr))
        return pre;
    }, [])
}

console.log([1, 2, 3, 4].myMap((item, i, arr) => {
    return item * 2;
}, [2, 3, 4]))