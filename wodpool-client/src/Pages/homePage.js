import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from '../Components/HeaderFooter/Header';
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

//
import wordmark from "../assets/WP-Wordmark.png";
import { Button, ButtonGroup } from "@material-ui/core";

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
}));

export default function HomePage() {
  const classes = useStyles();
  const history = useHistory();

  // set pool data
  const [pools, getPools] = React.useState("");

  React.useEffect (() => {
    getAllPools();
  }, []);

  const getAllPools = () => {
    axios.get("/pools")
      .then((res) => {
        const allPools = res.data.pools;
        getPools(allPools);
      })
      .catch(error => console.error(`Error: ${error}`))
  }


  return (
    <>
    <Header/>
    <div className={classes.root}>
        <img src={wordmark} alt="wodpool" />
        <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={8}>
            <Paper className={classes.paper}>
              <h1>Welcome to Wodpool</h1>
              <p>Please mind our dust as we continue to add features to our Workout experience.</p>
              <ButtonGroup variant="contained" color="primary">
                <Button href="/pool">Back to Pools</Button>
                <Button href="/profile">Back to Profile</Button>
              </ButtonGroup>

            </Paper>
          </Grid>
        </Grid>

    </div>
    </>
    
  );
}
