'use strict';
// override the process.ENV.MONGO_URI
process.env.MONGO_URI = 'mongodb://localhost:/test';


const expect = require('chai').expect;
const request = require('superagent-use')(require('superagent'));
const superPromise = require('superagent-promise-plugin');
const port = process.env.PORT || 3000;
const baseUrl = `localhost:${port}/api`;
const carCrud = require('../lib/car-crud');

//request.use(superPromise);
const server = require('../server');

describe('testing module car-router', function () {
    before((done) => {
        if (!server.isRunning) {
            server.listen(port, () => {
                server.isRunning = true;
                console.log('server up on port', port);
            });
            return;
        }
        done();
    });
    after((done) => {
        if (server.isRunning) {
            server.close(() => {
                console.log('shut down');
                done();
            });
            return;
        }
        done();
    });

    describe('POST /api/note with valid date', function () {
        after((done) => {
            carCrud.removeAllCars()
            .then(done).catch(done);
        });
        it('should return a new car', function (done) {
            request.post(`${baseUrl}/car`)
                .send({
                    carMake: 'Ford',
                    carModel: 'f150',
                    carYear: '2017',

                })
                .then((res) => {
                    expect(res.status).to.equal(200);
                    console.log(res.body);
                    expect(res.body.carMake).to.equal('Ford');
                    done();
                })
                .catch(done);
        });
    });
});

