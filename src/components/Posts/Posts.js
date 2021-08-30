import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function PostsCard(props) {
 
  return (
    <Card className="posts-container" style={{width: "600px", height: "200px", border: "3px solid black", padding: "20px", borderRadius: "15px"}}>
      <CardActionArea>
        <CardContent>
          <Typography style={{color: "black", fontSize: "20px", textTransform: "uppercase", fontWeight: 800, marginBottom: '10px'}}>
            {props.username}
          </Typography>
          <Typography style={{padding: '1px'}}variant="body2" color="textPrimary" component="p" >
            {props.body}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.number_likes}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" id="thumbs_up">
        👍 {Math.floor(Math.random() * 100)}
        </Button>
        <Button size="small" color="primary" id="thumbs_down">
        👎 {Math.floor(Math.random() * 10)}
        </Button>
      </CardActions>
      <Typography style={{textAlign: "center"}}variant="body2" color="textSecondary" component="p">
            Comments (<strong style={{fontWeight: 800}}>{Math.floor(Math.random() * 10)}</strong>)
          </Typography>
    </Card>
  );
}