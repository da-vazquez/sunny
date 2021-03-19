import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import RosterCard from './components/RosterCards'
import teamRoster from './components/TeamRoster';

const roster = teamRoster;

const App = () => {
    const [player] = useState(roster)
    console.log('player list', player)
    
   
  
  return (
    <Router>
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/roster'>
          <RosterCard player={player}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;