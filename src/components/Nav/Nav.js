import React from 'react';
import "./nav.css"
import { Link, useHistory } from 'react-router-dom';
import {CustomH3, UserInfo} from '../Styled'
import { useAuth0 } from "@auth0/auth0-react";
import {BiBell, BiMessageDetail} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'

const Nav = () => {
  const { user, isAuthenticated, logout } = useAuth0()
  console.log("user_info:", user)
  
return (
  <div className='nav'>
  <div className='nav-logo'><CustomH3>sunny times</CustomH3></div>
    <div className='nav-btns'>
      <Link to= '/'>
        <button>News</button>
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

      <Link to= '/contact'>
        <button>Contact</button>
        </Link>
      
      {!isAuthenticated ?
       <Link to= '/login'>
        <button>Sign In</button>
      </Link> : 
        <button onClick={() => logout({ returnTo: window.location.origin })}>Sign Out</button>}
        {/*move this to profile dropdown*/}
    </div>
    {isAuthenticated ?
    <div className='nav-user'>
        <BiBell className='nav-user-icons'/>
        <BiMessageDetail className='nav-user-icons'/>
        <CgProfile className='nav-user-icons'/>
        </div>
         : 
        <div className='nav-user'>
         <UserInfo>Please login</UserInfo>
      </div>}
    </div>
    
  )
  
}



export default Nav