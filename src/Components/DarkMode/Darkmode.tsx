import React from 'react'
import Buttons from '../../Buttons/Buttons'
import { useDarkmodeContext } from '../Context/darkmodeContextProvider'
import styles from "./Darkmode.module.scss"

type DarkmodeProps = {

}

const Darkmode: React.FC<DarkmodeProps> = () => {
  const { useDarkmode, setUseDarkmode } = useDarkmodeContext();
  return (
    <div className={styles.buttons}>
      <button className={useDarkmode ? styles.buttondark : styles.buttonlight}
        onClick={() => {
        setUseDarkmode(!useDarkmode);
        }}
      >
        { useDarkmode ? "Lightmode" : "Darkmode" }
      </button >
    </div>
  )
}

export default Darkmode
