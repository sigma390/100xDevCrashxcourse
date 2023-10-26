import fs from 'fs'



fs.readFile("a.txt","utf-8",function callback(err:any,data:any) {
    console.log(data);
}
);

// 2nd meth anonymous fxn
// fs.readFile("a.txt","utf-8",function (err:any,data:any) {
//     console.log(data);
// }
// );

//3rd arrow fxn
fs.readFile("a.txt","utf-8",(err:any,data:any)=> {
    console.log(data);
}
);