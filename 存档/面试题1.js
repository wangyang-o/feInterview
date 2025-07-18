// =======================开始=======================
async function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

/** 执行任务 a 获取结果，返回是否成功*/
async function task_a() {
    await delay(100);
    const valid = Math.random() > 0.5;
    console.log("A", valid ? "A success" : "A error");
    return valid ? "A success" : Promise.reject("A error");
}

/** 执行任务 b 获取结果，返回是否成功 */
async function task_b() {
    await delay(200);
    const valid = Math.random() > 0.5;
    console.log("B", valid ? "B success" : "B error");
    return valid ? "B success" : Promise.reject("B error");
}

// 条件1.并行开始两个任务，task_a 和 task_b 任意一个完成立即返回结果数据, 不等待另一个任务（短路）
// 条件2.如果第一个失败，需要看第二个(后续)任务是否成功，成功则需要返回，只有都不成功才返回失败(reject)
async function a_or_b() {
    // TODO: 请实现该函数
    // ...
}
const clgResult = async () => {
    try {
        res = await a_or_b([task_a, task_b])
        console.log('最终结果：', res)
    } catch (error) {
        console.log(error)
    }
}
clgResult();

// =======================结束=======================






// 以下为参考答案及解析：
// 解析：考察Promise相关 => Promise.any
async function a_or_b(arr) {
    // todo: 请实现该函数
    return new Promise((resolve, reject) => {
        let count = 0;
        arr.forEach(async (item) => {
            try {
                const res = await item();
                // 任意一个完成且满足要求后立即 返回 true 且不等待另一个任务
                resolve(res);
            } catch (error) {
                count++;
                if (count === arr.length) reject('all error');
            }
        });
    });
}

// 考察面试者时，可以先写Promise.rice,即，满足先条件一。
// 面试评价可以分三档：
//     1.只写出条件1，Promise.race
//     2.写出条件1，2，Promise.any
//     3.能解决面试官提出的扩展：实现Promise.All，并能保证拿到的返回，顺序正确

// 附：Promise.race，Promise.all代码：

function promiseRace(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) reject('not array!');
        arr.forEach(item => {
            Promise.resolve(item).then(resolve, reject);
        });
    });
}
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
