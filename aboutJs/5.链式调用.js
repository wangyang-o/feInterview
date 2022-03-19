// js链式调用
function arrange(name) {
    this.name = name;
    this.queue = [];
  
    this.execute = () => {
      const fn = () => {
        console.log(`${this.name} is notified!`)
        this.next();
      }
      this.queue.push(fn);
      return this;
  
    }
    this.dosth = (data) => {
      const fn = () => {
        console.log(`start to ${data}`);
        this.next();
      }
      this.queue.push(fn);
      return this;
    }
    this.await = (time) => {
      const fn = () => {
        setTimeout(() => {
          console.log(`等待 ${time}秒`);
          this.next();
        }, time * 1000);
      }
      this.queue.push(fn);
      return this;
    }
    this.awaitFirst = (time) => {
      const fn = () => {
        setTimeout(() => {
          console.log(`awaitFirst等待 ${time}秒`);
          this.next();
        }, time * 1000);
      }
      this.queue.unshift(fn);
      return this;
    }
    this.next = () => {
      const fn = this.queue.shift();
      fn && fn();
    }
    Promise.resolve().then(()=>{
        this.next();
    });
    return this;
  }
  new arrange('william').dosth('push').awaitFirst(1).await(2).execute();