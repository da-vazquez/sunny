import React from 'react'

const NewsArticleMain = (props) => {

  return (
    <>
      <h3>Latest News and Rumors</h3>
        <ul>
          <li>{props.article1}</li>
          <li>{props.article2}</li>
          <li>{props.article3}</li>
          <li>{props.article4}</li>
        </ul>
    </>
    )
  }

export default NewsArticleMain;
