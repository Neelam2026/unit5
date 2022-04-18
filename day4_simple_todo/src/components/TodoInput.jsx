import { useState } from "react"

import "./TodoInput.css";

export const TodoInput=({dataFn})=>{
    const [text, setText]=useState("")
  return (<div className="Todoinput">
       <input className="input" onChange={(e)=>{
           setText(e.target.value)  
      }} type="text" placeholder="Write Somthing"></input>
       <button className="button" onClick={()=>{
           dataFn(text)
       }}>+</button>
      
   </div>)
}

