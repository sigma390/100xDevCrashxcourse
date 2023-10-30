import React, { useState } from "react"

function ChangeColr(){
    const[color,setColor] = useState<string>("red");

    const change = ()=>{
        const newColr:string = 'green';
        setColor(newColr);
    }

    return(
        <div>
            <div
            style={{backgroundColor : color, width:'100px',height:'100px'}

}
            ></div>
            <button onClick={change} >Change COLR</button>
            
        </div>);


}
export default ChangeColr;

