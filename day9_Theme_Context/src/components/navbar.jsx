

import { useState } from "react"
import styled from "styled-components"
import { ThemeContext } from "../contexts/ThemeContext" 
import { useContext } from "react"
import { Button } from "./Button"
export const Navbar=()=>{
   var {theme}=useContext(ThemeContext)
    const {toggleTheme}=useContext(ThemeContext)
   
    const Button_style = styled.section`
    background: ${theme==="light" ? "teal" : "yellowgreen"};
     display:flex;
     margin:"10px";
     height:"100px";
     padding:"15px";
     
     & button{
     background: ${theme==="dark" ? "teal" : "yellowgreen"};
     color: ${theme==="light" ? "teal" : "yellowgreen"};
    color: aliceblue;
    height: 40px;
    font-size: 50%;
    border-radius: 50px;
    border: 2px solid grey;
    margin-left: 90%;
    }`
 
    return (
        <Button_style>
        <nav >
          <Button></Button>
        </nav>
        </Button_style>  
    )
}