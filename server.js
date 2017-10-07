'use strict';
//npm modules
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('carShowData:server');

//app modules

//globals
const port = process.env.PORT || 3000;
const app = express();
//middleware
app.use(morgan('dev'));
//routes
app.all('*', function(req, res){
  debug('404 *');
  res.status(404).send('💩');
});
//start server
const server = app.listen(port, function(){
  console.log('server up on: ', port);
})
//export server
server.isRunning = true;
module.exports = server;
