"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
let todos = [];
app.get('/todos', (req, res) => {
    res.json(todos);
});
app.post('/todos', (req, res) => {
    let inpt = req.body.name;
    let descinpt = req.body.desc;
    const newTodo = {
        id: Math.floor(Math.random() * 100),
        name: inpt,
        desc: descinpt,
    };
    todos.push(newTodo);
    res.status(200).json(todos);
});
//get todo info using id
app.get('/todos/:id', (req, res) => {
    let found = false;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == parseInt(req.params.id)) {
            res.json(todos[i]);
        }
        ;
    }
    res.status(400).send("NOT FOUND");
});
app.listen(port);
