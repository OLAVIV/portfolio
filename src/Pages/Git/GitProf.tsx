import React from 'react'
import styles from "./Buttons.module.scss"
type GitProfProps = {

}

const GitProf: React.FC<GitProfProps> = () => {
  return (
    <div>
              <p className= {styles.otsikko}> My Portfolio</p>
      <a href="https://github.com/OLAVIV" target="_blank" rel="noreferrer" className={styles.button}>Github</a>
    </div>
  )
}

export default GitProf
