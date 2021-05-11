import React from "react";
import { AuthenticationContext } from "../Components/AuthenticationContext";
import Header from "../Components/HeaderFooter/Header";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import PoolCard from "../Components/PoolCard/PoolCard";
import JoinedCard from '../Components/PoolCard/joinedPoolCard';
import usePools from "../Components/usePools";

//import assets
import placeholder from "../assets/placeholder.png";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import {LocationOn, EmojiPeopleOutlined, FitnessCenter} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "1em",
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
  container: {
    padding: theme.spacing(2),
    margin: "1em",
  },
  userList: {
    listStyle: "none",
  },
}));

const MyPools = () => {
  const us = usePools();
  
  React.useEffect(() => {
    us.fetchWithHandle();
  }, []);

  return us.hasPools() ? 
  <div>
    <JoinedCard pools={us.pools}/>
  </div> 
  : 
  <div>
    Oh... you don't seem to be registered for any pools. 
    <Button variant="contained" color="primary" href="/pools">See Pools</Button>
  </div>;
};

const OtherPools = () => {
  const us = usePools();
  const classes = useStyles();
  React.useEffect(() => {
    us.fetchWithoutHandle();
  }, []);

  return (
    <Paper className={classes.paper}>
      <h2>Available Pools</h2>
      <hr />
      {us.hasPools() ? (
        <PoolCard pools={us.pools} />
      ) : (
        <div>
          <p>Did you already join all the pools? Well, goodluck then!</p>
          <Button variant="contained" href="/pools" color="primary">
            See All The Pools!
          </Button>
        </div>
      )}
    </Paper>
  );
};

const Profile = () => {
  const classes = useStyles();
  const [profileData, setProfileData] = React.useState("");
  // set all pool data
  const [pools, getPools] = React.useState("");
  // set my pool data

  const auth = React.useContext(AuthenticationContext);

  React.useEffect(() => {
    getMyProfile();
    getAllPools();
    assignPools(pools, profileData);
  }, []);

  const getMyProfile = () => {
    axios
      .get("/profile")
      .then((res) => {
        const myProfile = res.data.profile;
        setProfileData(myProfile);
        console.log(myProfile);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const getAllPools = () => {
    axios
      .get("/pools")
      .then((res) => {
        const allPools = res.data.pools;
        getPools(allPools);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const assignPools = (pools, profileData) => {
    console.log(pools);
  };

  return (
    <>
      <Header />
      <div className={classes.root}>
        {/* Put Profile Banner */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Welcome back, {auth.profile.firstName} </h2>
              <hr />
              {auth?.profile ? (
                <div className={classes.container}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography component="p" variant="h5">
                        {" "}
                        name: {auth.profile.firstName} {auth.profile.lastName}
                      </Typography>
                      <Typography component="p" variant="h5">
                        {" "}
                        handle: {auth.profile.handle}
                      </Typography>

                      <li className={classes.userList}>
                        {auth.profile?.location ? (
                          <Typography>
                            <LocationOn/>: {auth.profile?.location}
                          </Typography>
                        ) : (
                          <Typography>
                          <LocationOn/> No location provided.
                        </Typography>
                        )}
                      </li>
                      <li className={classes.userList}>
                        {auth.profile?.details ? (
                          <Typography>
                            <EmojiPeopleOutlined/> {auth.profile?.details}
                          </Typography>
                        ) : (
                          <Typography>
                          <EmojiPeopleOutlined/> No details provided.
                        </Typography>
                        )}
                      </li>
                      <li className={classes.userList}>
                        {auth.profile?.pools ? (
                          <Typography>
                          <FitnessCenter/> {auth.profile?.pools}
                        </Typography>
                      ) : (
                        <Typography>
                        <FitnessCenter/> No pools participated in.
                      </Typography>
                        )}
                      </li>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* ALERT NOTE */}
                      <Typography component="p" variant="body" color="error">
                        Hey, {auth.profile.firstName}, welcome to the beta!
                        Check back here when we've got more developed to update
                        your profile data!
                      </Typography>
                      <Button variant="outlined" color="primary" disabled>
                        Edit Profile
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                "Not logged in"
              )}
            </Paper>
          </Grid>

          {/* Put Pools that I am registered for Here */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Your Pools</h2>
              <hr />
              <MyPools />
            </Paper>
          </Grid>
          {/* Available Pools */}
          <Grid item xs={12}>
            <OtherPools />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Profile;
