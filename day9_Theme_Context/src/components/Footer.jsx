import styled from "styled-components"
import { ThemeContext } from "../contexts/ThemeContext" 
import { useContext } from "react"
export const Footer =() =>{
    var {theme}=useContext(ThemeContext)
    const Button_style = styled.section`
    background: ${theme==="light" ? "teal" : "yellowgreen"};
     margin:"10px";
     height:"100px";
     padding:"3%";
     `
     return (
     <Button_style>
         <div>footer</div>
     </Button_style>)
     
}