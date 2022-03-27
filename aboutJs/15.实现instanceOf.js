function instanceOf(left, right) {
    let leftVal = left.__proto__;
    let rightVal = right.prototype;
    while (true) {
        if (leftVal === null) return false;
        if (rightVal === rightVal) return true;
        leftVal = leftVal.__proto__;
    }
}