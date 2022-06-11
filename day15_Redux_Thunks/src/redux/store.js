

// import {legacy_createStore as createStore,combineReducers, applyMiddleware} from "redux"
// import {counterReducer} from "../redux/Counter/reducer"
// import {todosReducer} from "../redux/Todos/reducer"

// const rootReducer=combineReducers({
//     counter:counterReducer,
//     todos:todosReducer
// })

// const middleware1=(store)=>(next)=>(action )=>{
//     console.log(" entering mw1")
//     next(action);
//     console.log(" exiting mw1")
// }

// const middleware2=(store)=>(next)=>(action )=>{
//     console.log(" entering mw2")
//     next(action);
//     console.log(" exiting mw2")
// }

// export const store =createStore( 
//     rootReducer,
//     applyMiddleware(middleware1,middleware2)
//    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//************************************************************** */

import {legacy_createStore as createStore,combineReducers, applyMiddleware} from "redux"
import {counterReducer} from "../redux/Counter/reducer"
import {todosReducer} from "../redux/Todos/reducer"
import thunk from "redux-thunk"
const rootReducer=combineReducers({
    counter:counterReducer,
    todos:todosReducer
})

// const middleware=(store)=>(next)=>(action )=>{
//     if(typeof action==="function"){
//        return action(store.dispatch)
//     }
//     next(action);
    
// }


export const store =createStore( 
    rootReducer,
    applyMiddleware(thunk)
   // applyMiddleware(middleware)
  
    )









//export const store =createStore(counterReducer,{counter:0,todos:[]})

// store.subscribe(()=>{
// console.log("sub",store.getState())
// })