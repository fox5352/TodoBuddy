import React from 'react'

import { AddNote } from "../components";
import { useApp } from "../context/AppContext";

import styles from './css/MainPage.module.css'

export const MainPage = () => {
  const { counter } = useApp()

  return (
    <>
        <AddNote />

        <div className={styles.main}>
          <div className={styles.head}>
            <h2>Todo <i>{counter}</i></h2>
            <button className={styles.btn}>Clear All</button>
          </div>
          {/* TODO:note component */}
        </div>
    </>
  )
}
