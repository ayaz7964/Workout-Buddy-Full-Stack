require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); 
const app = express(); 


app.get('/',(req, res)=>{
    res.json({'mess' : "Hello Ayaz Hussain"})
})



app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port ',process.env.PORT);
})