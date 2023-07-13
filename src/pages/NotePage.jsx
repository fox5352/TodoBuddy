import React from 'react'
import { useParams, useNavigate } from "react-router-dom";

import { useApp } from "../context/AppContext";

import styles from './css/NotePage.module.css'

export const NotePage = () => {
    const params = useParams()
    const redirect = useNavigate()
    const { todoList, removeNote } = useApp()
    let list;

    todoList.forEach(note => {
        if (params.id === note.id) {
            list = note
        }
    });

    const homeBtn = () => {
        redirect('/')
    }

    const deleteNote = () => {
        console.log(list);
        removeNote(list)
        redirect('/')
    }

  return (
    <div className={styles.body}>
        <p>{list.note}</p>
        <div className={styles.navBar}>
            <button onClick={homeBtn} className={styles.btn} >Back</button>
            <button onClick={deleteNote} className={styles.btn} >Delete <i className='bi bi-trash' style={{color: 'crimson'}}></i></button>
        </div>
    </div>
  )
}
