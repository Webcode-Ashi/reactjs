import React from 'react'
import styles from './header.module.css'
const header = () => {
  return (
    <div className={styles.header}>
        <h1>Hey,I am ASHI.</h1>
        <button className={styles.btn}>Sign UP</button>
    </div>
  )
}

export default header