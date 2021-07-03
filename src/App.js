import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav';
import LoginForm from './components/Login'
import RegisterForm from './components/Register'
import News from './components/News'
import CommentBox from './components/Community'
import RosterCard from './components/RosterCards'
import teamRoster from './components/TeamRoster';
import ContactForm from './components/Contact'

const roster = teamRoster;

const App = () => {
    const [player] = useState(roster)
    console.log('player list', player)
    
   
  
  return (
    <Router>
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/' component={News} />
        <Route path='/schedule' />
        <Route path='/community' component={CommentBox}/>
        <Route path='/roster'>
          <RosterCard player={player}/>
        </Route>
        <Route path='/login' component={LoginForm}/>
        <Route path='/sign-up' component={RegisterForm}/>
        <Route path='/contact' component={ContactForm}/>
      </Switch>
    </div>
    </Router>
  );
}
export default App;