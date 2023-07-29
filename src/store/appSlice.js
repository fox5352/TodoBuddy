import { createSlice } from "@reduxjs/toolkit";


// cerate app slice
const appSlice = createSlice({
    name: 'App',
    initialState: {
        counter: 0,
        todoList: JSON.parse(localStorage.getItem('tasklist')) || []
    },
    reducers: {
        addNote(state, action){
            const newData = state.todoList.concat(action.payload)
            localStorage.setItem('tasklist', JSON.stringify(newData))
            return {
                counter: state.todoList.length + 1,
                todoList: newData
            }
        },
        removeNote(state, action){
            const newData = state.todoList.filter(note => note.id !== action.payload.id)
            localStorage.setItem('tasklist', JSON.stringify(newData))
            return {
                counter: state.todoList.length - 1,
                todoList: newData
            }
        },
        deleteNotes(state, action){
            localStorage.setItem('tasklist', JSON.stringify([]))
            return {
                counter: 0,
                todoList: []
            }
        },
    }
})

// exports the actions that change the state
export const { addNote, removeNote, deleteNotes } = appSlice.actions;
// exports the reducer for it to be registered in store
export const appReducer = appSlice.reducer;