Function.prototype.myCall = function (context, ...args) {
    context = typeof context === 'object' ? context : window;
    const key = Symbol('myCall');
    context[key] = this;
    return context[key](...args);
}
Function.prototype.myApply = function (context, args) {
    context = typeof context === 'object' ? context : window;
    const key = Symbol('myApply');
    context[key] = this;
    return context[key](...args);
}
Function.prototype.myBind = function (context, ...args) {
    context = typeof context === 'object' ? context : window;
    const key = Symbol('myBind');
    context[key] = this;
    return (...args1) => { 
        context[key](...args,...args1);
     };
}
Function.bind()