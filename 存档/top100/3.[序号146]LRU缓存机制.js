/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cached = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cached.has(key)) {
    const value = this.cached.get(key);
    this.cached.delete(key);
    this.cached.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.cached.delete(key);
  this.cached.set(key, value);
  if (this.cached.size > this.capacity) {
    this.cached.delete(this.cached.keys().next().value);
  }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
