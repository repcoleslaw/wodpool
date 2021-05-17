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
import { AuthenticationContext } from "../AuthenticationContext/AuthenticationContext";


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
  title:{
    color:"#fff"
  },
  content:{
    color:"#fff"
  }
});



export default function Poolcard(props) {
  const classes = useStyles();
  const auth = React.useContext(AuthenticationContext);



  const displayPools = (props) => {
    const { pools } = props;

    if (pools.length > 0) {
      return pools.map((pool, index) => {
      //  Join pool function
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
          <div key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="pool-splash-image"
                  height="200"
                  image={placeholder}
                  title="Pool Image"
                />
                <CardContent>
                  <Typography variant="h5" component="h2" className={classes.title}>
                    {pool.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    className={classes.content}
                    component="p"
                  >
                    {pool.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button variant="contained" color="primary" onClick={join}>Join!</Button>
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
