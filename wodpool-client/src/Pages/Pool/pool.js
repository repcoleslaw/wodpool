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
    //handle leaderboard visibility
    const [btn1, setBtn1] = React.useState("primary");
    const [btn2, setBtn2] = React.useState("secondary")
    const [boardActive, setBoardActive] = React.useState(true);

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

  const handleToggle = () => {
    setBoardActive(!boardActive);
    if (btn1 == "primary") {
      setBtn1("secondary")
    } else {
      setBtn1("primary")
    };
    if (btn2 == "primary") {
      setBtn2("secondary")
    } else {
      setBtn2("primary")
    };
  }

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
            <Grid item xs={12}>
              <PoolDesc pool={pool}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button component={Link} className={classes.btnStyle1} variant="contained" color="primary" to={`${id}/submit`}>SUBMIT</Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button className={classes.btnStyle1} variant="outlined" color="secondary" href="/profile">To Profile Page</Button>
            </Grid>
            <Grid item xs={12}>
              {/* Event and Pool Leaderboards */}
              <Paper className={classes.paper}>
                <Typography variant="h3"> Leaderboard            
                </Typography>
              {/* Toggle Button Group */}
               <ButtonGroup className={classes.btnGroup1}>
                <Button variant="contained" color={btn1} onClick={handleToggle}>Pool Board</Button>
                  <Button variant="contained" color={btn2} onClick={handleToggle}>Event Board</Button>
               </ButtonGroup>  

               {(boardActive) ? (
                 <PoolLeaderboard pool={pool} id={id}/>
               ) : (
                <EventLeaderboard pool={pool} id={id}/>
               )}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Pool
