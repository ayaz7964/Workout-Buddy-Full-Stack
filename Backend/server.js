require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect(process.env.DB_URL).then(()=>{
    app.listen(process.env.PORT)
    console.log('Connected to MongoDB & runnig the server on port', process.env.PORT);
    
}).catch((err)=>{
    console.log('Error connecting to MongoDB:', err);
})

const workoutsRoutes = require('./Routes/workouts')

// Middleware to parse JSON bodies
app.use(express.json()); 
// Middleware to log requests 

app.use((req , res , next )=>{
    console.log( req.method,req.path );
    next()
})


// Routes
app.use('/api/workouts', workoutsRoutes);

