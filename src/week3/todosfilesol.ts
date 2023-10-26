import  express  from "express";
import bodyParser from "body-parser";
import fs from 'fs';
import path = require("path");
import cors from 'cors'

let port:number = 3000;

const app = express();

app.use(bodyParser.json());   
app.use(cors());
type todo = {
    id:number;
    name:string;
    desc:string 
}

app.get('/todos', (req:any, res:any) => {
    fs.readFile("todos.json", "utf8", (err:any, data:any) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

app.post('/todos',(req:any,res:any)=>{

    let newtodo = {
        id:Math.floor(Math.random()*100),
        name:req.body.name,
        desc:req.body.desc
    };
    fs.readFile("todos.json","utf8",(err:any,data:any)=>{

        if (err) throw err;
        const todos = JSON.parse(data);
        todos.push(newtodo);
        fs.writeFile("todos.json",JSON.stringify(todos),(err)=>{
            if (err) throw err;
            res.status(201).json(newtodo)
                
            
        })  
     
       



    })



})
app.get("/",(req:any,res:any)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.use((req:any,res:any,next)=>{
    res.status(404).send();
});

app.listen(port);