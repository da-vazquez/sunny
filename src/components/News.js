import React from 'react'
import { 
  TwitterTimelineEmbed, 
} from 'react-twitter-embed';

const News = () => {


return (
  <div>
  <div className='hero-container'>
      <div className='hero-section-img'>
      <div className='hero-main-title'>
        <p>Suns stun Clippers in Game 2 at Phoenix</p>
        </div>
      </div>
      
        <div className='hero-section-sidebar-container'>
          <div className='hero-section-sidebar-links'>
            
          <div className='sidebar-box'>box1
            <p>aricle info here!</p>
          </div>
          <div className='sidebar-box'>box2
            <p>aricle info here!</p>
          </div>
          <div className='sidebar-box'>box3
          <p>aricle info here!</p>
          </div>
          <div className='sidebar-box'>box4
          <p>aricle info here!</p>
          </div>
        </div>
      </div>  
  </div>
  <div className='twitter-feed'>
  <TwitterTimelineEmbed
  sourceType="profile"
  screenName="Suns"
  options={{height: 300, width: 500}}/>
  <TwitterTimelineEmbed
  sourceType="profile"
  screenName="DevinBook"
  options={{height: 300, width: 500}}/>
  </div>
  </div>
)}


export default News;