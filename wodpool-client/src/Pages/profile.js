import React from "react";
import { AuthenticationContext } from "../Components/AuthenticationContext";
import Header from "../Components/HeaderFooter/Header";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom';

//import assets
import placeholder from "../assets/placeholder.png";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "2em",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    backgroundColor: "rgba(0,0,0,0.25)",
    color: "white",
  },
  img: {
    height: "40px",
    width: "40px",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [profileData, setProfileData] = React.useState("");

  const auth = React.useContext(AuthenticationContext);

  React.useEffect (() => {
    getMyProfile();
  }, []);

  const getMyProfile = () => {
    axios.get("/profile")
    .then((res) =>{
      const myProfile = res.data.profile;
      setProfileData(myProfile);
      console.log(myProfile)
    })
    .catch(error => console.error(`Error: ${error}`))
  }
  return (
    <>
      <Header />
      <div className={classes.root}>
        {/* Put Profile Banner */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={8}>
            <Paper className={classes.paper}>
              <h2>Welcome back,{auth.profile.firstName} </h2>
              {auth?.profile
                ? `Hey, ${auth.profile.firstName}, `
                : "Not logged in"}
            </Paper>
          </Grid>

          {/* Put quick navigation back to find more pools to register for here. */}
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={classes.paper}>
              <h2>Quick Navigation</h2>
              <Link to="/pools">Pools</Link>
            </Paper>
          </Grid>

        {/* Put Pools that I am registered for Here */}
        <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Your Pools</h2>
              {auth?.profile
                ? `Hey, ${auth.profile.firstName}`
                : "Not logged in"}
            </Paper>
          </Grid>
        </Grid>

      </div>
    </>
  );
};

export default Profile;
