import React from 'react'
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider';
import styles from './Home.module.scss'
import Darkmode from '../../Components/DarkMode/Darkmode'
type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  const { useDarkmode } = useDarkmodeContext();
  return (
    <div className={ useDarkmode ? styles.dark : styles.light} >
      
    </div>
  )
}

export default Home
