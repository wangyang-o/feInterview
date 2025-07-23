// 防抖，连续触发，只触发最后一次，比如，百度搜索
const debounce = (fn, delay) => {
  let timer = undefined
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args)
    }, delay);
  }
}
// 节流，对事件触发进行稀释，一段时间内只执行最后一次，比如滚动中执行事件触发
const throttle = (fn, delay) => {
  let timer = undefined;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args)
        timer = undefined
      }, delay);
    }
  }
}

const throttle1 = (fn, delay) => {
  let pre = 0
  return (...args) => {
    const cur = new Date().getTime()
    if (cur - pre > delay) {
      fn(...args)
      pre = cur
    }
  }
}