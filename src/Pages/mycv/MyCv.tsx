import React from 'react'
import styles from "./MyCv.module.scss"
import {Link} from "react-router-dom";
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider';
type MyCvProps = {

}

const MyCv: React.FC<MyCvProps> = () => {
  const { useDarkmode } = useDarkmodeContext();
  document.title="My CV"
  return (
    <div className={ useDarkmode ? styles.dark : styles.light}>

        <Link to='/' className= {useDarkmode ? styles.anchordark : styles.anchorlight} >Back</Link>
    </div>  
  )
}

export default MyCv
