// js链式调用
class Arrange {
  constructor(name) {
    this.name = name;
    this.queue = [];
    // 等待同步代码执行完成
    Promise.resolve().then(() => {
      this.next();
    });
  }
  next() {
    const fn = this.queue.shift();
    fn && fn();
  }
  dosth(param) {
    const fn = () => {
      console.log(param);
      this.next();
    };
    this.queue.push(fn);
    return this;
  }
  awaitFirst(timeout) {
    const fn = () => {
      setTimeout(() => {
        console.log("awaitFirst", timeout);
        this.next();
      }, timeout);
    };
    this.queue.unshift(fn);
    return this;
  }
  await(timeout) {
    const fn = () => {
      setTimeout(() => {
        console.log("await", timeout);
        this.next();
      }, timeout);
    };
    this.queue.push(fn);
    return this;
  }
  execute() {
    const fn = () => {
      console.log("execute");
      this.next();
    };
    this.queue.push(fn);
    return this;
  }
}
new Arrange("william").dosth("push").awaitFirst(1000).await(2000).execute();

// 方法二
class Chains {
  task = Promise.resolve();
  eat() {
    this.task = this.task.then(() => {
      console.log("eat");
    });
    return this;
  }
  work() {
    this.task = this.task.then(() => {
      console.log("work");
    });
    return this;
  }
  sleep(delay) {
    this.task = this.task.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("sleep");
          resolve();
        }, delay);
      });
    });
    return this;
  }
}
// const chain = () => new Chains('joy');
// chain().eat().sleep(1000).work();
