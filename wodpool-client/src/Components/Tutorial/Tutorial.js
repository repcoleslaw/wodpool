import React from 'react'
import {Link} from 'react-router-dom';

//import mui
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//import assets
import Header from '../HeaderFooter/Header';
import placeholder from '../../assets/placeholder.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "2em",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    backgroundColor: "rgba(0,0,0,0.25)",
    color: "white",
  },
  img: {
    height: "40px",
    width: "40px",
  },
}));



function Tutorial( props) {
  const classes = useStyles();

  

  return (
  
   <>
      <Header />
      <div className={classes.root}>
        {/* Put Profile Banner */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={8}>
            <Paper className={classes.paper}>
            Welcome to Wodpool
            <h1>An Introduction</h1>
            <p>Welcome to Wodpool, a fun and competitive way to do the heavy workouts and win cool prizes. We are always looking to improve the product and the fun, but to do that we first need to explain how this whole thing works.</p>

            <h2>Step 1: Join a Pool</h2>
            <p>The first thing you need to do is to register for a pool. To do that, head over to the <Link to="/pools">Pools page</Link> to find one.</p>
            {/* TODO: Place an Image */}
            <img src={placeholder} alt="placeholder"/>
            <h2>Step 2: Do the Workout!</h2>
            <p>Once you have joined a pool, you will be notified when the release of the mystery workouts go live. The workouts will be initially posted on our YouTube page with a video explanation on the movements.</p>
            <Button href=""></Button>
            <img src={placeholder} alt="placeholder"/>
            {/* TODO: Place an image of the workout */}


            </Paper>

          </Grid>
          </Grid>



      

      </div>
  

   </>
  )
}

export default Tutorial
