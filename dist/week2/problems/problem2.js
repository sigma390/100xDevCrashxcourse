"use strict";
//use of map funxtion
function addd1(element) {
    return element + 1;
}
function mapArray(arrAy, calledFxn) {
    function callBEk(element, index, arrAy) {
        return calledFxn(arrAy[index]);
    }
    return arrAy.map(callBEk);
}
let arrAy = [1, 2, 3, 4];
let modArr = mapArray(arrAy, addd1);
console.log(modArr);
