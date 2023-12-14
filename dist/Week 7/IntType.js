"use strict";
class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `hi ${this.name}`;
    }
}
//greet function
// function greet(person:PersonInterface):string{
//     return `hey ${person.name} and your age is${person.age} nice to meet you`
// }
//CReating Object
const p1 = new Man("omkar", 23);
console.log(p1.greet());
