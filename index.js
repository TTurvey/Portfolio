// Anything that is in .env becomes an environment variable
// require('dotenv').config();


//Import the dependencies.
const express = require('express');
const { request } = require('http');

//Instantiate an express app.
const app = express();

const path = require('path');

//The port number that the server will be listening to.
const port = process.env.PORT || 3000;

//The server listens for any attempts from a client to connect at the port.
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

//static folder
app.use(express.static('public'));
app.use('/', require('./public/routes/index.js'));



  
  