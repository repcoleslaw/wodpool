import React from 'react'
//MUI
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
//ASSETS
import {eventStyles} from './EventStyles';


function ExercisesCard(props) {
  const classes = eventStyles()

  const displayExercises = (props) =>{
    const exercises = props.event.exercises
    console.log(exercises)

    if (exercises && Array.isArray(exercises)) {
      if (exercises.length > 0) {
        return exercises.map((exercise, index) => {
          return(
            <Accordion className={classes.accordionBase} key={index}>
              <AccordionSummary> {exercise.name} - reps: {exercise.reps}</AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <Grid item xs={12}>
                   <p>{exercise.description}</p>
                  </Grid>
                </Grid>

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
