import React from 'react'
import { Link } from "react-router-dom";

import { useTheme } from "../hooks";

import styles from "./css/Header.module.css";

    export const Header = () => {
      const { toggleTheme } = useTheme()

  return (
    <header className={styles.header}>
        <Link to="/" className={styles.title}><i class='bi bi-sticky'></i> TodoBuddy</Link>

        <dic className={styles.navControls}>
          <button onClick={toggleTheme} className={styles.navBtn}><i className='bi bi-sun'></i></button>
          <button className={styles.navBtn}><i className='bi bi-github'></i></button>
        </dic>
    </header>
  )
}
