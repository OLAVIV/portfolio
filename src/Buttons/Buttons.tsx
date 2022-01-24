import React from 'react'
import styles from "./Buttons.module.scss"
import {Link} from "react-router-dom"; 


type ButtonsProps = {

}

const Buttons: React.FC<ButtonsProps> = () => {
  return (
    <div className={styles.container}>
      <Link to='aboutme' className= {styles.button} >About Me</Link>
      <Link to='mygames' className= {styles.button} >My Games</Link>
      <Link to='mycv' className= {styles.button} >My CV</Link>
      <a href="https://github.com/OLAVIV" target="_blank" rel="noreferrer" className={styles.button}>My Github</a>
    </div>
  )
}

export default Buttons
