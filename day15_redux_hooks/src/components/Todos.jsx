// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { addTodos} from "../redux/Todos/action";

// export const Todos=()=>{
 

//     const todos=useSelector((store)=> store.todos.todos)

//     const [text,setText]=useState("")
//      const distpatch=useDispatch()
//     const handlechange=()=>{
//           distpatch(
//              addTodos({
//                  title:text,
//                  status:false,
//              }) 
//           )
//     }

// console.log("ren todos")
// return (
//     <div>
//        <div><input placeholder='add to do' type="text" onChange={(e)=>setText(e.target.value)}></input>
//        <button  onClick={handlechange}>Add Todo</button></div>
//      {todos.map((t,i)=>{
//          return <div key={i}>{t.title}</div>
       
//      })}
//     </div>
// )
// }

//***************************************************** */

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  delete_todo, toggle_todo,getData} from "../redux/Todos/action";
import { sort } from "../redux/Todos/action";
export const Todos=()=>{
 
const dispatch=useDispatch()
    const todos=useSelector((store)=> store.todos.todos)

    const [text,setText]=useState("")
    const [filter,setFilter]=useState("")
    const handlechange=()=>{
          const payload={
            
                title:text,
                status:false,
            
          };
          fetch("http://localhost:8080/todos",{
              body:JSON.stringify(payload),
              headers:{
                  "content-type":"application/json",
                },
                method:"POST",
                
          }).then(()=>setText(""))
          .then(()=>{
              dispatch(getData())
          })


    }


    useEffect(()=>{
       dispatch(getData())
    },[])
    

//console.log("ren todos")
return (
    <div>
        <input type="text" placeholder="Filter Todo" onChange={(e)=>{
           setFilter(e.target.value)
        }}></input>
        

        <select onChange={(e)=>{
        dispatch(sort(e.target.value));
        }}>
       <option value="id">Sort by id</option>
       <option value="status">Sort by status</option>
       <option value="title">Sort by Title</option>
        </select>


       <div><input value={text} placeholder='add to do' type="text" onChange={(e)=>setText(e.target.value)}></input>
       <button  onClick={handlechange}>Add Todo</button></div>
       
     {todos.filter(todo=>todo.title.includes(filter)).map((t,i)=>{
         return <div key={i}>{t.id}. {t.title}-{t.status ? "Done" : "Not Done"}

          <button onClick={()=>{
              dispatch(delete_todo(t.id))
          }}>Delete</button>

           <button onClick={()=>{
              dispatch(toggle_todo(t.id))
          }}>Toggle</button>
         </div>
       })}

      
    </div>
)
}