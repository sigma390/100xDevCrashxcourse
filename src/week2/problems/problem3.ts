
//uuse of filter fxn in ts

function filterArr(givenArr:number[], callback:any){
    function xyz(element:number,index:number,givenArr:number[]):boolean{
    if (callback(element) == true ){
        return true;
    }
    else{
        return false;
    }
    
}
return givenArr.filter(xyz)
}


function iseven(element:number):boolean{
    if ((element%2)== 0) {
        return true;
    }
    else{
        return false;
    }
}
function isodd(element:number):boolean{
    if ((element%2)!= 0) {
        return true;
    }
    else{
        return false;
    }
}

let givenArrr:number[] = [1,2,3,4,5,6];
let evnArr = filterArr(givenArrr,iseven)
let oddArr = filterArr(givenArrr,isodd);
console.log(evnArr);
console.log(oddArr);


