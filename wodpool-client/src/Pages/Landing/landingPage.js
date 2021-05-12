import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import wordmark from "../../assets/WP-Wordmark.png";
import banner from "../../assets/WP-HeroBanner-v1.jpg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    color: 'white'
  },
  btn: {
    margin: theme.spacing(3, 1),
  },
  img: {
    maxWidth:"65vw",
    padding:"4em 0",
  },
  hero:{
    height: "90vh",
    backgroundImage:`url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

  }
}));


function LandingPage() {
  const classes = useStyles();
  const history = useHistory();
  
  const redirectToLogin = () => history.push("/login");
  const redirectToRegistration = () => history.push("/registration");

  return (
    <div className={classes.root}>
      <div className={classes.hero}>
      <Grid container alignItems='center'direction='column'>
        <Grid item xs={10} sm={6} md={4} lg={3}>
          <img className={classes.img} src={wordmark} alt="wodpool" />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Typography component="p" variant="body">
              Welcome!
            </Typography>

            <Button className={classes.btn} variant="contained" color="primary" onClick={redirectToLogin}>
              Login
            </Button>
            <Button className={classes.btn} variant="contained" color="primary" onClick={redirectToRegistration}>
              Register
            </Button>
          </Paper>
        </Grid>
      </Grid>

      </div>
    </div>
  );


}

export default LandingPage;
