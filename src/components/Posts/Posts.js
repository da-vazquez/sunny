import React, { useState } from 'react';
import "./posts.css";

import {Card, CardActionArea, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {BiCommentDetail, BiShareAlt, BiStar, BiDotsHorizontalRounded} from 'react-icons/bi'
import {GoReply} from 'react-icons/go'
import {ImArrowUp, ImArrowDown} from 'react-icons/im'

const PostsCard = (props) => {
  const [likes, setLikes] = useState(props.number_likes)
  const [dislikes, setDislikes] = useState(props.number_dislikes)


  const likeHandler = (e) => {
    e.preventDefault()
    setLikes(likes + 1)
    //will need to send crud request to api in future
  }

  const dislikeHandler = (e) => {
    e.preventDefault()
    setDislikes(dislikes + 1)
    //will need to send crud request to api in future
  }

  const favoriteHandler = (e) => {
    e.preventDefault()
    //will need to send crud request to api in future
  }

 
  return (
    <Card className="posts-container" style={{width: "650px", height: "500px", border: "5px solid lightgrey", padding: "20px", borderRadius: "15px"}}>
      
      <CardActions className='card-user-actions'>
        <Button className='posts-thumbs' onClick={likeHandler} size="small" color='primary' id="thumbs_up"><ImArrowUp id="arrow-up"/>{likes}</Button>
        <Button className='posts-thumbs' onClick={dislikeHandler} size="small" color='black' id="thumbs_down"><ImArrowDown id="arrow-down"/>{dislikes}</Button>
    </CardActions>
      
      <CardActionArea style={{backgroundColor: "white"}}>
        <CardContent>
          <Typography style={{color: "black", fontSize: "10px", textAlign: "center", textTransform: "uppercase", fontWeight: 400, marginBottom: '15px'}}>posted by: {props.username}</Typography>
          <Typography style={{padding: '1px', textAlign: 'center', fontWeight: 800}}variant="body2" color="textPrimary" component="p" >{props.body}</Typography>
        </CardContent>
        </CardActionArea>
      
      <div className='img-area'>
        <img src="https://i.redd.it/l2u6qznmrab81.jpg" alt="shared content"/>
      </div>
      
      
      <CardActions className="hello">
        <Typography style={{textAlign: "left"}}variant="body2" color="textSecondary" component="p"><BiCommentDetail/> Comments: (3)</Typography>
        <Typography style={{textAlign: "center"}}variant="body2" color="textSecondary" component="p"><BiShareAlt/> Share</Typography>
        <Typography style={{textAlign: "center"}} variant="body2" color="textSecondary" component="p"><BiStar onClick={favoriteHandler}/> Favorite </Typography>
        <Typography style={{textAlign: "center"}} variant="body2" color="textSecondary" component="p"><BiDotsHorizontalRounded onClick={favoriteHandler}/></Typography>
        <Typography style={{textAlign: "center"}}variant="body2" color="textPrimary" component="p">Reply<GoReply/></Typography>
      </CardActions>        
    </Card>
  );
}


export default PostsCard;