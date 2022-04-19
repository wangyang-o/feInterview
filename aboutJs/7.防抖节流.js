//防抖:一段时间内触发，重新计时，只执行最后一次。例子：百度搜索的联想
function debounce(fn, timeout) {
    let timer = null;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, timeout);
    }
}
// 节流:一段时间只执行一次，稀释作用，例子：onresize等
function throttle(fn, timeout) {
    let pre = 0;
    return (...args) => {
        let cur = new Date().getTime();
        if (cur - pre > timeout) {
            fn.apply(this, args);
            pre = cur;
        }
    }
}
// 
function throttle1(fn, delay) {
    let timer = null;
    return (...args) => {
        if (!timer) {
            timer = setTimeout(() => {
                fn(...args);
                timer = null;
            }, delay);
        }
    }
}