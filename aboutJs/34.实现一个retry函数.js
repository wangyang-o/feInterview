/**
 *
 * @param {Function} fn
 * @param {number} max
 * @param {*} delay
 * @returns
 */
async function retry(fn, max, delay) {
  let count = 0;
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  while (count < max) {
    try {
      const res = await fn();
      return res;
    } catch (error) {
      await sleep(delay);
    }
  }
  return Promise.reject(new Error("retry failed"));
}
