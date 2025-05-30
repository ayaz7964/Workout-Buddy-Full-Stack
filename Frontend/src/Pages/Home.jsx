import React, { useState } from "react";
import WorkoutDetails from '../Component/WorkoutDetails'
import WorkoutForm from '../Component/workoutForm'

import { useEffect} from "react";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);

useEffect(() => {
  const fetchWorkouts = async () => {
    try {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      } else {
        console.log("API error:", json);
      }
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };
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
