import React from 'react'
import styles from "./Buttons.module.scss"
import {Link} from "react-router-dom"; 


type ButtonsProps = {

}

const Buttons: React.FC<ButtonsProps> = () => {
  return (
    <div className={styles.container}>
      <Link to='mygames' className= {styles.button} >My games</Link>
      <a href="https://github.com/OLAVIV" target="_blank" rel="noreferrer" className={styles.button}>My Github</a>
    </div>
  )
}

export default Buttons
