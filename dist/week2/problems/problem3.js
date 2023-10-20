"use strict";
//uuse of filter fxn in ts
function filterArr(givenArr, callback) {
    function xyz(element, index, givenArr) {
        if (callback(element) == true) {
            return true;
        }
        else {
            return false;
        }
    }
    return givenArr.filter(xyz);
}
function iseven(element) {
    if ((element % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
function isodd(element) {
    if ((element % 2) != 0) {
        return true;
    }
    else {
        return false;
    }
}
let givenArrr = [1, 2, 3, 4, 5, 6];
let evnArr = filterArr(givenArrr, iseven);
let oddArr = filterArr(givenArrr, isodd);
console.log(evnArr);
console.log(oddArr);
