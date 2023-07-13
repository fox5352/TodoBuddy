import { createContext, useContext, useReducer } from "react";
    
import { appReducer } from "../reducer/appReducer"

const initialState = {
    counter: 0,
    todoLists: []
}

const AppContext = createContext(initialState)

export const AppProvider = ({children, ...props}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    // COUNTER METHODS
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
    // NOTES METHODS
    const pushNote = (data) => {
        const newList = state.todoLists.concat(data)
        increment()
        dispatch({
            type: "ADD_TO_LIST",
            payload: {
                notes: newList
            }
        })
    }
    const removeNote = (data) => {
        const newNotes = state.todoLists.filter(note=> note != data.id)
        decrement()
        dispatch({
            type: "FILTER_LIST",
            payload: {
                notes: newNotes
            }
        })
    }
    const deleteNotes = () => {
        dispatch({
            type: "RESET_COUNTER"
        })
        dispatch({
            type: "DELETE_LIST"
        })
    }


    const value = {
        counter: 0,
        todoLists: [],
        pushNote,
        removeNote,
        deleteNotes
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)