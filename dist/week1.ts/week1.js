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
//function inside function concept
// Function to perform addition
function sum(a, b) {
    return a + b;
}
// Function to perform subtraction
function sub(a, b) {
    return a - b;
}
// Function to perform multiplication
function multi(a, b) {
    let res = a * b;
    return res;
}
// Function to perform division
function divide(a, b) {
    let res = a / b;
    return res;
}
// Function that takes two numbers and an arithmetic function
function airthmetic(a, b, airthmetica) {
    return airthmetica(a, b); // Call the arithmetic function and return its result
}
let result = airthmetic(12, 12, sum);
console.log(result); // Output: 144 (12 * 12)
//star patterns
// *
// **
// ***
function pattern1(rows) {
    for (let i = 0; i < rows; i++) {
        let stringptrn = "";
        for (let j = 0; j < i + 1; j++) {
            stringptrn = stringptrn + "*";
        }
        console.log(stringptrn);
    }
}
pattern1(5);
console.log("\n");
//pattern 2
// **
// ****
// ******
function pattern2(rows) {
    for (let i = 0; i < rows; i++) {
        let stringptrn = "";
        for (let j = 0; j < i + 1; j++) {
            stringptrn = stringptrn + "**";
        }
        console.log(stringptrn);
    }
}
pattern2(4);
