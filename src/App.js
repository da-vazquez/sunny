import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//components
import Nav from './components/Nav/Nav';
import LoginForm from './components/Login/Login'
import News from './components/News/News'
import CommentBox from './components/Community/Community'
import CalendarContainer from './components/Calendar/Calendar';
import RosterCard from './components/RosterCards/RosterCards'
import teamRoster from './components/TeamRoster/TeamRoster';
import ContactForm from './components/Contact/Contact'

const roster = teamRoster;

const App = () => {
  const [player] = useState(roster)
  //pull this data from api later
  
  return (
    <Router>
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/' component={News} />
        <Route path='/schedule' component={CalendarContainer}/>
        <Route path='/community' component={CommentBox}/>
        <Route path='/roster'>
          <RosterCard player={player}/>
        </Route>
        <Route path='/login' component={LoginForm}/>
        <Route path='/contact' component={ContactForm}/>
      </Switch>
    </div>
  </Router>
  );
};
export default App;