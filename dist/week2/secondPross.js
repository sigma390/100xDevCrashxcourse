"use strict";
function logResponseBody(jsonBody) {
    console.log(jsonBody);
}
let sendObj = {
    method: "GET"
};
function CallbackFN(result) {
    result.json().then(logResponseBody);
}
fetch("http://localhost:3000/handleSum?n1=5", sendObj).then(CallbackFN);
