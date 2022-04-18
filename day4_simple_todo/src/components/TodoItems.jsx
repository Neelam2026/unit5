import "./TodoItems.css"


export const Todoitem=({todo,handleStatus,index})=>{
    return <div className="todoitems">
       {todo.title} 
        <button className={todo.status===true ? "togglebutton" : "togglebutton1"} onClick={()=>
        handleStatus(todo.id)
        }>⚫</button>
         </div>
    }