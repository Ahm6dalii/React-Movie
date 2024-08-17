import { createContext, useState } from "react";

let ThemeContext = createContext();

export default ThemeContext;

export function ThemeContexProvider({children}) {

  const[theme,setTheme]= useState('light');

  <ThemeContext.Provider value={{theme,setTheme}}>
      {children}
  </ThemeContext.Provider>
}
