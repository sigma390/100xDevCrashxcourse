"use strict";
// function
function calculatesum(a, b) {
    return a + b;
}
function calc(a, b, x) {
    if (x === "add") {
        return a + b;
    }
    else if (x === "sub") {
        return a - b;
    }
    else if (x === "div") {
        return a / b;
    }
    return a * b;
}
console.log(calc(1, 2, "mul"));
