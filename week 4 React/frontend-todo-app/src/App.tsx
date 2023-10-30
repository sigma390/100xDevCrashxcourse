import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import react from '@vitejs/plugin-react';
import PersonName from './components/Pername';

import ChangeColr from './components/changeCOLOR';

// let todos : TODO[] = [t1,t2
// ]

function App() {
  
const[t1,setTodo] = React.useState({
  title:"gym",
  description:"FROM 4 TO 5"
})

// setInterval(()=>{
//   setTodo({
//     title:"Go work"+Math.random(),
//     description:"Compulsary"
//   })
// },1000)

  
  

  return (
    <div>
      <h1>hI THERE</h1>
      <div>
        {t1.title}
        <br />
        {t1.description}
      </div>
    
      <PersonName first={"omkar"} last = {"Singh"}></PersonName>
      <ChangeColr></ChangeColr>
    </div>
  )
}

  
export default App
