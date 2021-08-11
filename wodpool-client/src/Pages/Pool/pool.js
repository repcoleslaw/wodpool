import React from 'react'
import axios from 'axios'

//MUI
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

//components
import Header from '../../Components/HeaderFooter/Header';
import PoolDesc from '../../Components/PoolCard/PoolDesc';
import PoolLeaderboard from '../../Components/Leaderboard/PoolLeaderboard';
import EventLeaderboard from '../../Components/Leaderboard/EventLeaderboard';

//Styles
import {useStyles} from '../../util/MakeStyles';



  
function Pool({ location: { search } }) {
    const id = new URLSearchParams(search).get("id");
    const classes = useStyles();
    const [pool, setPools] = React.useState([]);
    // toggle states
    const [selected, setSelected] = React.useState('primary');

    const handleSelected = (e, newSelection) => {
      setSelected(newSelection)
    }



    React.useEffect(() => {
      axios.get(`/pools/${id}`)
          .then(({ data }) => {
              setPools(data.pool)
          })
          .catch((err) => {
              console.log(err);
            });

  }, []);

 

   
    return (
        <div className={classes.root}>
          <Header/>
          <div className={classes.section}>
          <Grid container spacing={4} justify="center">
              <Grid item xs={12}>
                <PoolDesc pool={pool}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button className={classes.btnStyle1} variant="contained" color="primary">SUBMIT</Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button className={classes.btnStyle1} variant="outlined" color="secondary" href="/profile">Back to Profile</Button>
              </Grid>
              <Grid item xs={12}>
                {/* Event and Pool Leaderboards */}
                <Paper className={classes.paper}>
                  <Typography variant="h3"> Leaderboard            
                  </Typography>
                {/* Toggle Button Group */}
                 <ButtonGroup className={classes.btnGroup1}>
                  <Button variant="contained">Pool Board</Button>
                    <Button variant="contained">Event Board</Button>
                 </ButtonGroup>  
                
                  <PoolLeaderboard pool={pool} id={id}/>
                  <EventLeaderboard pool={pool} id={id}/>
                </Paper>
              </Grid>
            </Grid>
          </div>
            
          
            
            
        </div>
    )
}

export default Pool
