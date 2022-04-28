
const ADD_TODO="ADD_TODO"

export const reducer=(store,action)=>{
    switch(action.type){
        case ADD_TODO:return {...store,todos:[...store.todos, action.payload]};
        default: return {...store}
    }
  }
