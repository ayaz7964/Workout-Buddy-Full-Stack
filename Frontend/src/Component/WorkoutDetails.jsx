import React from 'react'
import UseWorkoutContext from '../hooks/UseWorkoutContext'

export default function WorkoutDetails({workout}) {
  const {dispatch} = UseWorkoutContext()
  const handleClick = async ()=>{
    const response = await fetch ('/api/workouts/'+workout._id , {
      method : 'DELETE'
    })
    const json = await response.json()

    if (response.ok){
      dispatch({type:'DELETE_WORKOUT', payload : json})
    }
  }
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (Kg)</strong>{workout.load}</p>
        <p><strong>Reps</strong>{workout.reps}</p>
        <p><strong>CreatedAT</strong>{workout.createdAt}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}
