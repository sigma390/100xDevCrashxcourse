"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const path = require("path");
const cors_1 = __importDefault(require("cors"));
let port = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/todos', (req, res) => {
    fs_1.default.readFile("todos.json", "utf8", (err, data) => {
        if (err)
            throw err;
        res.json(JSON.parse(data));
    });
});
app.post('/todos', (req, res) => {
    let newtodo = {
        id: Math.floor(Math.random() * 100),
        name: req.body.name,
        desc: req.body.desc
    };
    fs_1.default.readFile("todos.json", "utf8", (err, data) => {
        if (err)
            throw err;
        const todos = JSON.parse(data);
        todos.push(newtodo);
        fs_1.default.writeFile("todos.json", JSON.stringify(todos), (err) => {
            if (err)
                throw err;
            res.status(201).json(newtodo);
        });
    });
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.use((req, res, next) => {
    res.status(404).send();
});
app.listen(port);
