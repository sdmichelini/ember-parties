'use strict';
//Third Party Modules
const express = require('express');
const jwt = require('express-jwt');
const cors = require('cors');
const bodyParser = require('body-parser');

//Controllers
const groups_controller = require('./controllers/groups');
const guests_controller = require('./controllers/guests');
const parties_controller = require('./controllers/parties');

//Start application vars
let app = express();

app.use(cors());

//Basic Health Route
app.get('/api/health', (req,res)=>{
  res.json({message:'OK.'});
});

app.get('/api/parties', parties_controller.getParties);
//app.get('/api/parties/:id', parties_controller.getPartyById);

//Get list of guests for a party
app.get('/api/guests/:party_id', guests_controller.getGuestForParty);


//Export the application
module.exports = app;
