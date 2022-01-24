import React from 'react'
import styles from "./AboutMe.module.scss"
import {Link} from "react-router-dom";
type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  document.title="About Me"
  return (
    <div>
        <div>
            <p className={styles.otsikko}>My Portfolio</p>
            <p className={styles.aboutme}>Hi, my name is Olavi and I am an information and communications (ICT) student from Vantaa Finland.</p>
            <p className={styles.aboutme}>I am currently studying at Varia Myyrmäki, I've studied for about one and a half years by now.</p>
            <p className={styles.aboutme}>The things i've learnt are the following: Basics of Java, JavaScript, TypeScript, React, CSS and SCSS</p>
            <p className={styles.aboutme}>I've studied the basics of Unity, and C# scripting for Unity quite thoroughly, but there is always something new to learn.</p>
        </div>
        <Link to='/' className= {styles.button} >Back</Link>
    </div>
  )
}

export default AboutMe
