import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 3000;
app.use(bodyParser.json());
type todo = {
    id:number;
    name:string;
    desc:string 
}

let todos:todo[]= [];


let title = document.getElementById("name") as HTMLInputElement;
let info = document.getElementById("desc") as HTMLInputElement;
app.get('/todos',(req:any,res:any)=>{
    res.json(todos);
})
app.post('/todos',(req:any,res:any)=>{
    let inpt:string = '';
    let descinpt:string = '';
    const btn = document.getElementById("btn1") as HTMLButtonElement;
    btn.addEventListener('click',()=>{
        inpt =  title.value;
        descinpt = info.value
    })



 
    const newTodo:todo = {
        id: Math.floor(Math.random()*100),
        name: inpt,
        desc: descinpt ,
    }
    todos.push(newTodo);
    res.status(200).json(todos)

})


app.listen(port);