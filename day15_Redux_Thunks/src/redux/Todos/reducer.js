
import { ADD_TODOS, DELETE_TODO, TOGGLE_TODO } from "./action";
import {SORT} from "./action"


const init={todos:[]}
export const todosReducer=(store=init,{type,payload})=>{
  
   switch(type){
      
      case ADD_TODOS :
      return {...store,todos:payload}
 

      case SORT :
         return {
            ...store,
            todos:[...store.todos].sort((a,b)=>
               a[payload]>b[payload] ? 1 : a[payload]<b[payload] ? -1 :0
           ),
         };


       case DELETE_TODO:
          return {
             ...store,
             todos:store.todos.filter(el=>el.id !==payload)
          }  
      
      case TOGGLE_TODO:
            return {
               ...store,
               todos:store.todos.map((todo)=>
               todo.id=== payload ? {...todo ,status: !todo.status}:todo
               ),
            };
        
       default : 
       return store
   }
}