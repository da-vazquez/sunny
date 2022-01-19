import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../../utils/axiosWithAuth";
import './news.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import NewsArticleMain from '../NewsArticle/NewsArticle';

import {Articles} from './NewsArticle'

const News = () => {
  const [main, setMain] = useState([])
  const [ article ] = Articles;

  useEffect(() => {
    axiosWithAuth().get('/api/articles')
      .then(res => {
        console.log("articles:", res.data)
        setMain(res.data[0])
        return res.data
      })
      .catch(err => {
        console.log(err, "couldn't load posts")
      })
  }, [])

  return (
    <div className='news-container'>
      <div className='main-article'>
        <img id='main-img' src={main.image} alt='main article'/>
        <p id="main-link">{main.title}</p>
      </div>
      
      <div className='side-articles'>
        <div className='article-1'>
          <img className='img-1' src={article.box1Img} alt='main'/>
          <p className='sidebar-link1'>{article.article2}</p>
        </div>
        <div className='article-2'>
          <img className='img-2' src={article.box2Img} alt='main'/>
          <p className='sidebar-link2'>{article.article3}</p>
        </div>
        <div className='article-3'>
          <img className='img-3' src={article.box3Img} alt='main'/>
          <p className='sidebar-link3'>{article.article4}</p>
        </div>
        <div className='article-4'>
          <img className='img-4' src={article.box4Img} alt='main'/>
          <p className='sidebar-link4'>{article.article5}</p>
        </div>
      </div>
  </div>
)}


export default News;