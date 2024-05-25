const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse incoming JSON data
app.use(bodyParser.json());

// Connect mongoDB
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected")
}).catch((error)=>{
    console.log(error.message);
})

// Use a router for user endpoints
const userRouter = require('./routes/users'); // Replace with your actual user router path
app.use('/users', userRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
