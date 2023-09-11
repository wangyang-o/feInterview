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
      return await fn();
    } catch (e) {
      count++;
      await sleep(delay);
    }
  }
  throw new Error("retry failed");
}

