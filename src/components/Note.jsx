import React from 'react'
import { useNavigate } from "react-router-dom";

// import { useApp } from "../context/AppContext";
// redux  reducer
import { useDispatch } from "react-redux";
import { removeNote } from "../store/appSlice";

import styles from './css/Note.module.css'

export const Note = ({id, note, date, ...props}) => {
    const dispatch = useDispatch()
    const redirect = useNavigate()
    const values = {id:id, note:note, date:date}
    
    if (note.length > 77) {
        values.note = note.slice(0, 77) + "..."
    }

    const navigate = (e) => {
        redirect(`/${values.id}`)
    }

    const removeHandler = (e) => {
        dispatch(removeNote(values))
        e.stopPropagation() 
    }


  return (
    <div onClick={navigate} className={styles.body}>
        <div className={styles.head}>
            <h2 className={styles.heading}>
                {values.note}
            </h2>
            <p className={styles.date}>{values.date}</p>
        </div>
        <div>
            {/* <button><i className='bi bi-pen'></i></button> */}
            <button onClick={removeHandler} className={styles.btn}><i className='bi bi-scissors '></i></button>
        </div>
    </div>
  )
}
