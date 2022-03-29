class Event {
    constructor() {
        this.events = {};
    }
    on(name, fn) {
        if (this.event[name]) {
            this.event[name].push(fn);
        } else {
            this.event[name] = [fn];
        }
    }
    emit(name) {
        this.event[name] && this.event[name].forEach(fn => fn());
    }
    remove(name, callback) {
        if (this.event[name]) {
            this.event[name] = this.event[name].filter(fn => fn !== callback);
        }
    }
    once(name, callback) {
        const fn = () => {
            callback();
            this.remove(name, fn);
        }
        this.on(name, fn);
    }
}