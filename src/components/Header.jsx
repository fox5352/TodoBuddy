import React from 'react'
import { Link } from "react-router-dom";

import { useTheme } from "../hooks";

import styles from "./css/Header.module.css";

export const Header = () => {
    const { toggleTheme } = useTheme()

  return (
    <header className={styles.header}>
        <Link to="/" className={styles.title}><i class={`bi bi-sticky ${styles.icon}`}></i><span class={styles.heading}> TodoBuddy</span></Link>

        <dic className={styles.navControls}>
          <button onClick={toggleTheme} className={styles.navBtn}><i className='bi bi-sun'></i></button>
          <a href='https://github.com/fox5352'><button className={styles.navBtn}><i className='bi bi-github'></i></button></a>
        </dic>
    </header>
  )
}
