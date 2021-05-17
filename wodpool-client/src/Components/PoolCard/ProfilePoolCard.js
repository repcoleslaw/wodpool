import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import placeholder from "../../assets/placeholder.png";
import { findLastIndex } from "lodash";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  media: {
    width: "35%",
  },
  card: {
    margin: "2em",
    padding: "1em",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  btn: {
    float: "right",
  },
});

export default function ProfileCard(props) {
  const classes = useStyles();
  


  const displayPools = (props) => {
    const { pools } = props;

    if (pools.length > 0) {
      return pools.map((pool, index) => {
        const submit = () => {
          return axios.post(`/registration?pool=${pool.id}`)
          .then((res) => {
            alert("SUCCESS")})
          .catch((err)=>{
              console.log(err);
            })
          };
     
        

        return (
          <div key={index}>
            <Card className={classes.card}>
              <Typography component="h1" variant="h5" color="secondary">
                {pool.name}
              </Typography>
              {`To Do: Add a submit score per event`}
              

              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                
              >
                Submit
              </Button>
            </Card>
          </div>
        );
      });
    } else {
      return <p style={{ color: "black" }}> haven't found pools</p>;
    }
  };

  return <>{displayPools(props)}</>;
}
