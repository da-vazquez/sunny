import React from 'react';
import './news.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import NewsArticleMain from '../NewsArticle/NewsArticle';

import {Articles} from './NewsArticle'

const News = () => {
  const [ article ] = Articles;

  return (
    <div>
    <div className='hero-container'>
      <div className='hero-section-img'>
        <div className='hero-main-title'>
          <p>{article.title}</p>
          </div>
        </div>
          <div className='hero-section-sidebar-container'>
            <div className='hero-section-sidebar-links'>  
              <div className='sidebar-box'>
                <img className='sidebar-img' src={article.box1Img} alt='news'/>
              <p>{article.article2}</p>
            </div>
            <div className='sidebar-box'>
              <img className='sidebar-img' src={article.box2Img} alt='news'/>
              <p>{article.article3}</p>
          </div>
            <div className='sidebar-box'>
              <img className='sidebar-img' src={article.box3Img} alt='news'/> 
              <p>{article.article4}</p>
            </div>
            <div className='sidebar-box'>
              <img className='sidebar-img' src={article.box4Img} alt='news'/>
              <p>{article.article5}</p>
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
        <div className='sidebar-right'>
          <h3>Community Posts</h3>
      </div>
    </div>
  </div>
)}


export default News;