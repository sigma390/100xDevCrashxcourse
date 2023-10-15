
const express = require('express'); //importing library
const bodyParser = require('body-parser'); //importing body parser library
const app = express(); //creating app object
const port = 3000; //setting a port


app.use(bodyParser.json()); //using middleware of body parser



// app.use(middleware1); // call middleware
// app.use(middleware2);
// function middleware2(req:any, res:any, next:any) {
//     res.send("Error from middleware 2");
// }



function middleware1(req:any,res:any,next:any) {
    console.log("inside middleware "+req.headers.n1);
    next();
    
}

function calculateSum(n:number):number{
    let sum:number = 0;
    for (let i = 0; i <= n; i++) {
        sum=sum+i;
        
    }
    return sum;
}



//GET request
function handleReq(req:any, res:any){
    // let cntr:number = req.query.n1; //user request handleing from url
    // to handle reuest from headers
    console.log(req.body);
    let cntr:number = req.headers.n1;
    if (cntr<1001) {
        let ans = "the sum is :" + calculateSum(cntr);
        res.send(ans);
    }
    else{
        res.status(411).send("Very Big number Cant handle it");
    }
    
  }




//POST request
function createUser(req:any,res:any){
    let usr:string = "HEY USER CREATED";
    res.send(usr);
}




// app.get('/handlesum', handleReq); //get request
app.post('/handlesum', handleReq); //post request
app.get('/create',createUser);//post request



//listener started
function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started)



