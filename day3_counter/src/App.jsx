
import { useState } from 'react';
import './App.css';

function App() {
  var [counter,setCounter]=useState(0);
  
  const handlevalue=(value)=>{
    if(value===2){
      return setCounter(counter*value)
    }
  return setCounter(counter+value)
  }

  return (
    <div className="App">
      <h1 className={counter%2===0 ? "greenColor" : "redColor"}>Counter:{counter}</h1>
      <button onClick={()=>handlevalue(1)}>Increment</button>
      <button onClick={()=>handlevalue(-1)}>Decrement</button>
      <button onClick={()=>handlevalue(2)}>Double</button>
      <div>Counter is {counter%2===0 ? "Even" : "Odd"}</div>
    </div>
  );
}



export default App;
