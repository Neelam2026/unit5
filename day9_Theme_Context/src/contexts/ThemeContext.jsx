

import { createContext, useState } from "react";

export const ThemeContext = createContext()
export const ThemeContextProvider=({children})=>{
  const [theme,setTheme]=useState('theme' ? 'light':'dark')
    const toggleTheme =()=>{
      const newTheme=theme==='light' ? 'dark' :'light';
      setTheme(newTheme)
        
    }
 return (<ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>)
}