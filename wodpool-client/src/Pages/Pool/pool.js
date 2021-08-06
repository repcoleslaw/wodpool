import React from 'react'
import axios from 'axios'
// use this page to sketch out the other shit that you get confused in.
import Modal from '@material-ui/core/Modal';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import usePools from '../../Components/usePools';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../../util/MakeStyles';

//components
import Header from '../../Components/HeaderFooter/Header';


// style the table

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


  // get table headers



  
function Pool({ location: { search } }) {
    const id = new URLSearchParams(search).get("id");
    const classes = useStyles();
    const [pool, setPools] = React.useState([]);
    const [show, setModal] = React.useState(false);
    const us = usePools();
    // get pool data

    const handleOpen = () => {
      setModal(true);
    };
    const handleClose = () => {
      setModal(false);
    };


    const Leaderboard = () => {
      const us = usePools();
      const classes = useStyles();

      React.useEffect(() => {
        axios.get(`/pools/${id}`)
            .then(({ data }) => {
                setPools(data.pool)
            })
            .catch((err) => {
                console.log(err);
              });
    }, []);

      return(
        <div>
          <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Rank</StyledTableCell>
                            <StyledTableCell align="right">Handle </StyledTableCell>
                            <StyledTableCell align="right">Duration (mm:ss)</StyledTableCell>
                            <StyledTableCell align="right">Score </StyledTableCell>
                            <StyledTableCell align="right">Previous Position</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pool.competitors ? pool.competitors.map((competitor) => (
                            <StyledTableRow  key={competitor.handle}>
                                {/* <StyledTableCell component="th" scope="row">{index}</StyledTableCell> */}
                                <StyledTableCell className={classes.tableRow} component="th" scope="row"> {competitor.handle}</StyledTableCell>
                                <StyledTableCell className={classes.tableRow} align="right">{competitor.pointsToDate}</StyledTableCell>

                            </StyledTableRow>
                        )): <p>empty</p>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
      )
    }

    const PoolHeader = () => {
      return(
        <Paper className={classes.paper}>
        {pool?.name ? (<Typography>{pool.name}</Typography>) : <Typography>Competition Name</Typography>}
        {pool?.startsOn ? (<Typography variant="caption">{pool.startsOn}</Typography>) : <Typography>Starting Date</Typography>}
            <Typography>{pool.numberOfWeeks}</Typography>
            <Button variant="outlined" color="secondary">details</Button>
        </Paper>

      )
    }

  
    return (
        <div className={classes.root}>
          <Header/>
          <div className={classes.section}>
          <Grid container spacing={4}>
              <Grid item xs={12}>
                <PoolHeader/>
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.btnStyle1} variant="contained" color="primary">SUBMIT</Button>
              </Grid>
              <Grid item xs={12}>
                <Leaderboard/>
              </Grid>
            </Grid>
          </div>
            
          
            
            
        </div>
    )
}

export default Pool
