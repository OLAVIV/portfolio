import React from 'react'
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider';
import styles from './Home.module.scss'
import logo from '../../media/logo.jpg'
import csharp from '../../media/csharp.jpg'
import unity from '../../media/unity.jpg'
import typescript from '../../media/typescript.jpg'
type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  const { useDarkmode } = useDarkmodeContext();
  return (
    <div className={ useDarkmode ? styles.dark : styles.light} >
      <p className={useDarkmode ? styles.darkname : styles.lightname}>Hi! My name is,</p>
      <p className={useDarkmode ? styles.darknamee : styles.lightnamee}>Olavi Kurki.</p>
      <div className={styles.img}>
      <img src={logo} alt='logo' />
      <img src={csharp} alt='csharp' />
      <img src={typescript} alt='typescript'/>
      <img src={unity} alt='unity' />
      <p className={useDarkmode ? styles.ddark : styles.llight} >Contact me ‏‏‎ ‎‏‏‎ ‎| </p>
      <a href="https://twitter.com/kurki_olavi" target="_blank" rel="noreferrer" className={useDarkmode ? styles.ddark : styles.llight}>twitter ‏‏‎ ‎|</a>
      <a href="https://www.instagram.com/olavikurki_/" target="_blank" rel="noreferrer" className={useDarkmode ? styles.ddark : styles.llight}>instagram ‏‏‎ ‎|</a>
      </div>
    </div>
  )
}

export default Home
