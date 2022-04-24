

import { useState } from "react"
import styled from "styled-components"
import { ThemeContext } from "../contexts/ThemeContext" 
import { useContext } from "react"
import { Button } from "./Button"
export const Navbar=()=>{
   var {theme}=useContext(ThemeContext)
    const {toggleTheme}=useContext(ThemeContext)
   
    const Button_style = styled.section`
    background: ${theme==="light" ? "rgb(212, 210, 196)" : "rgb(18, 4, 63)"};
    height:60px;
     
     & .icon{
    margin-left:90%;
    padding-top:1%;
    color: ${theme==="light" ? "black" :"white"};
  
    }`
 
    return (
        <Button_style>
        <nav >
          <Button></Button>
        </nav>
        </Button_style>  
    )
}