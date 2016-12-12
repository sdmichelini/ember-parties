'use strict';
let app = require('./application');

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
  console.log('Server Listening on Port: '+PORT);
});
