import React from 'react'
import axios from 'axios'
// use this page to sketch out the other shit that you get confused in.

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import usePools from '../usePools';


//components


// style the table

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "rgba(0,0,0)",
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

  const useStyles = makeStyles({
    table: {
      color:"black"
    },
    tableRow:{
        color:"black"
    }
  });

  // get table headers

//QUESTION: Hw to hit Get and map into the rows.so we need to get all the rows related to ID + Week.



// Converting Time back from flat Seconds
// 2 Tables?
//First Table is TOURNAMENT WIDE, where it descends based on points
// Second Table is CURRENT WEEK, where it descends bassed on time. 

// 1 Table for the page, drop down to toggle between modes.

  
function PoolLeaderboard(props) {
    const id = props.id
    const pool = props.pool
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Rank</StyledTableCell>
                            <StyledTableCell align="left">Handle </StyledTableCell>
                            <StyledTableCell align="left">Score </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pool.competitors ? pool.competitors.map((competitor, index) => (
                            <StyledTableRow  key={competitor.handle}>
                                <StyledTableCell className={classes.tableRow} component="th" scope="row">{index + 1}</StyledTableCell>
                                <StyledTableCell className={classes.tableRow} component="th" scope="row"> {competitor.handle}</StyledTableCell>
                                <StyledTableCell className={classes.tableRow} align="left">{competitor.pointsToDate}</StyledTableCell>

                            </StyledTableRow>
                        )): <p>empty</p>}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default PoolLeaderboard
