import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import React, { useState } from 'react'
import ClickCount from './components/clickCount';
//import { myGames } from './components/myGames';
import styles from "./App.module.scss"
import MyFirstComponent from './components/myFirstComponent';
import MyFirstComponents from './components/myGit';

const App: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    // Important! add your repositoryname to basename
    <Router basename='/portfolio'>
      <div>
      <p className= {styles.otsikko}> My Portfolio</p>

      {/* {
        toggle
          ?(
            <div>
              <h1><a href="https://github.com/OLAVIV" target="_blank"><button className= {styles.achi}>My github profile</button></a></h1>
            </div>
          )
          :null
          
      } */}
      
      </div>
      <div className={styles.navbar}>
      <Link to='/home' className= {styles.home} >Home page</Link>
      <Link to='mygames' className= {styles.games} >My games</Link>
      <Link to='mygitprofile' className= {styles.git} > My github</Link>
      <Switch>
      <Route exact path='/mygames' component={MyFirstComponent}/>
      <Route exact path='/mygitprofile' component={MyFirstComponents}/>
      </Switch>
      </div>
    </Router>
  )
}

export default App

