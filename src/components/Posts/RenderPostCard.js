import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const RenderPostCard = (props) => {
  return (
    <Card style={{marginBottom: "3em", margin: "0 auto", width: "600px", height: "200px", border: "3px dotted black", padding: "20px"}}>
      <CardActionArea>
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
        👍 10
        </Button>
        <Button size="small" color="primary" id="thumbs_down">
        👎 2
        </Button>
      </CardActions>
    </Card>
  )
}


export default RenderPostCard;