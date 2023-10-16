"use strict";
// const express = require('express'); //importing library
// const bodyParser = require('body-parser'); //importing body parser library
// const app = express(); //creating app object
// const port = 3000; //setting a port
// app.use(bodyParser.json()); //using middleware of body parser
// // app.use(middleware1); // call middleware
// // app.use(middleware2);
// // function middleware2(req:any, res:any, next:any) {
// //     res.send("Error from middleware 2");
// // }
// function middleware1(req:any,res:any,next:any) {
//     console.log("inside middleware "+req.headers.n1);
//     next();
// }
// function calculateSum(n:number):number{
//     let sum:number = 0;
//     for (let i = 0; i <= n; i++) {
//         sum=sum+i;
//     }
//     return sum;
// }
// function calculateMul(n:number):number{
//     let mul:number = 1;
//     for (let i = 1; i <= n; i++) {
//         mul=mul*i;
//     }
//     return mul;
// }
// //GET request
// function handleReq(req:any, res:any){
//     // let cntr:number = req.query.n1; //user request handleing from url
//     // to handle reuest from headers
//     console.log(req.body); //req from body
//     let cntr:number = req.headers.n1; //req from headers
//     if (cntr<1001) {
//     //     let ans = "the sum is :" + calculateSum(cntr);
//     //     res.send(ans);
//     let jsonob = {
//         sum:calculateSum(cntr),
//         mul:calculateMul(cntr)
//     };
//     res.status(200).send(jsonob);
//      }
//     else{
//         res.status(411).send("Very Big number Cant handle it");
//     }
//   }
// //POST request
// function createUser(req:any,res:any){
//     let usr:string = "HEY USER CREATED";
//     res.send(usr);
// }
// //HTML RETURN
// function givpage(req:any,res:any) {
// //     res.send(`<head>
// //     <title>HTML DOC</title>
// // </head>
// // <body>
// //     <b>hi its html documnet</b>
// // </body>`)
// //another way
// res.sendFile(__dirname+"/index.html");
// }
// // app.get('/handlesum', handleReq); //get request
// app.post('/handlesum', handleReq); //post request
// app.get('/create',createUser);//post request
// app.get('/htmll',givpage); //another route
// //listener started
// function started(){
//     console.log(`Example app listening on port ${port}`)
// }
// app.listen(port,started)
