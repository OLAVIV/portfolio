import React from 'react'
import { useDarkmodeContext } from '../../Components/Context/darkmodeContextProvider'
import styles from './NotFound.module.scss'

type NotFoundProps = {

}

const NotFound: React.FC<NotFoundProps> = () => {
    const {useDarkmode} = useDarkmodeContext();
  return (
    <div className={useDarkmode ? styles.dark : styles.light}>
      <p className={styles.otsikko}> Error 404 </p>
      
    </div>
  )
}

export default NotFound
