import React, { useState } from 'react'

// redux state
import { useDispatch } from "react-redux";
import { addNote } from "../store/appSlice";

import styles from './css/AddNote.module.css'

export const AddNote = () => {
  const [note, setNote] = useState('')
  const dispatch = useDispatch()

  const handelNote = (e) => {
    const newNote = e.target.value
    setNote(newNote)
  }

  const submitNote = (e) => {
    const newID = `${Math.round(Math.random()*900)}${Math.round(Math.random()*900)}`
    const date = new Date()
    const newNote = { id: newID, note: note, date: date.toDateString() }

    dispatch(addNote(newNote))
    
    setNote('')
    e.preventDefault()
  }

  return (
    <div className={styles.form}>
       <input className={styles.input} type='text' onChange={handelNote} value={note} spellCheck required />
       <button className={styles.btn} onClick={submitNote} ><i className={`${''} bi bi-sticky`}></i></button>
    </div>
  )
}
