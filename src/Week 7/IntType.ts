
//interfaces
interface PersonInterface {
    name:string,
    age:number
    greet():string;
}

class Man implements PersonInterface{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `hi ${this.name}`
    }
}

 
//greet function
// function greet(person:PersonInterface):string{
//     return `hey ${person.name} and your age is${person.age} nice to meet you`
// }


//CReating Object
const p1 = new Man("omkar",23);
console.log(p1.greet())