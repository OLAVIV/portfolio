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
      <div className={styles.img}>
      <img src={logo} alt='logo' />
      <img src={csharp} alt='csharp' />
      <img src={typescript} alt='typescript'/>
      <img src={unity} alt='unity' />
      </div>
    </div>
  )
}

export default Home
