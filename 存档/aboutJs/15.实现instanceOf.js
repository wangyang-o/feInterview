function instanceOf(left, right) {
    let leftVal = left.__proto__;
    let rightVal = right.prototype;
    while (true) {
        if (leftVal === null) return false;
        if (rightVal === rightVal) return true;
        leftVal = leftVal.__proto__;
    }
}

/**
 *
 * @param {object} a
 * @param {object} b
 * @returns
 */
function _instanceOf(a, b) {
  let left = a.__proto__;
  while (left) {
    if (left === b.prototype) {
      return true;
    }
    left = left.__proto__;
  }
  return false;
}
class Animal {}

class Dog extends Animal {}

const animal = new Animal();
const dog = new Dog();

console.log(_instanceOf(animal, Animal)); // true
console.log(_instanceOf(dog, Dog)); // true
console.log(_instanceOf(dog, Animal)); // true
console.log(_instanceOf(animal, Dog)); // false