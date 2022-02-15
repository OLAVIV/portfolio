import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react'
import styles from "./App.module.scss"
import Navbar from './Components/Navbar/Navbar';
import Games from './Pages/Games/Games';
import WallHoppa from './Pages/Games/WallHoppa';
import AboutMe from './Pages/About/AboutMe';
import MyCv from './Pages/mycv/MyCv';
import { useDarkmodeContext } from './Components/Context/darkmodeContextProvider';
import Home from './Pages/Home/Home';
import NotFound from './Pages/Notfound/NotFound';


const App: React.FC = () => {
  const { useDarkmode } = useDarkmodeContext();
  return (
    <div className={ useDarkmode  ? styles.dark : styles.light }>
    <Router>
      <Route
        render={({ location }) => ['/', '/mycv', '/mygames', '/wallhopperbuilds', '/aboutme'].includes(location.pathname)
          ? <Navbar/>
          : null
       }
      />
      <Switch>
        <Route exact path="/" component= { Home } />
        <Route exact path="/mygames" component= { Games } />
        <Route exact path="/wallhopperbuilds" component= { WallHoppa } />
        <Route exact path="/aboutme" component= { AboutMe } />
        <Route exact path="/mycv" component= {MyCv} />
        <Route component= {NotFound} />
      </Switch>
    </Router>
    </div>
  )
}

export default App

