/**
 * 重试函数，失败时延迟重试
 * @param {Function} fn - 要执行的异步函数
 * @param {number} max - 最大重试次数
 * @param {number} delay - 重试延迟时间（毫秒）
 * @returns {Promise} - 成功时返回 fn() 的结果，失败时 reject
 */
async function retry(fn, max, delay) {
  let count = 0
  const sleep = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))
  while (count < max) {
    try {
      const res = await fn()
      return res
    } catch (error) {
      count++;
      if (count >= max) {
        return Promise.reject(error)
      }
      await sleep(delay);
    }
  }
}