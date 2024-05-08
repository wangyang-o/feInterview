// 手写题，合并对象里面的数据，每一个对象中都有一个age和name属性，把age相同的name都合并到一起：
const fromArr = [
  { age: 30, name: "aaa" },
  { age: 28, name: "bbb" },
  { age: 30, name: "ccc" },
  { age: 30, name: "ddd" },
  { age: 27, name: "eee" },
  { age: 28, name: "fff" },
];
// 要求最终的结果
// const toArr = [
//     {age: 30, name: ['aaa', 'ccc', 'ddd']},
//     {age: 28, name: ['bbb', 'fff']},
//     {age: 27, name: ['eee']},
// ]
const temp = {};
fromArr.forEach((item) => {
  temp[item.age] = temp[item.age] || [];
  temp[item.age].push(item.name);
});
const res = Object.entries(temp).map(([age, name]) => ({ age, name }));
console.log(res);
