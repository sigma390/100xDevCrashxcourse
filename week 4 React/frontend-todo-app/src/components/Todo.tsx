
import React from "react";


interface todo{
    title:string;
    description:string
}


function Todo(props:todo){
    return<div>
        {props.title}
        {props.description}
    </div>

}
export default Todo