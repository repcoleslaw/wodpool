import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PoolCard from '../../Components/PoolCard/PoolCard';
import Header from '../../Components/HeaderFooter/Header';
import Grid from '@material-ui/core/Grid'

//
import wordmark from "../../assets/WP-Wordmark.png";
import { Button, ThemeProvider, Typography, makeStyles} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';

// Manage Style for Page
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#B00909"
    },
    secondary: {
      main: "#B00909"
    },
  },
});

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
    <ThemeProvider theme={theme}>
    <Header/>
    <div className={classes.root}>
      <div>
      <img className={classes.img} src={wordmark} alt="wodpool" />
      </div>
      <PoolCard pools={pools}/>
    </div>
    </ThemeProvider>


    </>
    
  );
}