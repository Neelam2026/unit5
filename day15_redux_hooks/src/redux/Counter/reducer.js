

const  ADD_COUNT="ADD_COUNT" 
const SUB_COUNT="SUB_COUNT"


const init={counter:0}
export const counterReducer=(store=init,{type,payload})=>{
   
   switch(type){
       case ADD_COUNT :
       return {...store ,counter:store.counter+payload};
       case SUB_COUNT :
      return {...store ,counter:store.counter-payload};
      
       default : 
       return {...store}
   }
}