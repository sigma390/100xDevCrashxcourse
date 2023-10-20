"use strict";
//Problem 1
function callbackk() {
    console.log("callback fxn is called");
}
function higherOrder(n1, callbackk) {
    setTimeout(callbackk, n1 * 1000);
}
let todayDATE = new Date();
let n1 = todayDATE.getUTCDate();
console.log(n1);
higherOrder(n1, callbackk);
