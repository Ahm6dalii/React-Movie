import { createContext, useState } from "react";
const LangContext = createContext();

export function LangContextProvider({children}) {

  const [lang, setLang] = useState("en");

  <LangContext.Provider value={{ lang, setLang }}>
    {children}
  </LangContext.Provider>;
}
export default LangContext;
