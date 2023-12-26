import React, { useEffect, useState } from 'react';

import styles from "./css/Footer.module.css";

export const Footer = () => {
  const [trigger, setTrigger] = useState(true);

  useEffect(()=>{
    document.addEventListener("scroll", triggerManager);
    triggerManager()
    return ()=>{
     document.removeEventListener("scroll", triggerManager);
    }
  },[])

  const triggerManager = ()=>{
    const triggerBottom = document.querySelector('.trigger').getBoundingClientRect().bottom;
    const screenBottom = window.innerHeight;
    if (triggerBottom < screenBottom) {
      setTrigger(true);
    }else{
      setTrigger(false)
    }
  }


  return (
    <footer className={`trigger ${styles.trigger}`} >
      <div className={`${styles.footer}  ${trigger ? styles.active : ''}`}>
        <div className={styles.body}>
          <h3>Contact Me</h3>
          <div className={styles.block}>
            <a className={styles.link} href='https://fox5352.github.io/online-cv'>online cv</a>
            <a className={styles.link} href='https://www.linkedin.com/in/christopher-vos-6469b7284'>LinkedIn</a>
          </div>
          <h3>Projects</h3>
          <div className={styles.block}>
            <a className={styles.link} href='https://fox5352.github.io/simon-game'>Simon Game</a>
            <a className={styles.link} href='https://ebooks-example.netlify.app/'>e-Books</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
