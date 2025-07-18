const p = new Promise((resolve) => {
  console.log(0);
  resolve();
});
p.then((res) => {
  console.log(1);
})
  .then((res) => {
    console.log(2);
  })
  .then((res) => {
    console.log(3);
  });
p.then((res) => {
  console.log(4);
});
p.then((res) => {
  console.log(5);
});
p.then((res) => {
  console.log(6);
});
// 输出：0，1，4，5，6，2，3

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
// 输出：
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
