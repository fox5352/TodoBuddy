import { createContext, useContext, useReducer } from "react";
    
import { appReducer } from "../reducer/appReducer"

const initialState = {
    counter: 0,
    todoList: JSON.parse(localStorage.getItem('tasklist')) || []
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
        const newList = state.todoList.concat(data)
        increment()
        dispatch({
            type: "ADD_TO_LIST",
            payload: {
                notes: newList
            }
        })
    }
    const removeNote = (data) => {
        const list = state.todoList
        const newNotes = list.filter(note=> note.id !== data.id)
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
    const setNotes = (data) => {
        dispatch({
            type: "SET_NOTES",
            payload:{
                notes: data
            }
        })
    }


    const value = {
        counter: state.counter,
        todoList: state.todoList,
        pushNote,
        removeNote,
        deleteNotes,
        setNotes
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)