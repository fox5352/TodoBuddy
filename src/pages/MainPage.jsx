import React from 'react'

import { NoteInput } from "../components";

import styles from './css/MainPage.module.css'

export const MainPage = () => {
  return (
    <>
        <NoteInput />

        <div className={styles.main}>
          <div className={styles.head}>
            <h2>Todo <i>{0}</i></h2>
            <button className={styles.btn}>Clear All</button>
          </div>
          {/* TODO:note component */}
        </div>
    </>
  )
}
