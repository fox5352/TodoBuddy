import React, { useEffect, useState } from 'react'
import { useApp } from "../context/AppContext";

import styles from "./css/Footer.module.css";

export const Footer = () => {
  const { todoList } = useApp()
  const [trigger, setTrigger] = useState(false)

  useEffect(()=>{
    const trigger = document.getElementsByClassName('trigger')[0].getBoundingClientRect().bottom
    window.innerHeight > trigger? setTrigger(true) : setTrigger(false)
  }, [trigger, setTrigger, todoList])

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
          <a className={styles.link} href='https://fox5352.github.io/online-cv'>online cv</a>
          <a className={styles.link} href='https://www.linkedin.com/in/christopher-vos-376910266'>LinkedIn</a>
        </div>
        <h3>Projects</h3>
        <div className={styles.block}>
          <a className={styles.link} href='https://fox5352.github.io/simon-game'>Simon Game</a>
          <a className={styles.link} href='https://52.201.225.92:3000'>Todo List</a>
        </div>
      </div>
    </div>
    </footer>
  )
}
