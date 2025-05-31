import { createContext, useReducer } from "react";

export const workoutContext = createContext()

export const workoutReducer = (state , action )=>{
    
        switch (action.type){
            case 'SET_WORKOUTS':
                return {
                    workouts : action.payload  
                }
             case 'CREATE_WORKOUT': 
            return {
                workouts : [action.payload , ...state.workouts] 
            }
            case 'DELETE_WORKOUT': return {
              workouts : state.workouts.filter((w)=> w._id !== action.payload._id)
            }
            default :
            {return state }
        }
        
}



export const WorkoutConTextProvider = ({children})=>{
    const [state , dispatch] = useReducer (workoutReducer , { workouts : null })


const refreshWorkouts = async () => {
    try {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json });
      }
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

    return (
        <workoutContext.Provider value={{...state , dispatch, refreshWorkouts}}>
            {children}
        </workoutContext.Provider>
    )
}