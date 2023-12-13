"use strict";
const express = require('express'); //importing library
const bodyParser = require('body-parser'); //importing body parser library
const app = express(); //creating app object
const port = 3000; //setting a port
app.use(bodyParser.json()); //using middleware of body parser
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
    let cntr = req.query.n1; //req from query
    if (cntr < 1001) {
        let jsonob = {
            sum: calculateSum(cntr),
        };
        res.status(200).send(jsonob);
    }
    else {
        res.status(411).send("Very Big number Cant handle it");
    }
}
// app.get('/handlesum', handleReq); //get request
app.get('/handlesum', middleware1, handleReq); //post request
//listener started
function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
