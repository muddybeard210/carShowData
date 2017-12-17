'use strict';

const Car = require('../model/carModel');
const AppErr = require('../lib/app-error');
const debug = require('debug')('carShowData:car-crud');

exports.createCar = function(reqBody){
  return new Promise((resolve, reject) => {
		if (!reqBody.carMake) {
      return reject(AppErr.error400('cars require make'));
		}
		if (!reqBody.carModel) {
      return reject(AppErr.error400('cars require model'));
		}
		if (!reqBody.carYear) {
      return reject(AppErr.error400('cars require year'));
    }
		const car = new Car(reqBody);
		car.save()
		.then(resolve)
		.catch(reject);
  });
};

exports.removeAllCars = function() {
	return Car.remove({});
};
