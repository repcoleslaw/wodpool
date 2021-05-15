import React from "react";
import { AuthenticationContext } from "../../Components/AuthenticationContext";
import Header from "../../Components/HeaderFooter/Header";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import PoolCard from "../../Components/PoolCard/PoolCard";
import JoinedCard from '../../Components/PoolCard/joinedPoolCard';
import usePools from "../../Components/usePools";

//import assets
import placeholder from "../../assets/placeholder.png";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import {LocationOn, EmojiPeopleOutlined, FitnessCenter, Info} from "@material-ui/icons";

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
  ul:{
    padding:"1em 0",  
  },
  btn:{
    margin:"2em 0"
  },
  info:{
    height:"0.65em",
    width:"auto",
    margin:"0.75em 0.5em 0 0"
  }
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
    <Button variant="contained" color="primary" href="/pools/submit">See Pools</Button>
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
      <Typography component="h2" variant="h5">
        Available Pools
      </Typography>
      <Typography component="p" variant="caption" color="textSecondary">
        <Info className={classes.info} />
        If there is a pool you have not registered for, it will be promoted here for you to quickly join!
      </Typography>
      {us.hasPools() ? (
        <PoolCard pools={us.pools} />
      ) : (
        <div>
          <Typography component="p" variant="body">
          Looks like you've joined everything! Good luck!
          </Typography>

          <Button className={classes.btn} variant="contained" href="/pools" color="primary">
            Go To Pools
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
        <Grid container spacing={4} justify='center' >
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <Typography component="h2" variant="h5">
              Welcome, {auth.profile.firstName} 
              </Typography>
              <Typography component="p" variant="caption" color="textSecondary">
              <Info className={classes.info}/>
              Profile Section - Where you will be able to edit all your details!
              </Typography>
              {auth?.profile ? (
                <div className={classes.container}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography component="p" variant="h5">
                        {auth.profile.firstName} {auth.profile.lastName}
                      </Typography>
                      <Typography component="p" variant="h5">
                        {auth.profile.handle}
                      </Typography>
                    <ul className={classes.ul}>
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
                    </ul>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* ALERT NOTE */}
                      <Typography component="p" variant="body" color="error">
                        Hey, {auth.profile.firstName}, welcome to the beta!
                        Check back here when we've got more developed to update
                        your profile data!
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                "Not logged in"
              )}
            </Paper>
          </Grid>

          {/* Put Pools that I am registered for Here */}
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
            <Typography component="h2" variant="h5">
              Your Pools 
              </Typography>
              <Typography component="p" variant="caption" color="textSecondary">
              <Info className={classes.info}/>
             This is where you can see what pools you have registered for and upload your results!
              </Typography>
              <MyPools />
            </Paper>
          </Grid>
          {/* Available Pools */}
          <Grid item xs={12} md={8}>
            <OtherPools />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Profile;
