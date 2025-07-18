var LRUCache = function (capacity) {
    this.cached = new Map();
    this.capacity = capacity;
};
LRUCache.prototype.get = function (key) {
    if (this.cached.has(key)) {
        const value = this.cached.get(key);
        this.cached.delete(key);
        this.cached.set(key, value);
        return value;
    }
    return -1;
};
LRUCache.prototype.put = function (key, value) {
    this.cached.delete(key);
    this.cached.set(key, value);
    if (this.cached.size > this.capacity) {
        this.cached.delete(this.cached.keys().next().value);
    }
};
