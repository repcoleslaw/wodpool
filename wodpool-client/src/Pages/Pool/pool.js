import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//MUI
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//components
import Header from '../../Components/HeaderFooter/Header';
import PoolDesc from '../../Components/PoolCard/PoolDesc';
import PoolLeaderboard from '../../Components/Leaderboard/PoolLeaderboard';
import EventLeaderboard from '../../Components/Leaderboard/EventLeaderboard';
import ToScoreSubmit from '../../Components/ScoreSubmit/ToScoreSubmit';
//Styles
import {useStyles} from '../../util/MakeStyles';
import PoolNotFound from '../../Components/PoolNotFound/PoolNotFound';
import { truncate } from 'lodash';
import LeaderboardContainer from '../../Components/Leaderboard/LeaderboardContainer';




  
function Pool(props) {
    const id = props.match.params.id
    const classes = useStyles();
    const [isLoading, setLoading] = React.useState(true)
    const [pool, setPool] = React.useState([]);
    // error handling states
    const [isNotFound, setIsNotFound] = React.useState(false);

    //are you registered?

    

    React.useEffect(() => {
      axios.get(`/pools/${id}`)
          .then(({ data }) => {
              setPool(data.pool)
              setLoading(false)
              console.log(data)
          })
          .catch((err) => {
              console.log(err);
              setLoading(false);
              setIsNotFound(true);
            });  
  }, []);



  if (isLoading) {
    return(
      <div>Loading...</div>
    )
  } else if(isNotFound) { 
    return(
      <PoolNotFound/>
    )
  }
  
  else {
    // check pool if Array, then Array length. Good Test?
    return (
      <div className={classes.root}>
        <Header/>
        <div className={classes.section}>
        <Grid container spacing={4} justify="center">
            <PoolDesc pool={pool}/>
            <ToScoreSubmit id={id}/>
            <LeaderboardContainer pool={pool} id={id}/>
        </Grid>
        </div>
      </div>
    )
  }
}

export default Pool
