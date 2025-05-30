const express = require('express')
const router = express.Router()
const WorkoutModel = require('../models/workoutmodel')

// all workout routes
router.get('/',(req,res)=>{
    WorkoutModel.find().then((workouts)=>{
        res.status(200).json(workouts)
    }).catch((err)=>{
        res.status(500).json({error: "Error fetching workouts", details: err.message})
    }
    )
   
})

// single workout route
router.get('/:id',(req,res)=>{
    const { id } = req.params
    res.json({message: `Fetching workout with ID: ${id}`})
})
// create a new workout
router.post('/',(req,res)=>{
    const { title, reps, load } = req.body; 

    const workout = new WorkoutModel({
        title ,
        reps,
        load ,
    }    )
    workout.save().then(()=>{
        res.status(201).json({workout})
    }).catch((err)=>{
        res.status(400).json({error: "Error creatin g workout", details: err.message})
    })
  
})

// update a workout
router.patch('/:id',(req,res)=>{
    
    res.json({message: `Updating workout with ID: ${req.params.id}`})
})
// delete a workout
router.delete('/:id',(req,res)=>{
    res.json({message: `Deleting workout with ID: ${req.params.id}`})
})

module.exports = router