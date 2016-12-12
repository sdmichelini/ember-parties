'use strict';
//Third Party Modules
const express = require('express');
const jwt = require('express-jwt');
const cors = require('cors');
const bodyParser = require('body-parser');

//Controllers
const groups_controller = require('./controllers/groups');
const parties_controller = require('./controllers/parties');

//Start application vars
let app = express();

//Basic Health Route
app.get('/api/health', (req,res)=>{
  res.json({message:'OK.'});
});

app.get('/api/parties', parties_controller.getParties);
app.get('/api/parties/:id', parties_controller.getPartyById);

//Export the application
module.exports = app;
