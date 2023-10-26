"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile("a.txt", "utf-8", function callback(err, data) {
    console.log(data);
});
// 2nd meth anonymous fxn
// fs.readFile("a.txt","utf-8",function (err:any,data:any) {
//     console.log(data);
// }
// );
//3rd arrow fxn
fs_1.default.readFile("a.txt", "utf-8", (err, data) => {
    console.log(data);
});
