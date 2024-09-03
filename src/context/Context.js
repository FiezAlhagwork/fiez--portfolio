import { createContext, useState } from "react";
export const modes = createContext()

export const  ModeProvider = ({children}) => {
    const [mode,setMode] = useState(true)
    return (
        <modes.Provider value={{mode,setMode}}>
            {children}
        </modes.Provider>
    )
}