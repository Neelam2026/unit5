
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";

import { ThemeContext } from "../contexts/ThemeContext" 
import { useContext } from "react"

export const Button =() =>{
    var {theme}=useContext(ThemeContext)
    const {toggleTheme}=useContext(ThemeContext)

    return <div   className="icon" onClick={()=>{
        toggleTheme()
     }} > {theme === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}</div>
     
}