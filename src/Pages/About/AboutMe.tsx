import React from 'react'
import styles from "./AboutMe.module.scss"
import {Link} from "react-router-dom";
type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div>
        <div>
            <p className={styles.otsikko}>My Portfolio</p>
            <p className={styles.aboutme}>Hi, my name is Olavi and I am an information and communications (ICT) student from Vantaa Finland.</p>
            <p className={styles.aboutme}>I am currently studying at Varia Myyrmäki , i've studied for about one and a half years by now.</p>
            <p className={styles.aboutme}>The things i've learnt are the following: Basics of Java, JavaScript, TypeScript, React, Css and Scss, </p>
            <p className={styles.aboutme}>I studied the basics of Unity, and C# scripting quite thoroughly, but there is always something new to learn.</p>
        </div>
        <Link to='/' className= {styles.button} >Back</Link>
    </div>
  )
}

export default AboutMe
