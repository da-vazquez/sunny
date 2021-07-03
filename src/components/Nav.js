import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {logout} from "../actions/UserActions"
import {CustomH3, UserInfo} from './Styled'



const Nav = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const username = useSelector(state => state.login.username)
  const loggedIn = useSelector(state => state.login.loggedIn)
  console.log("user info:", username)
  
  function logggedOut() {
    dispatch(logout())
    history.push('/login')
}
  
  
return (
  <div className='nav'>
    <CustomH3>sunny times</CustomH3>
    <div className='nav-btns'>
      <Link to= '/'>
        <button>Home</button>
        </Link>

      <Link to= '/schedule'>
        <button>Schedule</button>
        </Link>

      <Link to= '/community'>
        <button>Community</button>
        </Link>

      <Link to= '/roster'>
        <button>Roster</button>
        </Link>

      {!loggedIn ?
       <Link to= '/login'>
        <button>Sign In</button>
      </Link> : ""}

      {!loggedIn ?  
      <Link to= '/sign-up'>
        <button>Register</button>
        </Link> : ""}

      <Link to= '/contact'>
        <button>Contact</button>
        </Link>
      
      {loggedIn ? 
        <button onClick={logggedOut}>Sign Out</button> : ""}
    </div>
      {loggedIn ? 
        <UserInfo>Welcome {username}!</UserInfo> : <UserInfo>Please login</UserInfo>}
    </div>
    
  )
  
}



export default Nav