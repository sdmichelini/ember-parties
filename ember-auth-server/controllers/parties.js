'use strict';

const utils = require('../util/response');

const PARTIES = [
  {id: '1', name: 'Highlighter', date:String(Date.now()), type: 0},
  {id: '2', name: 'Toga', date:String(Date.now()+10), type: 0}
];

//Get Parties
let getParties = (req, res)=>{
  res.json({parties: PARTIES});
};

module.exports ={
  getParties: getParties
}
