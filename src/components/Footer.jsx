import React, { useState } from 'react'

import styles from "./css/Footer.module.css";

// TODO: added a banner in the footer

export const Footer = () => {
  const [trigger, setTrigger] = useState(false)

  window.addEventListener('scroll' ,()=>{
    const trigger = document.getElementsByClassName('trigger')[0].getBoundingClientRect().bottom
    window.innerHeight > trigger? setTrigger(true) : setTrigger(false)
  })

  return (
    <footer className={`trigger ${styles.trigger}`} >
    <div className={`${styles.footer}  ${ trigger? styles.active: ''}`}>
      <div className={styles.body}>
        <h3>Contact Me</h3>
        <div className={styles.block}>
          {/* TODO: ADD LINKS! */}
          <a className={styles.link} href='https://fox5352.github.io/online-cv'>online cv</a>
          <a className={styles.link} href='/'>LinkedIn</a>
        </div>
        <h3>Projects</h3>
        <div className={styles.block}>
          <a className={styles.link} href='/'>Simon Game</a>
          {/* verify */}
          <a className={styles.link} href='https://52.201.225.92:3000'>Todo List</a>
        </div>
      </div>
    </div>
    </footer>
  )
}
