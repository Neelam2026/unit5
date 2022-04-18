import { useEffect, useState } from 'react'
import "./Counter.css"
export const Counter=()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{

        let id = setInterval(()=>{
           setCount((prevValue)=>{
                    if(prevValue>=20){
                        clearInterval(id)
                        return 20
                    }
                   return  prevValue+1
                });
            },1000);
            return function cleanup(){
                clearInterval(id)    
            };
        },[]);
    
        return (
            <div className='counterbox'>
                <h3>Count:{count}</h3>
            </div>
        )
}