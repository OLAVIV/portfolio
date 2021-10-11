import React from 'react'
import styles from "./myGames.module.scss"
type MyFirstComponentProps = {

}

const MyFirstComponent: React.FC<MyFirstComponentProps> = () => {
  return (
    <div>
      <h2><a href="https://github.com/alextoro306/SnakeFighters" target="_blank"><button className= {styles.achii}>Snake Fighters</button></a></h2>
    </div>
    
  )
}

export default MyFirstComponent

