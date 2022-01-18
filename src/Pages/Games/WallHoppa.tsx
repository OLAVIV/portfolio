import React from 'react'
import styles from "./WallHoppa.module.scss"
import {Link} from "react-router-dom"; 
type WallHoppaProps = {

}

const WallHoppa: React.FC<WallHoppaProps> = () => {
  return (
    <div>
        <div className={styles.container}>
      <p className= {styles.otsikko}> My Portfolio</p>
            <a href="https://play.unity.com/mg/other/wall-hopper-release" target="_blank" rel="noreferrer" className={styles.stiili}>Wall Hopper Windows</a>
            <a href="https://play.unity.com/mg/other/wall-hopper-mac-build" target="_blank" rel="noreferrer" className={styles.stiili}>Wall Hopper Mac</a>
            <Link to='/mygames' className= {styles.stiili} >Back</Link>
        </div>

    </div>
  )
}

export default WallHoppa
