import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

<<<<<<< HEAD
//
import wordmark from '../assets/WP-Wordmark.png';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    padding: "4em"

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white'
  },
  btn: {
    width: '100%',
    textDecoration:"none",
    color:'white'
  }
}));

export default function HomePage() {
  const classes = useStyles();
=======
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Home page will handle all the pools available to the user.
// This will also be the hub to which future features will click into
// ie - gym finder, tips, links back to the store on the godaddy site, etc.

import wordmark from '../assets/whitewordmark.png'

import PoolCard from '../Components/PoolCard.js';

>>>>>>> 823b38c49e065ef4ed3e75ea265704ec126b01d8

  return (
<<<<<<< HEAD
    <div className={classes.root}>
      <Grid container spacing={3} style={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          <img src={wordmark} alt="wodpool" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <h2>It is time to register your account!</h2>
            <Grid container spacing={3} style={{justifyContent:"center"}}>
        <Grid item xs={12} sm={4}>
          <Button href="/registration"className={classes.btn} variant="contained" color="primary">
         Register
           </Button> 
           </Grid>
           <Grid item xs={12} sm={4}>          
           <Button className={classes.btn} variant="contained" color="secondary">
            Login
          </Button>
        </Grid>
        </Grid>
          </Paper>
        </Grid>
        </Grid>
=======
    <div>
      <Grid container>
        <img src={wordmark} alt="wodpool" />
      </Grid>
      <Grid container xs={12}>
       <PoolCard/>
      </Grid>

    </div>
  )
}
>>>>>>> 823b38c49e065ef4ed3e75ea265704ec126b01d8


    </div>
  );
}