import { useState } from "react"
import {TodoInput} from "./TodoInput"
import { Todoitem } from "./TodoItems"
import {nanoid} from "nanoid"
function Todo(){
     const[todosList,setTodosList]=useState([])
    const getData=(todo)=>{
         const payload={
             title:todo,
             status:false,
             id:nanoid(5),
         }
       setTodosList([...todosList,payload])
     
    }
    const handleStatus=(id)=>{
        console.log(id)
        // setTodosList([...todosList.map((e)=>(e.id===id ? {...e , status : !e.status} :e))])  //working
        
        const newarr=todosList.map(e=>{
            if(e.id===id){
              return {
                  ...e,
                  status:!e.status
              }  
            }
            return e;
        })
        setTodosList(newarr)
    }
    return (
        <div>
            <TodoInput dataFn={getData}/>
            {todosList.map((e,index)=>(
            <Todoitem handleStatus={handleStatus} todo={e} index={index}></Todoitem>
               ) )}
         </div>
    )
}
export {Todo}