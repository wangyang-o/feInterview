function ajax(methods, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(methods, url);
        xhr.onreadystatechange = () => {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        }
        xhr.send();
    });
}