import React from 'react'
//MUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//Assets
import {useStyles} from '../../util/MakeStyles'
//Components
import EventLeaderboard from './EventLeaderboard';
import PoolLeaderboard from './PoolLeaderboard';
import TestReactTable from './TestReactTable';



function LeaderboardContainer(props) {
  const classes = useStyles();
  const id = props.id;
  const pool = props.pool;

  //handle leaderboard visibility
  const [btn1, setBtn1] = React.useState("primary");
  const [btn2, setBtn2] = React.useState("secondary")
  const [boardActive, setBoardActive] = React.useState(true);

  const handleTogglePool = () => {
    setBoardActive(true);
    if (btn1 === "secondary") {
      setBtn1("primary")
    } else {
      setBtn1("primary")
    };
    if (btn2 === "primary") {
      setBtn2("secondary")
    }
  }
  const handleToggleEvent = () => {
    setBoardActive(false);
    if (btn2 === "secondary") {
      setBtn2("primary")
    } else {
      setBtn2("primary")
    };
    if (btn1 === "primary") {
      setBtn1("secondary")
    }
  }

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography variant="h3"> Leaderboard</Typography>
        <ButtonGroup className={classes.btnGroup1}>
          <Button variant="contained" color={btn1} onClick={handleTogglePool}>
            Pool Board
          </Button>
          <Button variant="contained" color={btn2} onClick={handleToggleEvent}>
            Event Board
          </Button>
        </ButtonGroup>
        {boardActive ? (
          <PoolLeaderboard pool={pool} id={id} />
        ) : (
          <TestReactTable pool={pool} id={id} />
        )}
      </Paper>
    </Grid>
  );
}

export default LeaderboardContainer
