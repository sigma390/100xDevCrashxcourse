"use strict";
const express = require('express'); //importing library
const app = express(); //creating app object
const port = 3000; //setting a port
app.use(middleware1); // call middleware
app.use(middleware2);
function middleware2(req, res, next) {
    res.send("Error from middleware 2");
}
function middleware1(req, res, next) {
    console.log("inside middleware " + req.headers.n1);
    next();
}
function calculateSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
//GET request
function handleReq(req, res) {
    // let cntr:number = req.query.n1; //user request handleing from url
    // to handle reuest from headers
    let cntr = req.headers.n1;
    let ans = "the sum is :" + calculateSum(cntr);
    res.send(ans);
}
//POST request
function createUser(req, res) {
    let usr = "HEY USER CREATED";
    res.send(usr);
}
// app.get('/handlesum', handleReq); //get request
app.post('/handlesum', handleReq); //post request
app.get('/create', createUser); //post request
function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
