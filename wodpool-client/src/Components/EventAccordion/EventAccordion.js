import React from 'react'
//MUI
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// ASSETS
import { eventStyles } from './EventStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//Components
import ExercisesCard from './ExercisesCard';


function EventAccordion(props) {
  // establish states
  const classes = eventStyles();
  const [expanded, setExpanded] = React.useState('panel1');
  const events = (props.pool.events)



  
  const displayEvents = (props) => {
    //check if I have events
    if (events && Array.isArray(events)) {
      if (events.length > 0){
        return events.map((event, index) =>{
          return(
            <Accordion key={index} className={classes.accordionBase}>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              >
                <Typography variant="h5">
                 Week {index + 1}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <Grid item xs={12}>
                    <ExercisesCard event={event}/>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          )
        })
      } else {
        return(
          <p>failed map</p>
        )
      }
    } else {
      return(
        <p>I have no event data</p>
      )
    }
  };

  return (
    <>{displayEvents(props)}</>
  )
}

export default EventAccordion
