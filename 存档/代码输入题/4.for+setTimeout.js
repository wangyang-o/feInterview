// 问：1.输入什么？
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// 答：1s后一起输出5个5
// 解析：首先变量 i 由var声明，这个变量就是全局变量，每次循环后都覆盖原来的i。由于js的事件循环机制，先执行完for后再执行的setTimeout，所以setTimeout在1s后输出5个5

// 问：2.如果setTimeout中的1000变为0呢？
// 答：同上，0s后一起输出5个5

// 问：怎么让他输出0,1,2,3,4
// 答：

/** 方式1 */
// for (var i = 0; i < 5; i++) {
//   ((j) => {
//     setTimeout(() => {
//       console.log(j);
//     }, j * 1000);
//   })(i);
// }
/** 方式2 */
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
/** setTimeout的第三个参数 */
for (var i = 0; i < 5; i++) {
  setTimeout(
    (j) => {
      console.log(j);
    },
    i * 1000,
    i
  );
}
