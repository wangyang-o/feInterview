// 柯里化
function currying(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args);
    }
    return (...args1) => {
        currying(fn, ...args, ...args1);
    }
}