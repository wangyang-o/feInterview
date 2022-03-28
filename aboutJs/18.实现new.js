function myNew(constructor, ...args) {
    // 将构造函数的原型绑定到新创的对象实例上
    const obj = Object.create(constructor.prototype);
    //  执行构造函数
    const res = con.call(obj, ...args);
    return res && res instanceof Object ? res : obj;
}


