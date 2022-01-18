import React from 'react'
import styles from "./Home.module.scss"
import Buttons from "../../Buttons/Buttons"

type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  return (
      <div>
<div>
      <p className= {styles.otsikko}> My Portfolio</p>
      
      </div>
      <div className={styles.container}>
          <Buttons />
      </div>
      </div>
  )
}

export default Home
