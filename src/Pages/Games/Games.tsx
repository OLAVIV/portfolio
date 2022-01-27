import React from 'react'
import styles from "./Games.module.scss"
import {Link} from "react-router-dom"; 
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider';
type GamesProps = {

}

const Games: React.FC<GamesProps> = () => {
  const { useDarkmode, setUseDarkmode } = useDarkmodeContext();
  document.title="My Games"
  return (
    <div className={ useDarkmode ? styles.dark : styles.light}>
            {/* <p className= {styles.otsikko}> My Portfolio</p> */}
            <a href="https://github.com/alextoro306/SnakeFighters" target="_blank" rel="noreferrer" className={useDarkmode ? styles.gamesdark : styles.gameslight}>Snake Fighters</a>
            <Link to='wallhopperbuilds' className= {useDarkmode ? styles.gamesdark : styles.gameslight} >Wall Hopper</Link>
            <a href="https://play.unity.com/mg/other/webgl-builds-89332" target="_blank" rel="noreferrer" className={useDarkmode ? styles.gamesdark : styles.gameslight}>Lego Game</a>
            <a href="https://play.unity.com/mg/other/rollaball-68" target="_blank" rel="noreferrer" className={useDarkmode ? styles.gamesdark : styles.gameslight}>Rollaball 1.0</a>
            <a href="https://play.unity.com/u/olvikurki" target="_blank" rel="noreferrer" className={useDarkmode ? styles.gamesdark : styles.gameslight}>Rollaball 2.0</a>
            <a href="https://play.unity.com/mg/other/jump-parkour" target="_blank" rel="noreferrer" className={useDarkmode ? styles.gamesdark : styles.gameslight}>Fence Jumper</a>
            <a href="https://play.unity.com/mg/other/ilmapallopeli" target="_blank" rel="noreferrer" className={useDarkmode ? styles.gamesdark : styles.gameslight}>Balloon Popper</a>
            <a href="https://play.unity.com/mg/other/unit-5-qa" target="_blank" rel="noreferrer" className={useDarkmode ? styles.gamesdark : styles.gameslight}>Boyncy Balls</a>
            <a href="https://play.unity.com/mg/other/challenge-5-17" target="_blank" rel="noreferrer" className={useDarkmode ? styles.gamesdark : styles.gameslight}>Food Fetcher</a>
            <Link to='/' className= {useDarkmode ? styles.gamesdark : styles.gameslight} >Back</Link>
    </div>
  )
}

export default Games
