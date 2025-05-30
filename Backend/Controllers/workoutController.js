const express = require('express');
const mongoose = require('mongoose');

const WorkoutModel = require('../models/workoutmodel');
const workoutmodel = require('../models/workoutmodel');

// get all workout 

const getWorkouts = async (req , res )=>{
    const workout = await  WorkoutModel.find({}).sort({createdAt : -1});
    res.json(workout)
}

// get a single workout 

const getWorkout = async (req , res)=>{
    const {id} = req.params ; 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "NO such workout Found"})
    }

    const workout = await WorkoutModel.findById(id); 
    if(!workout){
        return res.status(404).json({error : "NO such workout Found or Exit"})
    }

    res.status(200).json(workout)
}

// create a new workout 

 const createWorkout = (req , res)=>{
    const { title, reps, load } = req.body; 

    const workout = new WorkoutModel({
        title ,
        reps,
        load ,
    }    )
    workout.save().then(()=>{
        res.status(201).json({workout})
    }).catch((err)=>{
        res.status(400).json({error: err.message})
    })
 }
// delete a workout 

const deleteWorkout = async (req , res)=>{
    const {id} = req.params ;
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "NO such workout Found"})
    }
 
    const workout = await workoutmodel.findByIdAndDelete({_id : id})

    if(!workout){
        return res.status(404).json({error : "NO such workout Found or Exit"})
    }

    res.status(200).json(workout)

}

// update a workout 
 const updateWorkout = async  (req , res )=>{
    const {id} = req.params ;
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "NO such workout Found"})
    }
    
    const workout = await workoutmodel.findByIdAndUpdate({_id : id}, {
    ...req.body 
    })

    if(!workout){
        return res.status(404).json({error : "NO such workout Found or Exit"})
    }

    res.status(200).json(workout)
 }

 module.exports = {createWorkout ,getWorkouts , getWorkout , deleteWorkout , updateWorkout}