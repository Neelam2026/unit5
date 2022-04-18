import {Counter} from "./components/Counter"
import './App.css';
import { useState } from 'react'
function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
     {show ? <Counter/> : null}  
      <button onClick={()=>{
        setShow(!show)
      }}>{show ? "Hide" : "Show"}</button>
        
    </div>
  );
}

export default App;
