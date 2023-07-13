import React from 'react'

import { AddNote, Note } from "../components";
import { useApp } from "../context/AppContext";

import styles from './css/MainPage.module.css'

export const MainPage = () => {
  const { counter, todoList, deleteNotes } = useApp()

  const mapper = (item) => {
    const {id, note, date} = item
    return <Note key={id} id={id} note={note} date={date} />
  }

  return (
    <>
        <AddNote />

        <div className={styles.main}>
          <div className={styles.head}>
            <h2>Todo <i>{counter}</i></h2>
            <button onClick={deleteNotes} className={styles.btn}>Clear All</button>
          </div>
          <div className={styles.body}>
            {todoList && todoList.map(mapper)}
          </div>
        </div>
    </>
  )
}
