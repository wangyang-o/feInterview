
class Scheduler {
  constructor(max) {
    this.max = max
    this.queue = []
    this.count = 0
  }
  async add(fn) {
    if (this.count >= this.max) {
      await new Promise(resolve => this.queue.push(resolve))
    }
    this.count++;
    const res = await fn()
    this.count--
    this.queue.length && this.queue.shift()()
    return res
  }
}

const scheduler = new Scheduler(2);

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const addTask = (time, order) => {
  scheduler
    .add(() => timeout(time))
    .then((res) => console.log(`task ${order} done`));
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
// max=2时
// task 2 done
// task 3 done
// task 1 done
// task 4 done