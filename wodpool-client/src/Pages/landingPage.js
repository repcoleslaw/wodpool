import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import wordmark from "../assets/WP-Wordmark.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    padding: "4em",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white'
  },
  btn: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#B00909",

  }
}));


function LandingPage() {
  const classes = useStyles();
  const history = useHistory();
  
  const redirectToLogin = () => history.push("/login");
  const redirectToRegistration = () => history.push("/registration");

  return(
    <div className={classes.root} >
        <img src={wordmark} alt="wodpool" />
        <Paper className={classes.paper}>
        <p>Welcome to WODPool.</p>
        <Button className={classes.btn} onClick={redirectToLogin}>Login</Button>
        <Button className={classes.btn} onClick={redirectToRegistration}>Register</Button>
        </Paper>

    </div>
  );


}

export default LandingPage;
