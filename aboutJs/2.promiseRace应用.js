// 一个是定义一个myFetch方法,实现timeout秒服务端没返回的话，就报错
function myFetch(params, timeout) {
    return Promise.race([new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, timeout);
    }), fetch(params)])
}
function myFetch(params, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, timeout);
        fetch(params).then(res => {
            resolve(res);
        })
    });
}