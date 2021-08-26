import React from 'react'
import './rosterCards.css'

const RosterCard = (props) => {

return (
  <div className='player-container'>
    <h1 style={{textAlign: 'center', color: 'white', marginTop: '30px'}}>2020-2021 Phoenix Suns</h1>
    <ul className='player-info'>
      {props.player.map((user) => (
        <li>
          <h2>{user.name}</h2>
          <h5>{user.position}</h5>
          <p className='stats'>{user.stats}</p>
          <div className='image-container'>
          <img src={user.image} alt='player'/>
        </div>
      </li>
    ))}
  </ul>
</div>
)
}


export default RosterCard;