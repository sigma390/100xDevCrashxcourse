"use strict";
const express = require('express');
const app = express();
const port = 3000;
function calculateSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
//GET request
function handleReq(req, res) {
    let cntr = req.query.n1; //user request handleing
    let ans = "the sum is :" + calculateSum(cntr);
    res.send(ans);
}
//POST request
function createUser(req, res) {
    let usr = "HEY USER CREATED";
    res.send(usr);
}
app.get('/handlesum', handleReq); //get request
app.get('/create', createUser); //post request
function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
