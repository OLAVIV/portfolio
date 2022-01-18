import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react'
import Home from './Pages/Home/Home';
import Games from './Pages/Games/Games';
import WallHoppa from './Pages/Games/WallHoppa';

const App: React.FC = () => {
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

