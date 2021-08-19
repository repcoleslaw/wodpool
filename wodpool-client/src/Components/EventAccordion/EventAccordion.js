import React from 'react'
//MUI
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

// ASSETS
import {useStyles} from '../../util/MakeStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//Components
import ExercisesCard from './ExercisesCard';

function EventAccordion(props) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const displayEvents = (props) => {

    const events = props.pool.events
    console.log(events)
    // if (events.length > 0) {
    //   return events.map((event, index) =>{
    //       return(
    //         <div key={index}>
    //           This is Week {index + 1}
    //           <div>
    //             this is equipment indicator {event.equipment}
    //           </div>
    //           this is where we will pass the EXERCISES down
    //           <ExercisesCard exercises={events.exercises}/>
    //         </div>
    //       )
    //     })
    // } else {
    //   return(
    //     <div>This broke</div>
    //   )
    // }
    // 
    return(
      <div>
        troubleshooting event Accordion
        
      </div>
    )
  };

  return (
    <>{displayEvents(props)}</>
  )
}

export default EventAccordion
