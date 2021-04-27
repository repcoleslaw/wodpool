import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PoolCard from '../Components/PoolCard';
import Header from '../Components/HeaderFooter/Header';

//
import wordmark from "../assets/WP-Wordmark.png";
import { Button } from "@material-ui/core";

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
        <PoolCard pools={pools}/>
    </div>
    </>
    
  );
}
