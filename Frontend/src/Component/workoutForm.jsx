import React, { useState } from 'react'

export default function workoutForm() {
    const [title , setTitle] = useState('');
    const [reps , setReps] = useState('');
    const [load , setLoad] = useState('');
    const [error , setError] = useState('');
   
    const handleSubmit = async (e)=>{
    e.preventDefault()
    const workout = {title , reps , load};
    const response = await fetch('/api/workouts' , {
        method: 'POST', 
        body : JSON.stringify(workout),
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    const json  = await  response.json()

    if (!response.ok){
        setError(json.error)
        
    }

    if (response.ok){
        setTitle('')
        setReps('')
        setLoad('')
        setError(null)
        console.log("new workout Added ", json)
    }
    }

  return (
    <form className='creat' onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
        <label >Exersize Title : </label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
         <label >Load (in KG)  :'   </label>
        
        <input type="number" onChange={(e)=>setLoad(e.target.value)} value={load} />
         <label >Reps : </label>
        <input type="number" onChange={(e)=>setReps(e.target.value)} value={reps} />
        <button> Add Workout </button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}
