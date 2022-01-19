import React from 'react';
import './Profile.css';

const Profile = (props) => {
  return (
    <div className='profile-container'>
      <div className='profile-links'>
        <ol>
          <li>{props.picture}</li>
          <li>{props.name}</li>
          <li>Settings</li>
          <li>Contact</li>
          <li>Theme</li>
        </ol>
      </div>
    </div>
  )
}


export default Profile;