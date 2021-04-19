import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import placeholder from '../assets/placeholder.png'
import { findLastIndex } from 'lodash';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    display: 'flex'
  },
  details:{
    display:'flex',
    flexDirection:'column'
  },
  content:{
    flex:'1 0 auto'
  },
  media: {
    width:"35%",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  axios.get()
 

  return (
    <Card className={classes.root}>
       <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={placeholder}
          title="Contemplative Reptile"
        />
      <div className={classes.details}>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pool Title
            {/* {pool.title} */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pool Description
            {/* {pool.desc} */}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Join Pool
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}