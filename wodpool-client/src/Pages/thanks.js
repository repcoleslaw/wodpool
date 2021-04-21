import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
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


function Thanks() {
  const classes = useStyles();
  const history = useHistory();
  
  const redirectToHome = () => history.push("/");

  return(
    <div className={classes.root}>
      <Grid container style={{justifyContent:"center"}} xs={12} sm={6}>
        <Grid item className={classes.paper}>
        <p> Thanks for Registering! An email is on its way to complete the process! </p>
        
        <Button variant="contained" className={classes.btn} onClick={redirectToHome}>Back to Home Page</Button>
        </Grid>
   
      </Grid>
    </div>
  );


}

export default Thanks;