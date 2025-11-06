import {createContext, useReducer} from "react";
export const themeContext = createContext();

function themeReducer(state , action) {
    switch (action.type){
        case "CHANHE_COLOR" :
            return{...state , color : action.payload}
        case "CHANHE_MODE" :
            return{...state , mode : action.payload}
        default:
            return (state)
    }
}

export function ThemeProvider({children}){
    const [state, dispatch] = useReducer(themeReducer , {
        color : '#58249',
        mode : 'light'
    })
    const changeColor = (color) => {
        dispatch({type : "CHANHE_COLOR" , payload: color})
    }
    const changeMode = (mode) => {
        dispatch({type : "CHANHE_MODE" , payload: mode})
    }

    return(
        <themeContext.Provider value={{...state , changeColor , changeMode}}>
            {children}
        </themeContext.Provider>
    )
}