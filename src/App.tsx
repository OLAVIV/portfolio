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
import Home from './Pages/Home/Home';
import Games from './Pages/Games/Games';
import WallHoppa from './Pages/Games/WallHoppa';
const App: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component= { Home } />
        <Route exact path="/mygames" component= { Games } />
        <Route exact path="/wallhopperbuilds" component= { WallHoppa } />
      </Switch>
    </Router>
  )
}

export default App

