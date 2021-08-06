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

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
      color:"black"
    },
    tableRow:{
        color:"black"
    }
  });

  // get table headers

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
//   function createData(name, duration, score, prevPos) {
//     return { name, duration, score, prevPos };
//   }
// create data rows.
// 
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

//QUESTION: Hw to hit Get and map into the rows.so we need to get all the rows related to ID + Week.



// Converting Time back from flat Seconds
// 2 Tables?
//First Table is TOURNAMENT WIDE, where it descends based on points
// Second Table is CURRENT WEEK, where it descends bassed on time. 

// 1 Table for the page, drop down to toggle between modes.

  
function Leaderboard(...props) {
    const id = props.location;
    const classes = useStyles();
    const [pool, setPools] = React.useState([]);
    const us = usePools();



    return (
        <div className={classes.root}>
            Leaderboard Component
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

export default Leaderboard
