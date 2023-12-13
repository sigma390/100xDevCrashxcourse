import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Todo from './components/Todo';
import './App.css'
import react from '@vitejs/plugin-react';
import PersonName from './components/Pername';
import { METHODS } from 'http';



// let todos : TODO[] = [t1,t2
// ]
//==========================>CUSTOM HOOK <====================================
function useTodos() {
  const [todos,setTodos] = React.useState([]);

React.useEffect(()=>{

  fetch("http://localhost:3000/todos",
  {method:"GET"}).then((res)=>{
    res.json().then((data)=>{
      console.log(data);
      setTodos(data)
    })
  });
  //===> for realtime RENDERS

setInterval(()=>{
  fetch("http://localhost:3000/todos",
  {method:"GET"}).then((res)=>{
    res.json().then((data)=>{
      console.log(data);
      setTodos(data)
    })
  });
},1000)
},[])
return todos;
}


function App() {
  const todos = useTodos();
  
// const[todos,setTodo] = React.useState([{
//   id:1,
//   title:"gym",
//   description:"from 4 TO 5"
// },{
//   id:2,
//   title:"work",
//   description:"from 6 TO 7"
// }])

//====================> re render puzzle  <========================
// let cntr:number = 0;
// const [todoForToday,setTodaytodo] = React.useState({
//   title:"gym",
//   timing:"5 to 6"
// })

// if (cntr==0) {
//   setInterval(()=>

//   {
//     setTodaytodo({
//       title:"work"+ Math.floor(Math.random()*10),
//       timing:"7 to 9"
//     })
//   },1000)
//   cntr = 1;
// }



// //another state variable 
//               const[stateVar,setVar]= React.useState(Math.floor(Math.random()*10));

// //non state variable

//               const nonStateVar:number = Math.floor(Math.random()*10);

//printing all 
// console.log(todoForToday);
// console.log(stateVar);
// console.log(nonStateVar);










//===========================================> Puzzle end <=================================                               





// setInterval(()=>{
//   setTodo({
//     title:"Go work"+Math.random(),
//     description:"Compulsary"
//   })
// },1000)

  
  

  return (

      
      <div>
         {
          todos.map((todo)=>{
            return<div>
              {todo.title}
            {todo.description}
            <button>Delete</button>
            <br/>
              </div>
          })
        } 
      
        
  
    
      
    </div>
  )
}

  
export default App


//=======================>  mapping through todos array <===============================
// {
//   todos.map((todo)=>{
//     return<div>
//       {todo.id}
//       <br />
      
//       {todo.title}
//       <br />
//       {todo.description}
//       <br />
//       <hr />
//       </div>
//   })
// }