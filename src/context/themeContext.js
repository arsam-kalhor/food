import {createContext, useReducer} from "react";
export const themeContext = createContext();

function themeReducer(state , action) {
    switch (action.type){
        case "CHANHE_COLOR" :
            return{...state , color : action.payload}
        default:
            return (state)
    }
}

export function ThemeProvider({children}){
    const [state, dispatch] = useReducer(themeReducer , {
        color : '#58249'
    })
    const changeColor = (color) => {
        dispatch({type : "CHANHE_COLOR" , payload: color})
    }

    return(
        <themeContext.Provider value={{...state , changeColor}}>
            {children}
        </themeContext.Provider>
    )
}