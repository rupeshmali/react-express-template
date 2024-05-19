const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse incoming JSON data
app.use(bodyParser.json());

// Use a router for todo endpoints
const todoRouter = require('./routes/todos'); // Replace with your actual todo router path
app.use('/todos', todoRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
