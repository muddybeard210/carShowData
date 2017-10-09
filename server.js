'use strict';

//npm modules
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('carShowData:server');
const mongoose = require('mongoose');

//app modules
const errorResponse = require('./lib/error-response');
const carRouter = require('./route/car-router');

//globals
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/carShowData';
const app = express();

//connect to db
mongoose.connect(mongoURI);

//middleware
app.use(morgan('dev'));
app.use(errorResponse);

//routes
app.use('/api', carRouter);
app.all('*', function(req, res){
  debug('404 *');
  res.status(404).send('💩 not found');
});

//start server
const server = app.listen(port, function(){
  console.log('server up on: ', port);
});

//export server
server.isRunning = true;
module.exports = server;
