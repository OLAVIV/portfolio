import React from 'react'
import styles from "./myGit.module.scss"
type MyFirstComponentProp = {

}

const MyFirstComponents: React.FC<MyFirstComponentProp> = () => {
  return (
    <div>
      <h1><a href="https://github.com/OLAVIV" target="_blank"><button className= {styles.git}>Here</button></a></h1>
    </div>
    
  )
}

export default MyFirstComponents