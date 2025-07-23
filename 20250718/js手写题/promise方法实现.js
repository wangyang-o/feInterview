// all,有一个失败就reject
function promiseAll(arr) {
  return new Promise((reslove, reject) => {
    if (!Array.isArray(arr)) Promise.reject(new Error('must be an array'))
    const result = []
    let count = 0;
    arr.forEach((item, index) => {
      Promise.resolve(item).then(res => {
        result[index] = res
        count++
        if (count === arr.length) reslove(result)
      }, rej => reject(rej))
    });

  })
}

// rece,第一个成功就返回结果
function promiseRace(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) Promise.reject(new Error('must be an array'))
    arr.forEach((item, index) => {
      Promise.resolve(item).then(resolve, reject)
    });

  })
}
// allSettled,全部有结果在resolve
function promiseAllSettled(arr) {
  return new Promise((reslove, reject) => {
    if (!Array.isArray(arr)) Promise.reject(new Error('must be an array'))
    const result = []
    let count = 0;
    arr.forEach((item, index) => {
      Promise.resolve(item).then(res => {
        result[index] = { status: 'fulfilled', value: res }
      }, rej => {
        result[index] = { status: 'rejected', reason: rej }
      }).finally(() => {
        count++
        if (count === arr.length) reslove(result)
      })
    });

  })
}