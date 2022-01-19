import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react'
import Home from './Pages/Home/Home';
import Games from './Pages/Games/Games';
import WallHoppa from './Pages/Games/WallHoppa';
import AboutMe from './Pages/About/AboutMe';
import MyCv from './Pages/mycv/MyCv';

const App: React.FC = () => {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component= { Home } />
        <Route exact path="/mygames" component= { Games } />
        <Route exact path="/wallhopperbuilds" component= { WallHoppa } />
        <Route exact path="/aboutme" component= { AboutMe } />
        <Route exact path="/mycv" component= {MyCv} />
        {/* <Route "/notfound" component= {NotFound} /> */}
      </Switch>
    </Router>
  )
}

export default App

