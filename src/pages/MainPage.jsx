import React from 'react'

import { AddNote, Note } from "../components";
import { useTitle } from "../hooks";

// redux reducer and state
import { useSelector, useDispatch } from "react-redux";
import { deleteNotes } from "../store/appSlice";

import styles from './css/MainPage.module.css'

export const MainPage = () => {
  const  { counter, todoList } = useSelector(state=> state.appState)
  const dispatch = useDispatch()

  useTitle('Home')

  const mapper = (item) => {
    const {id, note, date} = item
    return <Note key={id} id={id} note={note} date={date} />
  }

  const deleteAll = () => {
    dispatch(deleteNotes())
  }

  return (
    <>
        <AddNote />

        <div className={styles.main}>
          <div className={styles.head}>
            <h2>Todo <i>{counter}</i></h2>
            <button onClick={deleteAll} className={styles.btn}>Clear All</button>
          </div>
          <div className={styles.body}>
            {todoList && todoList.map(mapper)}
          </div>
        </div>
    </>
  )
}
