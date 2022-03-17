import React from 'react'
import styles from "./WallHoppa.module.scss"
import { Link } from "react-router-dom";
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider';
type WallHoppaProps = {

}

const WallHoppa: React.FC<WallHoppaProps> = () => {
  const { useDarkmode } = useDarkmodeContext();
  return (
    <div className={useDarkmode ? styles.dark : styles.light}>
      <div className={styles.container}>
        <a href="https://play.unity.com/mg/other/wall-hopper-release" target="_blank" rel="noreferrer" className={useDarkmode ? styles.stiilidark : styles.stiililight}>Windows</a>
        <a href="https://play.unity.com/mg/other/wall-hopper-mac-build" target="_blank" rel="noreferrer" className={useDarkmode ? styles.stiilidark : styles.stiililight}>Mac</a>
        <Link to='/mygames' className={useDarkmode ? styles.stiilidark : styles.stiililight} >Back</Link>
      </div>

    </div>
  )
}

export default WallHoppa
