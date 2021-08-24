import React from 'react'

//import mui
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid'
//styles
import { useStyles } from "../../util/MakeStyles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//Components
import EventAccordion from '../EventAccordion/EventAccordion';



function PoolDesc(props) {
  const classes = useStyles()
  const pool = props.pool

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        {pool?.name ? 
          (<Typography style={{paddingBottom:"0.5em"}}variant="h3">{pool.name}</Typography>) : <Typography>Competition Name</Typography>}
        {/* Detail Collapse Start */}
        <Accordion className={classes.accordionBase}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5">Details</Typography>
        </AccordionSummary>
        <AccordionDetails>

            {pool?.description ? (
              <Typography variant="body1">{pool.description}</Typography>) : <Typography>pool description</Typography>}
        </AccordionDetails>
        </Accordion>

        {/* Events Collapse Start */}
        <div className={classes.subsection}>
        <Typography variant="h5" style={{paddingBottom:"0.5em"}}>Events</Typography>
        <EventAccordion pool={pool}/>
        </div>
        
      </Paper>
    </Grid>
  )
}

export default PoolDesc
