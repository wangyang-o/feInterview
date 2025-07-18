function promiseAll(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) reject('not array!');
        const result = [];
        const count = 0;
        arr.forEach((item, index) => {
            // 确保是promise
            Promise.resolve(item).then(res => {
                // 确保结果的顺序
                result[index] = res;
                count++;
                if (count === arr.length) resolve(result);
            }, rej => {
                reject(rej);
            });

        });
    });
}
