import React from 'react'
import axios from 'axios'
//MUI
import Grid from '@material-ui/core/Grid';
//components
import Header from '../../Components/HeaderFooter/Header';
import PoolDesc from '../../Components/PoolCard/PoolDesc';
import ToScoreSubmit from '../../Components/ScoreSubmit/ToScoreSubmit';
import LeaderboardContainer from '../../Components/Leaderboard/LeaderboardContainer';
//Styles
import {useStyles} from '../../util/MakeStyles';
import PoolNotFound from '../../Components/PoolNotFound/PoolNotFound';


  
function Pool(props) {
    const id = props.match.params.id
    const classes = useStyles();
    const [isLoading, setLoading] = React.useState(true)
    const [pool, setPool] = React.useState([]);
    // error handling states
    const [isNotFound, setIsNotFound] = React.useState(false);
  console.log(pool)
    //are you registered?
    React.useEffect(() => {
      axios.get(`/pools/${id}`)
          .then(({ data }) => {
              setPool(data.pool)
              setLoading(false)
          })
          .catch((err) => {
              console.log(err);
              setLoading(false);
              setIsNotFound(true);
            });  
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isNotFound) {
    return <PoolNotFound />;
  } else {
    // check pool if Array, then Array length. Good Test?
    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.section}>
          <Grid container spacing={4} justify="center">
            <PoolDesc pool={pool} />
            <ToScoreSubmit id={id} />
            <LeaderboardContainer pool={pool} id={id} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default Pool
