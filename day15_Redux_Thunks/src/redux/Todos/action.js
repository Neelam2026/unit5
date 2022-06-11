
export const ADD_TODOS="ADD_TODOS"
export const SORT= "SORT"
export const DELETE_TODO="DELETE_TODO"
export const TOGGLE_TODO="TOGGLE_TODO"
export const addTodos=(data)=>(
    {
        type:ADD_TODOS,
        payload:data,
    }
)


export const getData=()=>async(dispatch)=>{
  
   const data=await fetch("http://localhost:8080/todos").then(x=>x.json()).then(data=>{
        dispatch(addTodos(data))
    })
 }


 export const sort =(by)=>{
     return {
         type:SORT,
        payload:by,

     }
 }

 export const delete_todo =(id)=>{
    return {
        type:DELETE_TODO,
       payload:id,

    }
 }

 export const toggle_todo =(id)=>{
    return {
        type:TOGGLE_TODO,
       payload:id,

    }
 }