// 对象扁平化
// 输入：
// {
//     a: 'a',
//     b: [1, { c: true }, [3]],
//     d: { e: undefined, f: 3 },
//     g: null,
// }
// 输出：
// {
//     "a": "a",
//     "b.0": 1,
//     "b.1.c": true,
//     "b.2.0": 3,
//     "d.f": 3
// }

const flattenObj = (obj, prefix = "") => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const newPrefix = prefix ? `${prefix}.${key}` : key;
    // 别使用typeof,会放过null
    if (value instanceof Object) {
      Object.assign(result, flattenObj(value, newPrefix));
    } else if (![null, undefined].includes(value)) {
      result[newPrefix] = value;
    }
  }
  return result;
};
const input = {
  a: "a",
  b: [1, { c: true }, [3]],
  d: { e: undefined, f: 3 },
  g: null,
};

const flattened = flattenObj(input);
console.log(flattened);
