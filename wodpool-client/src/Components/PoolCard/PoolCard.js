import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//MUI
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// assets
import { useStyles } from "../../util/MakeStyles";
import placeholder from "../../assets/placeholder.png";
import ShareIcon from "@material-ui/icons/Share";

export default function Poolcard(props) {
  const classes = useStyles();
  const [isRegistered, setRegistered] = React.useState(true);

  console.log(props);

  const handleShare = () => {
    alert("Sharing not ready yet!");
  };

  const displayPools = (props) => {
    const { pools } = props;
    console.log(pools);

    return pools.map((pool, index) => {
      // joining pool function
      const join = () => {
        return axios
          .post(`/registration?pool=${pool.id}`)
          .then(() => {
            alert("SUCCESS");
          })
          .catch((err) => {
            alert("You've already registered");
            console.log(err);
          });
      };

      if (pool.price) {
        return(
          <Grid item key={index}>
          <Card className={classes.cardBase}>
            <CardActionArea
              component={Link}
              to={`pools/${pool.id}`}
              className={classes.cardActionArea}
            >
              <Typography variant="caption" className={classes.premiumPool}>PREMIUM: ${pool.price}</Typography>
              <CardMedia className={classes.cardMedia}></CardMedia>
              <CardContent>
                <Typography variant="h5">{pool.name}</Typography>
                <Typography variant="subtitle1">{pool.description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                component={Link}
                to={`pools/${pool.id}`}
              >
                View Pool
              </Button>

              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={join}
              >
                Join Pool
              </Button>

              <Button size="small" color="primary" onClick={handleShare}>
                <ShareIcon style={{ padding: "0em 0.25em" }} />
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
        )
      } else {
        return (
          <Grid item key={index}>
            <Card className={classes.cardBase}>
              <CardActionArea
                component={Link}
                to={`pools/${pool.id}`}
                className={classes.cardActionArea}
              >
                <CardMedia className={classes.cardMedia}></CardMedia>
                <CardContent>
                  <Typography variant="h5">{pool.name}</Typography>
                  <Typography variant="subtitle1">{pool.description}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardAction}>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  component={Link}
                  to={`pools/${pool.id}`}
                >
                  View Pool
                </Button>
  
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  onClick={join}
                >
                  Join Pool
                </Button>
  
                <Button size="small" color="primary" onClick={handleShare}>
                  <ShareIcon style={{ padding: "0em 0.25em" }} />
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )};

        }
      );
      
    };

    return <>{displayPools(props)}</>;
  };


 

