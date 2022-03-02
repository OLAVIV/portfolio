import React from 'react'
import styles from "./Buttons.module.scss"
import {Link} from "react-router-dom";
import { useDarkmodeContext } from '../Components/Context/darkmodeContextProvider';
import Darkmode from '../Components/DarkMode/Darkmode';



type ButtonsProps = {

}

const Buttons: React.FC<ButtonsProps> = () => {
  const { useDarkmode } = useDarkmodeContext();
  return (
    <div className={styles.container}>
      <Link to='mycv' className= {useDarkmode ? styles.buttondark : styles.buttonlight} >My CV</Link>
      <Link to='aboutme' className= {useDarkmode ? styles.buttondark : styles.buttonlight} >About Me</Link>
      <Link to='mygames' className= {useDarkmode ? styles.buttondark : styles.buttonlight} >My Games</Link>
      <a href="https://github.com/OLAVIV" target="_blank" rel="noreferrer" className={useDarkmode ? styles.buttondark : styles.buttonlight}>My Github</a>
      <Darkmode />
    </div>
  )
}

export default Buttons
