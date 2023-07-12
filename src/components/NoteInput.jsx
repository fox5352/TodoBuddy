import React from 'react'

import styles from './css/NoteInput.module.css'

export const NoteInput = () => {
  return (
    <div className={styles.form}>
       <input className={styles.input} type='text' spellCheck required />
       <button className={styles.btn} ><i className={`${''} bi bi-sticky`}></i></button>
    </div>
  )
}
