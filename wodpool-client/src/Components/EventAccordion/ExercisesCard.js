import React from 'react'

function ExercisesCard(props) {

  const displayExercises = (props) =>{
    const exercises = props.exercises
    
    // return exercises.map((exercise, index) => {
    //   return(
    //     <div key={index}>
    //       this is exercise {index + 1}
    //       <p>{exercise.name}</p>
    //       <p>{exercise.duration}</p>
    //       <p>{exercise.description}</p>
    //     </div>
    //   )
    // });

    return(
      <div>
        This is the Exercise Card Component
      </div>
    )

  }

  
  
  return (
    <div>
     {displayExercises(props)}
    </div>
  )
}

export default ExercisesCard
