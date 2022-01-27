import React from 'react'
import styles from "./AboutMe.module.scss"
import {Link} from "react-router-dom";
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider';
type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  const { useDarkmode } = useDarkmodeContext();
  document.title="About Me"
  return (
    <div className={ useDarkmode ? styles.dark : styles.light}>
        <div>
            {/* <p className={styles.otsikko}>My Portfolio</p> */}
            <p className={useDarkmode ? styles.aboutmedark : styles.aboutmelight}>Hi, my name is Olavi and I am an information and communications (ICT) student from Vantaa Finland.</p>
            <p className={useDarkmode ? styles.aboutmedark : styles.aboutmelight}>I am currently studying at Varia Myyrmäki, I've studied for about one and a half years by now.</p>
            <p className={useDarkmode ? styles.aboutmedark : styles.aboutmelight}>The things i've learnt are the following: Basics of Java, JavaScript, TypeScript, React, CSS and SCSS</p>
            <p className={useDarkmode ? styles.aboutmedark : styles.aboutmelight}>I've studied the basics of Unity, and C# scripting for Unity quite thoroughly, but there is always something new to learn.</p>
        </div>
        <Link to='/' className= {useDarkmode ? styles.buttondark : styles.buttonlight} >Back</Link>
    </div>
  )
}

export default AboutMe
