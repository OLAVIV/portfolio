import React from 'react'
import styles from "./Games.module.scss"
import {Link} from "react-router-dom"; 
type GamesProps = {

}

const Games: React.FC<GamesProps> = () => {
  document.title="My Games"
  return (
    <div className={styles.container}>
            <p className= {styles.otsikko}> My Portfolio</p>
            <a href="https://github.com/alextoro306/SnakeFighters" target="_blank" rel="noreferrer" className={styles.games}>Snake Fighters</a>
            <Link to='wallhopperbuilds' className= {styles.games} >Wall Hopper</Link>
            <a href="https://play.unity.com/mg/other/webgl-builds-89332" target="_blank" rel="noreferrer" className={styles.games}>Lego Game</a>
            <a href="https://play.unity.com/mg/other/rollaball-68" target="_blank" rel="noreferrer" className={styles.games}>Rollaball 1.0</a>
            <a href="https://play.unity.com/u/olvikurki" target="_blank" rel="noreferrer" className={styles.games}>Rollaball 2.0</a>
            <a href="https://play.unity.com/mg/other/jump-parkour" target="_blank" rel="noreferrer" className={styles.games}>Fence Jumper</a>
            <a href="https://play.unity.com/mg/other/ilmapallopeli" target="_blank" rel="noreferrer" className={styles.games}>Balloon Popper</a>
            <a href="https://play.unity.com/mg/other/unit-5-qa" target="_blank" rel="noreferrer" className={styles.games}>Boyncy Balls</a>
            <a href="https://play.unity.com/mg/other/challenge-5-17" target="_blank" rel="noreferrer" className={styles.games}>Food Fetcher</a>
            <Link to='/' className= {styles.games} >Back</Link>
    </div>
  )
}

export default Games
