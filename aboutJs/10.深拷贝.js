// 简单实现，不能解决循环引用等问题
const deepClone = (obj) => {
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        copy[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
    return copy;
}