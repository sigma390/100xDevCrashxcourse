//use of map funxtion


function addd1(element:number):number
{
    return element+1;
}
function mapArray(arrAy:number[],calledFxn:any):number[]{
    function callBEk(element:number, index:number, arrAy:number[]) {
        return calledFxn(arrAy[index]);
    }
    return arrAy.map(callBEk);  
}
let arrAy:number[] = [1,2,3,4];
let modArr = mapArray(arrAy,addd1);
console.log(modArr);