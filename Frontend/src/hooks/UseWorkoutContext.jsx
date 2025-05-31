import React from 'react'
import { useContext } from 'react'
import {workoutContext} from '../Context/workoutContext'

export default function UseWorkoutContext() {

      const context = useContext(workoutContext)
      if(!context){
        return Error("The use context Provider is not be used in Context Provider ")
      }
return context   
    
} 
