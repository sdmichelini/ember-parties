'use strict';

const utils = require('../util/response');

const PARTIES = [
  {id: '1', name: 'Highlighter', date:String(Date.now()), type: 0},
  {id: '2', name: 'Toga', date:String(Date.now()+10), type: 0}
];

const GUESTS = [
  {name: 'Test Person', added_by: 'Test Brother', male:true },
  {name: 'Test 2 Person', added_by: 'Test Brother', male:false },
  {name: 'Test Person', added_by: 'Test Brother', male:true },
  {name: 'Matthew Freed', added_by: 'The Fraternity', male:false }
];

//Get Parties
let getParties = (req, res)=>{
  res.json({parties: PARTIES});
};

let getPartyById = (req, res)=> {
  let male_guests = [];
  let female_guests = [];

  //Find Party by ID
  let party = PARTIES.filter(
    (p)=>{
      return req.params.id===p.id
    });
  party = party[0];
  if(!party) {
    res.status(404);
    res.json(utils.generateError('Party w/ Given ID not found'));
  } else {
    for(let guest of GUESTS) {
      if(guest.male) {
        male_guests.push(guest);
      } else {
        female_guests.push(guest);
      }
    }

    res.json({
      party: party,
      males: male_guests,
      females: female_guests
    });
  }

};

module.exports ={
  getParties: getParties,
  getPartyById: getPartyById
}
