
storageSet = (key, data, expires) => {
    const values = {
        data,
        expires,
        preTime: new Date().getTime()
    }
    window.localStorage.setItem(key, JSON.stringify(values));
}
storageGet = (key) => {
    const values = JSON.parse(window.localStorage.getItem(key));
    const curTime = new Date().getTime();
    if (curTime - values?.preTime <= values?.expires) {
        return values.data;
    } else {
        window.localStorage.removeItem(key);
        return false;
    }
}

const expiresStorage = {
    storageSet,
    storageGet,
}

export default expiresStorage;
