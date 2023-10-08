"use strict";
//sum program
function sumall(start, end) {
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum = sum + index;
    }
    return sum;
}
const start = 1, end = 100;
let res = sumall(start, end);
console.log(res);
//print patterns
