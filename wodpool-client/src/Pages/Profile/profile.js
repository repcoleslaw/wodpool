import React from "react";
import axios from "axios";
import { AuthenticationContext } from "../../Components/AuthenticationContext";

//MUI
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
//COMPONENTS
import Header from "../../Components/HeaderFooter/Header";
import PoolCard from "../../Components/PoolCard/PoolCard";
import JoinedCard from '../../Components/PoolCard/ProfilePoolCard';
import usePools from "../../Components/usePools";
import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';
import AlertCard from '../../Components/AlertCard/AlertCard';
import MyPools from '../../Components/MyPools/MyPools';

//import assets
import { makeStyles } from "@material-ui/core/styles";
import {LocationOn, EmojiPeopleOutlined, FitnessCenter, Info} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "1em",
  },
  outline:{
    border: "1px solid red"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    backgroundColor: "rgba(0,0,0,0.25)",
    color: "white",
  },
  container: {
    padding: theme.spacing(2),
    margin: "1em",
  },
  userList: {
    listStyle: "none",

  },
  ul:{
    padding:"0",  
  },
  btn:{
    margin:"2em 0"
  },
  infoIcon:{
    height:"0.65em",
    width:"auto",
    margin:"0.75em 0.5em 0 0"
  }
}));

const MyOldPools = () => {
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
          <Typography component="p" variant="body1">
          Looks like you've joined everything! Good luck!
          </Typography>

          <Button className={classes.btn} variant="contained" href="/" color="primary">
            Go To Pools
          </Button>
        </div>
      )}
    </Paper>
  );
};

const Profile = () => {
  const classes = useStyles();
  const us = usePools();
  const [profile, setProfile] = React.useState("");
  const [myPools, setMyPools] = React.useState("");
  //loading
  const [isLoading, setIsLoading] = React.useState(true);
  //do i need to validate a registered user?  how am i doing that now?
  // do i need to continue to that?
  const [isNotRegistered, setIsNotRegistered] = React.useState(true);

  const auth = React.useContext(AuthenticationContext);

  React.useEffect(() => {
    getMyProfile();
  }, []);

  React.useEffect(()=>{
    us.fetchWithHandle()
  }, []);


  const getMyProfile = () => {
    axios
      .get("/profile")
      .then((res) => {
        const myProfile = res.data.profile;
        setProfile(myProfile);
        setIsLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  if (isLoading) {
    return(
      <div>Loading...</div>
    )
  } else {
    return(
      <>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={4} justify='center'>
         <AlertCard/>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
            <ProfileInfo profile={profile}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <MyPools pools={us.pools}/>
              <MyOldPools />
            </Paper>
          </Grid>
          {/* Available Pools */}
          <Grid item xs={12} md={8}>
            <OtherPools />
          </Grid>
        </Grid>
      </div>
    </>
    )
  }

};

export default Profile;
