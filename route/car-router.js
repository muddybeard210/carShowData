'use strict';

const Router = require('express').Router;
const carRouter = module.exports = new Router();
const jsonParser = require('body-parser').json(); 
const carCrud = require('../lib/car-crud');

carRouter.post('/car', jsonParser, function(req, res){
    carCrud.createCar(req.body)
    .then(car => res.send(car))
    .catch(err => res.sendError(err))
});
