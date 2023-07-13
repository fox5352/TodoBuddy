import React from 'react'
import { Link } from "react-router-dom";

import styles from "./css/Header.module.css";

    export const Header = () => {
  return (
    <header className={styles.header}>
        <Link to="/" className={styles.title}><i class='bi bi-sticky'></i> Taskmate</Link>

        <dic className={styles.navControls}>
          <button className={styles.navBtn} disabled><i className='bi bi-sun'></i></button>
          <button className={styles.navBtn}><i className='bi bi-github'></i></button>
        </dic>
    </header>
  )
}
