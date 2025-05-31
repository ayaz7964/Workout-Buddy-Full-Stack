import React, { useState } from "react";
import WorkoutDetails from '../Component/WorkoutDetails'
import WorkoutForm from '../Component/workoutForm'

import UseWorkoutContext from '../hooks/UseWorkoutContext'

import { useEffect} from "react";

export default function Home() {
  // const [workouts, setWorkouts] = useState([]);

  const {workouts , dispatch} = UseWorkoutContext()
  const fetchWorkouts = async () => {
    try {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        // setWorkouts(json);
        dispatch({type:'SET_WORKOUTS' , payload :json})
        console.log("dis")
      } else {
        console.log("API error:", json);
      }
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

useEffect(() => {
  
  fetchWorkouts();
}, []);
  return (
    <div className="home">
        <div className="workouts">
        { workouts && workouts.map((workout) => (
        <WorkoutDetails key = {workout._id} workout = {workout}/>            
            
        ))}
    </div>
    <WorkoutForm/>
    </div>
  )
}
