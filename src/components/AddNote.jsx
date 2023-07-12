import React from 'react'

import styles from './css/AddNote.module.css'

export const AddNote = () => {
  return (
    <div className={styles.form}>
       <input className={styles.input} type='text' spellCheck required />
       <button className={styles.btn} ><i className={`${''} bi bi-sticky`}></i></button>
    </div>
  )
}
