// 异步任务调度器
class Scheduler {
    constructor(max) {
      // 最大可并发任务数
      this.max = max;
      // 当前并发任务数
      this.count = 0;
      // 阻塞的任务队列
      this.queue = [];
    }
  
    async add(fn) {
      if (this.count >= this.max) {
        // 若当前正在执行的任务，达到最大容量max
        // 阻塞在此处，等待前面的任务执行完毕后将resolve弹出并执行
        await new Promise(resolve => this.queue.push(resolve));
      }
      // 当前并发任务数++
      this.count++;
      // 使用await执行此函数
      const res = await fn();
      // 执行完毕，当前并发任务数--
      this.count--;
      // 若队列中有值，将其resolve弹出，并执行
      // 以便阻塞的任务，可以正常执行
      this.queue.length && this.queue.shift()();
      // 返回函数执行的结果
      return res;
    }
  }