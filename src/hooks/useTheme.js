import {useContext} from "react";
import {themeContext} from "../context/themeContext";
export const useTheme = () => {
    const context = useContext(themeContext)
    if(context === undefined){
        throw new Error("useTheme must be used inside ThemeProvider")
    }
    return context
}