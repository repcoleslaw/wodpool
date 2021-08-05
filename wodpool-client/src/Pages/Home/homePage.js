import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from '../../Components/HeaderFooter/Header';
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

//
import wordmark from "../../assets/WP-Wordmark.png";
import banner from "../../assets/WP-HeroBanner-v1.jpg";
import { Button} from "@material-ui/core";
import { Typography } from "@material-ui/core";

//testing styleshook
import { useStyles } from "../../util/MakeStyles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     margin: "0",
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     backgroundColor: "rgba(0,0,0,0.5)",
//     color: "white",
//     margin: "2em 0"
//   },
//   btn: {
//     margin: "1em 0em"
//   },
//   img: {
//     maxWidth: "65vw",
//     padding: "4em 0",
//   },
//   hero: {
//     height: "40vh",
//     backgroundImage: `url(${banner})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   }
// }));

export default function HomePage(props) {
  const classes = useStyles(props);
  const history = useHistory();


  return (
    <div className={classes.root}>
      <Header />
      {/* Hero Image - Full screen on mobile, 60% on Monitor/Tablet */}
      <div className={classes.hero}>
        <Grid container justify='center'>
          <Grid item xs={10} sm={6} md={4} lg={3}>
            <img className={classes.img} src={wordmark} alt="wodpool" />
          </Grid>
        </Grid>
      </div>
      {/* Available Pools Grid */}
      <Typography component="h1" variant="h3">
          Available Pools
      </Typography>
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
          </Paper>
        </Grid>
      </Grid>

      {/* More Info */}
      <Typography component="h1" variant="h3">
          Additional Resources
      </Typography>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            dont talk about wodpool
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            gym finder // coming soon
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
