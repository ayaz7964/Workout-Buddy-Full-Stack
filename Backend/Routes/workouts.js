const express = require('express')
const router = express.Router()
const WorkoutModel = require('../models/workoutmodel')
const {createWorkout,getWorkouts , 
    getWorkout , deleteWorkout, updateWorkout} = require('../Controllers/workoutController')

// all workout routes
router.get('/',getWorkouts)

// single workout route
router.get('/:id',getWorkout)
// create a new workout
router.post('/', createWorkout)

// update a workout
router.patch('/:id',updateWorkout)
// delete a workout
router.delete('/:id',deleteWorkout)

module.exports = router