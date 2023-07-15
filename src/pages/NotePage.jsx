import React from 'react'
import { useParams, useNavigate } from "react-router-dom";


// redux reducer
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../store/appSlice";



import styles from './css/NotePage.module.css'
import { useTitle } from '../hooks';

export const NotePage = () => {
    const { todoList } = useSelector(state=> state.appState)
    const redirect = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    useTitle('Note')
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
        dispatch(removeNote(list))
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
