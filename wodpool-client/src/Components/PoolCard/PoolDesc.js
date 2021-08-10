import React from 'react'

//import mui
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
//styles
import { useStyles } from "../../util/MakeStyles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function PoolDesc(props) {

  const classes = useStyles()
  const pool = props.pool

  return (
    <>
      <Paper className={classes.paper}>
        {pool?.name ? 
          (<Typography variant="h3">{pool.name}</Typography>) : <Typography>Competition Name</Typography>}
        {pool?.startsOn ? (<Typography variant="caption">{pool.startsOn}</Typography>) : <Typography>Starting Date</Typography>}
        {/* Accordion Start */}
        <Accordion className={classes.accordionBase}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>

            {pool?.description ? (
              <Typography variant="body1">{pool.description}</Typography>) : <Typography>pool description</Typography>}

        </AccordionDetails>
        </Accordion>
      </Paper>
    </>
  )
}

export default PoolDesc
