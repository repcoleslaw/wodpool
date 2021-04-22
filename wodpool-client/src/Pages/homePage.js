import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  const [pool, setPool] = React.useState("");

  const handleLoad = (e) => {
    e.preventDefault();
    return axios
      .get("/pools")
      .then((res) => {
        setPool({
          pools: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  let poolsMarkup = pool ? <p>TeeHee, I have the pool data and you can't render it</p> : <p>loading...</p>;

  const printData = (e) => {
    e.preventDefault();
    console.log(pool)
  }

  return (
    <div className={classes.root} onLoad={handleLoad}>
        <img src={wordmark} alt="wodpool" />
        {poolsMarkup}
        <Button onClick={printData}> print pools</Button>
    </div>
  );
}
