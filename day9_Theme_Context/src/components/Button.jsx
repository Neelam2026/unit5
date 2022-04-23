

import { ThemeContext } from "../contexts/ThemeContext" 
import { useContext } from "react"

export const Button =() =>{
    var {theme}=useContext(ThemeContext)
    const {toggleTheme}=useContext(ThemeContext)

    return <button onClick={()=>{
        toggleTheme()
     }} >{theme} theme</button>
     
}