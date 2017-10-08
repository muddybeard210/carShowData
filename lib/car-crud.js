'use strict';

const Car = require('../model/carModel');
const AppErr = require('../lib/app-error');
const debug = require('debug')('carShowData:car-crud');

exports.createCar = function(reqBody){
  return new Promise((resolve, reject) => {
    if (!reqBody.content) {
      return reject(AppErr.error400('cars require content'));
		}
		if (!reqBody.carMake) {
      return reject(AppErr.error400('cars require make'));
		}
		if (!reqBody.carModel) {
      return reject(AppErr.error400('cars require model'));
		}
		if (!reqBody.carYear) {
      return reject(AppErr.error400('cars require model'));
    }
		const car = new Car(reqBody);
		resolve(car);
  });
};