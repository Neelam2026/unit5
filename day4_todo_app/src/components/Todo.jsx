
import { useState } from "react"
import "./Todo.css"

function Todo(){

var [arr,setarr] = useState([])
const [text,settext] = useState("")
const addcart = (val) =>{
  if(val===""){
    return
  }
  setarr([...arr,{name : val,
                  status: "notchecked"}])
}
const func=(e)=>{
  var arr2 = []
  arr.map((el)=>{
    if(el!==e)
     arr2.push(el)
     else{
       arr2.push({"name":e.name,
     "status":"checked"})
    }

     
})
setarr(arr2)
                                  
}
return (
  <div>
    <div id="main">
    <div id="input">
    <button className="button" type="submit" onClick={()=>addcart(text)}>+</button>
    <input className="input" type="text" placeholder="enter the text" onChange={(e)=>{
      settext(e.target.value)
    }}></input>
    </div>
    
    <div id="under" >{arr.map((e)=>{
    if(e.status==="notchecked")
      return <div  className="todoitems"><input id="check"  type="checkbox" className="checkbox" onClick={()=>func(e)}></input>{e.name}</div>
    })}</div>
  </div>
  
  <div id="down">
  <div id="color">Show completed task</div>
  <div id="show">{arr.map((e)=>{
    if(e.status==="checked")
      return <div  className="todoitems_down"><input   className="checkbox" id="check"  type="checkbox" checked></input>{e.name}</div>
  })}</div>
</div></div>
)
}
export {Todo}