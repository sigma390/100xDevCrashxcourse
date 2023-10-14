
const express = require('express');
const app = express();
const port = 3000;


function calculateSum(n:number):number{
    let sum:number = 0;
    for (let i = 0; i <= n; i++) {
        sum=sum+i;
        
    }
    return sum;
}
//GET request
function handleReq(req:any, res:any){
    let cntr:number = req.query.n1; //user request handleing
    let ans = "the sum is :" + calculateSum(cntr);
    res.send(ans);
  }

//POST request
function createUser(req:any,res:any){
    let usr:string = "HEY USER CREATED";
    res.send(usr);
}

app.get('/handlesum', handleReq); //get request
app.get('/create',createUser);//post request

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started)



