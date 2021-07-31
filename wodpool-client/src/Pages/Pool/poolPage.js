import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PoolCard from '../../Components/PoolCard/PoolCard';
import Header from '../../Components/HeaderFooter/Header';
import Grid from '@material-ui/core/Grid'
import { AuthenticationContext } from "../../Components/AuthenticationContext";
import usePools from "../../Components/usePools";
import Paper from '@material-ui/core/Paper';
import {Info} from '@material-ui/icons';
import JoinedCard from '../../Components/PoolCard/JoinedCard';
//
import wordmark from "../../assets/WP-Wordmark.png";
import { Button, ThemeProvider, Typography, makeStyles} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';


// Manage Style for Page
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    padding: "4em",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
  },
  btn: {
    width: "100%",
    backgroundColor: "#B00909",
  },
  img:{
    maxWidth:"60vw",
  }
}));


export default function PoolPage() {
  const classes = useStyles();
  const us = usePools();

  const OtherPools = () => {
    const us = usePools();
    const classes = useStyles();
    React.useEffect(() => {
      us.fetchWithoutHandle();
    }, []);
  
    return (
      <Paper className={classes.paper}>
          <PoolCard pools={us.pools} />
       </Paper>
    );
  };
  
  const MyPools = () => {
    const us = usePools();
    
    React.useEffect(() => {
      us.fetchWithHandle();
    }, []);
    return us.hasPools() ? 
    <div>
      <JoinedCard pools={us.pools}/>
    </div> 
    : 
    <div>
      Oh... you don't seem to be registered for any pools. 
      <Button variant="contained" color="primary" href="/pools">See Pools</Button>
    </div>;
  };
  
  

  return (
    <>

    <Header/>
    <div className={classes.root}>
      <div>
      <img className={classes.img} src={wordmark} alt="wodpool" />
      </div>
      <h2>All Available Pools</h2>
      <OtherPools/>
      <h2>Already Joined Pools</h2>
      <MyPools/>
    </div>
 


    </>
    
  );
}