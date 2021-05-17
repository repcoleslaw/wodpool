import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from '../../Components/HeaderFooter/Header';
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

//
import wordmark from "../../assets/WP-Wordmark.png";
import banner from "../../assets/WP-HeroBanner-v1.jpg";
import { Button, ButtonGroup } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"0",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    margin:"2em 0"
  },
  btn: {
    margin:"1em 0em"
  },
  img: {
    maxWidth:"65vw",
    padding:"4em 0",
  },
  hero:{
    height: "40vh",
    backgroundImage:`url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const history = useHistory();


  return (
    <div className={classes.root}>
      <Header/>
    <div className={classes.hero}>
    <Grid container alignItems='center'direction='column'>
      <Grid item xs={10} sm={6} md={4} lg={3}>
        <img className={classes.img} src={wordmark} alt="wodpool" />
      </Grid>
      </Grid>

    </div>
    <Grid container justify="center" spacing={4}>
    <Grid item xs={12} sm={8}>
        <Paper className={classes.paper}>
          <Typography component="h2" variant="h5">
            Welcome!
          </Typography>
          <Typography component="p" variant="body">
            Please excuse the mess as we continue to develop the app!
          </Typography>

          <Button className={classes.btn} href="https://donttalkaboutwodpool.ca/" variant="contained" color="primary" >
            How it Works
          </Button>
          <ButtonGroup>
          <Button className={classes.btn}  href="/pools" variant="contained" color="primary" >
            To the Pools
          </Button>
          <Button className={classes.btn} href="/profile" variant="contained" color="primary" >
            To your Profile
          </Button>

          </ButtonGroup>
          
          
        </Paper>
      </Grid>
    </Grid>
     
    
  </div>
  );
}
