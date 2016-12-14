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

let getPartyById = (req, res)=>{
  let party = PARTIES.filter((party)=>{
    return party.id === req.params.id;
  });
  if(party) {
    res.json({
      party: party[0]
    });
  } else {
    res.status(404);
    res.json(generateError('Party Not Found.'));
  }

};

module.exports ={
  getParties: getParties,
  getPartyById: getPartyById
}
