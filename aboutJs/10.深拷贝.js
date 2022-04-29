const deepClone = (obj, cached = new Set()) => {
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 如果是对象，并且缓存中没有改对象，才进行深拷贝
            if (typeof obj[key] === 'object' && !cached.has(obj[key])) {
                // 把对象加入缓存中
                cached.add(obj[key]);
                copy[key] = deepClone(obj[key], cached);
            } else {
                copy[key] = obj[key];
            }
        }
    }
    return copy;
}

const obj = {
    name: 'william',
    age: 18,
    address: {
        city: 'beijing',
        street: 'xizhimen'
    },
    hobbies: ['basketball', 'football'],
}
obj.family = obj;

console.log(obj);
const copy = deepClone(obj);
console.log(copy);
copy.name = '梨花';
console.log(obj);
console.log(copy);

