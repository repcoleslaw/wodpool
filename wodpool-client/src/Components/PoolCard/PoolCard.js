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
});

export default function Poolcard(props) {
  const classes = useStyles();

  console.log(props.pools);

  const displayPools = (props) => {
    const { pools } = props;

    if (pools.length > 0) {
      return pools.map((pool, index) => {
        const join = () => {
          return axios.post(`/registration?pool=${pool.id}`).then(() => {
            alert("SUCCESS");
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
                  <Typography variant="h5" component="h2">
                    {pool.name}
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <PersonOutlineIcon color="primary" />
                    0/{pool.maximumCompetitors}
                  </div>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {pool.description}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <Button variant="contained" color="primary" onClick={join}>
                Join Pool
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
