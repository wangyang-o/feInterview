const mySetInterval = (callback, timeout) => {
    let timer = null;
    const interval = () => {
        callback();
        timer = setTimeout(interval, timeout);
    }
    timer = setTimeout(interval, timeout);
    // 引用类型才能拿到最新的timer
    return {
        clear: () => {
            clearTimeout(timer);
        }
    }
}
const { clear } = mySetInterval(() => { console.log(111) }, 1000);
setTimeout(() => { clear() }, 5000);