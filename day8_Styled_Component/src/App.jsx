import { useState } from "react";
import styled from "styled-components"
import './App.css'
import {Button} from "./components/Button"


function App() {
  const [theme,settheme]=useState("dark")

  const H3_style=styled.h3`
   border:1px solid grey;
   background-color: ${theme==="light" ? "yellowgreen" : "teal"};
  color :${theme==="light" ? "teal" : "yellowgreen"};
 `
  

    return (
      <div className="App">
        <H3_style>
        <h3>Theme is {theme}</h3></H3_style>
      <Button theme={theme}> Sign Out</Button>
      <Button theme={theme}>Sign In</Button>
      <button onClick={()=>{
       settheme(theme==="dark" ? "light" : "dark")
      }}  >Change theme</button>
      
      
      </div>
    )
  }

export default App
