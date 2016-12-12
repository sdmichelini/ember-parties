'use strict';

const PARTIES = [
  {name: 'Highlighter', date:String(Date.now()), id: '1'},
  {name: 'Toga', date:String(Date.now()+10), id: '2'}
];

//Get Parties
let getParties = (req, res)=>{
  res.json({parties: PARTIES});
};

module.exports ={
  getParties: getParties
}
