console.log(111);
p()
  .then((result) => {
    console.log(`p result:${result}`);
  })
  .catch((err) => {
    console.log(`p err :${err}`);
  });
p1()
  .then((result) => {
    console.log(`p1 result:${result}`);
  })
  .catch((err) => {
    console.log(`p1 err :${err}`);
  });
p2()
  .then((result) => {
    console.log(`p2 result:${result}`);
  })
  .catch((err) => {
    console.log(`p2 err :${err.message}`);
  });
function p() {
  return new Promise((resolve, reject) => {
    console.log(222);
    setTimeout(() => {
      console.log("async in p");
      reject("err in p");
      console.log("content after p reject");
    }, 200);
  });
}
function p1() {
  return new Promise((resolve, reject) => {
    console.log(333);
    setTimeout(() => {
      console.log("async in p1");
      resolve("resolev in p1");
      console.log("content after p1 resolve");
    }, 250);
  });
}
function p2() {
  return new Promise((resoleve, reject) => {
    console.log(444);
    setTimeout(() => {
      console.log("async in p2");
      return reject(new Error("p2error"));
      console.log("content after p2 return");
    }, 300);
  });
}
// 浏览器环境
//  111
//  222
//  333
//  444
//  async in p
//  content after p reject
//  p err :err in p
//  async in p1
//  content after p1 resolve
//  p1 result:resolev in p1
//  async in p2
//  p2 err :p2error
