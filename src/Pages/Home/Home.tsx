import React from 'react'
import styles from "./Home.module.scss"
import {Link} from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons"

type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  return (
      <div>
<div>
      <p className= {styles.otsikkoo}> (this website only works in 1920x1080(full hd) right now)</p>
      <p className= {styles.otsikko}> My Portfolio</p>
      
      </div>
      <div className={styles.container}>
          <Buttons />
      </div>
      </div>
  )
}

export default Home
