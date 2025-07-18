const compose = (...fns) => {
    return (arg) => {
        return fns.reduceRight((pre, cur) => {
            return cur(pre);
        }, arg);
    }
};
// 简化
// const compose = (...fns) => (arg) => fns.reduceRight((pre, cur) => cur(pre), arg);

const add = (x) => {
    return x + 1;
}
const multiply = (x) => {
    return x * 2;
}
const divide = (x) => {
    return x / 2;
}
console.log(compose(add, multiply, divide)(1));

const pipe = (...fns) => {
    return (arg) => {
        return fns.reduce((pre, cur) => {
            return cur(pre);
        }, arg);
    }
}
// const pipe = (...fns) => (arg) => fns.reduce((pre, cur) => cur(pre), arg);
