function foo() {
  console.log(this.bar);
}
var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = {
  bar: "bar3",
  foo: () => {
    console.log(this.bar);
  },
};
foo();
// bar1
// bar2
// bar3


function Person() {
  this.age = 0;
  setTimeout(function () {
    console.log(this.age);
  }, 1000);
}
var p = new Person();
