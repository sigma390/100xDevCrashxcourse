

// function

function calculatesum(a:number,b:number):number{
    return a+b;
} 

type type = "add"|"sub"|"div"|"mul";


function calc(a:number,b:number,x:type):number{

    if (x==="add") {
        return a+b;
    }
    else if (x==="sub") {
        return a-b;
    }
    else if (x==="div") {
        return a/b;
    }
    return a*b;

}

console.log(calc(1,2,"mul"))