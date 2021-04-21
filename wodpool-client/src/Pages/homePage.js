import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

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
    backgroundColor:"#B00909"
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
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
          <Button className={classes.btn} variant="contained" color="secondary" href="/registration">
            Register
           </Button> 
           </Grid>
           <Grid item xs={12} sm={4}>          
           <Button className={classes.btn} variant="contained" color="secondary" href="/login">
            Login
          </Button>
        </Grid>
        </Grid>
          </Paper>
        </Grid>
        </Grid>


    </div>
  );
}