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


const useStyles = makeStyles({
  root: {
    flexGrow:1,
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },

  title:{
    color:"#fff"
  },
  content:{
    color:"#fff"
  }
});



export default function Poolcard(props) {
  const classes = useStyles();

  const displayPools = (props) => {
    const { pools } = props;

    
      return pools.map((pool, index) => {
        // joining pool function
        const join = () => {
          return axios.post(`/registration?pool=${pool.id}`).then(() => {
            alert("SUCCESS");
          })
          .catch((err) => {
            alert("You've already registered")
            console.log(err)
          });
        };
        
        return (
          <div key={index}> This should be the name {pool.name}
          </div>
        );
      });
  };

  return <>{displayPools(props)}</>;
}
