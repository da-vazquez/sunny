import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
/* import CardMedia from '@material-ui/core/CardMedia'; */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 200
  },
  media: {
    height: 150
    
    
  },
});

export default function PostsCard(props) {
  const classes = useStyles();

  return (
    <Card style={{marginBottom: "3em", margin: "0 auto", width: "300px", height: "200px"}}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image=""
          title=""
        /> */}
        <CardContent>
          <Typography style={{color: "black"}}>
            {props.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            {props.body}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Likes:{props.number_likes}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" id="thumbs_up">
        👍
        </Button>
        <Button size="small" color="primary" id="thumbs_down">
        👎
        </Button>
      </CardActions>
    </Card>
  );
}