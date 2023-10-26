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
let title = document.getElementById("name");
let info = document.getElementById("desc");
app.get('/todos', (req, res) => {
    res.json(todos);
});
app.post('/todos', (req, res) => {
    let inpt = '';
    let descinpt = '';
    const btn = document.getElementById("btn1");
    btn.addEventListener('click', () => {
        inpt = title.value;
        descinpt = info.value;
    });
    const newTodo = {
        id: Math.floor(Math.random() * 100),
        name: inpt,
        desc: descinpt,
    };
    todos.push(newTodo);
    res.status(200).json(todos);
});
app.listen(port);
