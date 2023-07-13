import React from 'react'

import styles from "./css/Footer.module.css";

// TODO: added a banner in the footer

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <h3>Contact Me</h3>
        <div className={styles.block}>
          <a className={styles.link} href='https://fox5352.github.io/online-cv/'>online cv</a>
          <a className={styles.link} href=''>LinkedIn</a>
        </div>
        <h3>Projects</h3>
        <div className={styles.block}>
          <a className={styles.link} href=''>Simon Game</a>
          <a className={styles.link} href=''>Todo List</a>
        </div>
      </div>
    </footer>
  )
}
