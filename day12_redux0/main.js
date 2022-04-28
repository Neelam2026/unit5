import './style.css'

import {legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer.js";
import { addTodo } from "./action.js";
const initState={
   todos:[],
}


const store=createStore(reducer,initState)

document.getElementById("button").addEventListener("click",function(){
  let inp=document.getElementById("input").value;
  let list= document.querySelector('#app')
  list.innerHTML=""
  store.dispatch(addTodo(inp))
  {store.getState().todos.map((e,i)=>{
    let divmain=document.createElement("div")
    divmain.id="divmain"
    let div=document.createElement("div")
    div.innerText = e.title
    div.id="div"
    // let btn=document.createElement("button")
    // btn.innerText = "Delete"

    let btn2=document.createElement("button")
    btn2.innerText = "Not Done"
    //not working 
    // btn.addEventListener("click",function(i){
    //   store.getState().todos.splice(i,1)
    //   console.log(store.getState().todos)
    //  })

    btn2.addEventListener("click",function(){
      {btn2.innerText = "Not Done" ? btn2.innerText = "✔️" : btn2.innerText = "Not Done"}
    })

   divmain.append(div,btn2)
   list.append(divmain)
  })}
})





