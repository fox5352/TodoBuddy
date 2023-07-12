import { createContext, useContext, useReducer } from "react";
    
import { appReducer } from "../reducer/appReducer"

const initialState = {
    counter: 0,
    todoLists: []
}

const AppContext = createContext(initialState)

export const AppProvider = ({children, ...props}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const increment = () => {
        const newLen = state.counter + 1
        dispatch({
            type: "INCREMENT",
            payload: {
                counter: newLen
            }
        })
    }
    const decrement = () =>  {
        const newLen = state.counter - 1
        dispatch({
            type: "DECREMENT",
            payload: {
                counter: newLen
            }
        })
    }

    const value = {
        counter: 0,
        todoLists: [],
        increment,
        decrement,
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)