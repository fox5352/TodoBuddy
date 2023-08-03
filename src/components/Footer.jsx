import React, { useEffect, useState } from 'react';

import styles from "./css/Footer.module.css";

export const Footer = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const trigger = document.getElementsByClassName('trigger')[0].getBoundingClientRect().bottom;
    window.innerHeight > trigger ? setTrigger(true) : setTrigger(false);
  }, [trigger, setTrigger]);

  window.addEventListener('scroll', () => {
    const trigger = document.getElementsByClassName('trigger')[0].getBoundingClientRect().bottom;
    window.innerHeight > trigger ? setTrigger(true) : setTrigger(false);
  });

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
