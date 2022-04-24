import styled from "styled-components"
import { ThemeContext } from "../contexts/ThemeContext" 
import { useContext } from "react"
export const Footer =() =>{
    var {theme}=useContext(ThemeContext)
    const Button_style = styled.section`
    background: ${theme==="light" ? "rgb(212, 210, 196)" : "rgb(18, 4, 63)"};
     padding-top:1%;
     height:35px;
     padding:"3%";
     `
     return (
     <Button_style>
         <div>© 2022 Nykaa E-Retail Pvt. Ltd. All Rights Reserved</div>
     </Button_style>)
     
}