import React, { useEffect, useState } from 'react'

import { useApp } from "../context/AppContext";

import styles from './css/AddNote.module.css'

export const AddNote = () => {
  const [note, setNote] = useState('')
  const { pushNote } = useApp()

  const handelNote = (e) => {
    const newNote = e.target.value
    setNote(newNote)
  }

  const submitNote = (e) => {
    const newID = `${Math.round(Math.random()*900)}${Math.round(Math.random()*900)}`
    const date = new Date()
    const newNote = { id: newID, note: note, date: date.toDateString() }

    pushNote(newNote)
    
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
