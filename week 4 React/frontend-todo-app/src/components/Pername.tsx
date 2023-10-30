import React from "react";
interface useProps{
    first:string;
    last:string
  }
  


function PersonName(props:useProps):React.ReactElement{
   
    return<div>
      {props.first}{props.last}
    </div>
    
}

  export default PersonName