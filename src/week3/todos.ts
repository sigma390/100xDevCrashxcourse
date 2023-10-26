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



app.get('/todos',(req:any,res:any)=>{
    res.json(todos);
})
app.post('/todos',(req:any,res:any)=>{
    let inpt:string = req.body.name;
    let descinpt:string = req.body.desc;
    
    



 
    const newTodo:todo = {
        id: Math.floor(Math.random()*100),
        name: inpt,
        desc: descinpt ,
    }
    todos.push(newTodo);
    res.status(200).json(todos)

})
//get todo info using id
app.get('/todos/:id',(req,res)=>{
    let found:boolean = false;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == parseInt(req.params.id)) {
            res.json(todos[i]);
        };

        
        
        
    }
    res.status(400).send("NOT FOUND");
})


app.listen(port);