//Normal Approach
let numArr:number[] = [1,2,3,4,5];
function mul2(numArr:number[]):number[]{
    let newArr2:number[] = [];
    for (let i = 0; i < numArr.length; i++) {
        newArr2.push(numArr[i]*2)
        
    }
    return newArr2;
}

// Mapping Approach
let newArr1 = numArr.map((val)=>{
    return val*2;
})
console.log(newArr1);
console.log(mul2(numArr))





// example 2 >===================================================<

type Person ={
    name:string;
    age:number;
}
let b1 ={
    name:"omkar",
    age:23
}
let b2 ={
    name:"Aditya",
    age:18
}
let b3 ={
    name:"Rahul",
    age:24
}
let boys:Person[] =[b1,b2,b3]
//=========================>NORMAL APPROACH <==========================//
let men:any = [];
function chekAge(boys:Person[]){
    for (let i = 0; i < boys.length; i++) {
        if (boys[i].age<19) {
            men.push({
                name:boys[i].name,
                age:boys[i].age,
                isAllowed:false

            })
        }
        else{
            men.push({
                name:boys[i].name,
                age:boys[i].age,
                isAllowed:true
        })
        
        
    }
}
}
chekAge(boys)

console.log(men)
//=========================>MAPPING APPROACH <==========================//

let newMen:any = boys.map((val)=>{
    if (val.age>19) {
        return{
            name:val.name,
            age:val.age,
            isAllowed:true,

        }
    }
    else{
        return{
            name:val.name,
            age:val.age,
            isAllowed:false,

        }
    }
})

console.log(newMen)

