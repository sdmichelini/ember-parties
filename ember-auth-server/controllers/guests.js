'use strict';

const utils = require('../util/response');

const STATUS_AWAITING_APPROVAL = 0;
const STATUS_ON_LIST = 1;
const STATUS_CHECKED_IN = 2;

const GUESTS = [
  {party_id: '1', name: 'Test Guest', added_by: 'Test Brother 1', male: false, status: STATUS_ON_LIST, checked_in: 0, id: '0'},
  {party_id: '2', name: 'Test Guest 2', added_by: 'Test Brother 2', male: true, status: STATUS_ON_LIST, checked_in: 0, id: '1'}
];

//Get Guests for Party
let getGuestForParty = (req, res)=>{
  let guests = GUESTS.filter((guest)=>{
    return guest.party_id == req.query.party_id;
  });
  if(!guests) {
    res.json(utils.generateError('No Guests for Party ID Found.'));
  } else {
    res.json({guests: guests});
  }
};

module.exports ={
  getGuestForParty: getGuestForParty
}
