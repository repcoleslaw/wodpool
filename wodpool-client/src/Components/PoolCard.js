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

export default function Poolcard(props) {
  const classes = useStyles();

  console.log(props.pools)

  const displayPools = (props) =>{
    const {pools} = props;

    if (pools.length > 0) {
      return (
        pools.map((pool, index) => {
          console.log(pool);
          return(
              // STYLE THE POOL CARDS HERE
              <p style={{color:'black'}}>{pool.name}</p>

          )
        })
      )
    } else { 
      return (<p style={{color:'black'}}> haven't found pools</p>)
    }
  }


  return (
    <>
      {displayPools(props)}
    </>
  );
}