// v2.0,解决了循环应用的问题
const deepClone = (obj, cached = new Set()) => {
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && !cached.has(obj[key])) {
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

