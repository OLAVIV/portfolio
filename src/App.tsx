import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import React, { useState } from 'react'
import ClickCount from './components/clickCount';
import styles from "./App.module.scss"

const App: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    // Important! add your repositoryname to basename
    <Router basename='/portfolio'>
      <div>
      <p className= {styles.otsikko}> My Portfolio</p>
      <button className= {styles.btncolor} onClick= {() => setToggle(!toggle)}>
      MY Achievements
      </button>

      {
        toggle
          ?(
            <div>
              <h1><a href="https://github.com/OLAVIV" target="_blank"><button className= {styles.achi}>My github profile</button></a></h1>
              <h2><a href="https://github.com/alextoro306/SnakeFighters" target="_blank"><button className= {styles.achi}>Snake Fighters</button></a></h2>
            </div>
          )
          :null
          
      }


      </div>
    </Router>

  )
}

export default App
