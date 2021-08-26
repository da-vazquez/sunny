import React from 'react';
import './news.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import NewsArticleMain from '../NewsArticle/NewsArticle';

const News = () => {

  return (
    <div>
    <div className='hero-container'>
      <div className='hero-section-img'>
        <div className='hero-main-title'>
          <p>Paul signs 4 year deal worth $120 million</p>
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
  
    <div className='main-container'>
      <div className='sidebar-left'>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Suns"
          className="twitter-timeline"
          options={{height: 420, width: 400 }}/>
        </div>
      <div className='main-section'>
          <NewsArticleMain></NewsArticleMain>
      </div>
        <div className='sidebar-right'>sidebar right</div>
      </div>
    </div>
)}


export default News;