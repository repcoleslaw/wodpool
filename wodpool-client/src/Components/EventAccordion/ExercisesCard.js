import React from 'react'
//MUI
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
//ASSETS
import {useStyles} from '../../util/MakeStyles'


function ExercisesCard(props) {
  const classes = useStyles()

  const displayExercises = (props) =>{
    const exercises = props.event.exercises
    console.log(exercises)

    if (exercises && Array.isArray(exercises)) {
      if (exercises.length > 0) {
        return exercises.map((exercise, index) => {
          return(
            <Accordion className={classes.accordionBase} key={index}>
              <AccordionSummary>{exercise.name}</AccordionSummary>
              <AccordionDetails>
                <p>{exercise.duration}</p>
                <p>{exercise.description}</p>
              </AccordionDetails>
              
            </Accordion>
          )
        });
      } else {
        <p>failed map</p>
      }
    } else {
      return(
        <p>I have no exercise data</p>
      )
    }
  }

  return (
    <div>
     {displayExercises(props)}
    </div>
  )
}

export default ExercisesCard
