function promiseRace(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) reject('not array!');
        arr.forEach(item => {
            Promise.resolve(item).then(res => resolve(res))
        });
    });
}