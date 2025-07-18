function promiseAllSettled(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) reject([]);
        const result = [];
        let count = 0;
        let len = promises.length;
        promises.forEach((item, index) => {
            Promise.resolve(item).then(res => {
                result[index] = {
                    status: 'success',
                    res,
                };
                count++;
                if (count >= len) resolve(result);
            }, rej => {
                result[index] = {
                    status: 'error',
                    res,
                };
                count++;
                if (count >= len) resolve(result);
            })
        });
    });
}
function promiseAllSettled1(promises) {
    if (!Array.isArray(promises)) Promise.reject('Not an array');
    const success = promises.map(item => {
        return new Promise((resolve, reject) => {
            Promise.resolve(item).then(resolve, resolve);
        });
    })
    return Promise.all(success);
}
