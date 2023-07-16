var length = 10;
function fn() {
  return this.length + 1;
}
var obj1 = {
  length: 5,
  test1: function () {
    return fn();
  },
};
obj1.test2 = fn;
obj1.test1.call(); //  11
obj1.test1(); // 11
obj1.test2.call(); // 11
obj1.test2(); // 6
