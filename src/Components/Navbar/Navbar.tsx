import React from 'react'
import styles from "./Navbar.module.scss"
import Buttons from "../../Buttons/Buttons"
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  const { useDarkmode } = useDarkmodeContext();
  document.title="Home"
  return (
    <div className={ useDarkmode ? styles.dark : styles.light} >
      <div>
        <p className={styles.otsikko}> My Portfolio</p>
      </div>
      <div className={styles.container}>
        <Buttons />
      </div>
    </div>
  )
}

export default Navbar
