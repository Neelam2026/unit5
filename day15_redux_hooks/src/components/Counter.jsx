
import { addCount } from '../redux/Counter/action'
import { subCount } from '../redux/Counter/action'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"

export const Counter=()=>{
    const dispatch=useDispatch()
    // const counter=useSelector((store)=>{
    // return  store.counter
    // })
    const counter=useSelector((store)=>
       store.counter.counter
      )
     // console.log("ren counter")
    return (
        <div>
    <h3>Counter:{counter}</h3>
    <button onClick={()=>{
      {counter<10 ?  dispatch(addCount(1))  : ""} 
    }}>Add1</button>
    <button onClick={()=>{
      {counter>0 ?  dispatch(subCount(1))  : ""} 
    }}>sub1</button>
        </div>
    )
}