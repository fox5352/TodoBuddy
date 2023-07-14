import { createContext, useContext, useEffect, useReducer } from "react";
    
import { appReducer } from "../reducer/appReducer"

const initialState = {
    counter: 0,
    todoList: JSON.parse(localStorage.getItem('tasklist')) || []
}

const AppContext = createContext(initialState)

export const AppProvider = ({children, ...props}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    useEffect(()=>{
        localStorage.setItem('tasklist', JSON.stringify(state.todoList))
    }, [state.todoList])

    // NOTES METHODS
    const pushNote = (data) => {
        const newList = state.todoList.concat(data)
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
        dispatch({
            type: "FILTER_LIST",
            payload: {
                notes: newNotes
            }
        })
    }
    const deleteNotes = () => {
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
        counter: state.todoList.length,
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