class Subject {
  constructor() {
    this.observers = [];
  }
  add(observer) {
    this.observers.push(observer);
  }
  remove(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }
  notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`${this.name} update`);
  }
}

// 使用观察者模式
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.add(observer1);
subject.add(observer2);

subject.notify();
subject.remove(observer1);
subject.notify();
