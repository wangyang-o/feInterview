async function retry(fn, times, interval) {
    let count = 0;
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    while (count < times) {
        try {
            return await fn();
        } catch (e) {
            count++;
            await sleep(interval);
        }
    }
    throw new Error('retry failed');
}
