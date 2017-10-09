'use strict';

const expect = require('chai').expect;
const request = require('superagent-use')(require('superagent'));
const superPromise = require('superagent-promise-plugin');
const port = process.env.PORT || 3000;
const baseUrl = `localhost:${port}/api`;

//request.use(superPromise);
const server = require('../server');

describe('testing module car-router', function(){
    it('should return a new car', function(done){
        request.post(`${baseUrl}/car`)
        .send({
            carMake: "Ford", 
            carModel: "f150", 
            carYear: "2017",

        })
        .then((res) => {
            expect(res.status).to.equal(200);
            console.log(res.body);
            expect(res.body.carMake).to.equal("Ford");
            done();
        })
        .catch(done);
    });
});
