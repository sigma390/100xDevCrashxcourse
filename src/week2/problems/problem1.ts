//Problem 1 use of date class
function callbackk():void{
    console.log("callback fxn is called");
    }
    function higherOrder(n1:number, callbackk:any){
        setTimeout(callbackk,n1*1000)
    }
    
    
    let todayDATE = new Date();
    let n1:number = todayDATE.getUTCDate();
    console.log(n1);
    
    higherOrder(n1,callbackk);
    