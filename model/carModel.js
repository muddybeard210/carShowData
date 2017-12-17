'use strict'

const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  carMake: {type: String, required: true},
  carModel: {type: String, required: true},
  carYear: {type: String, required: true},
  dateEntered: {type: Date, default: Date.now, required: true},

});

module.exports = mongoose.model('car', carSchema);