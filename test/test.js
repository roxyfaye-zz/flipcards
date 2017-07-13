const assert = require("assert");
const request = require('supertest');
const application = require("../application.js")


describe('test', function () {
    it("should run a JSON file successfully", function (done) {
        request(application)
            .get("/api")
            .expect(200)
            .expect((response) => {
                assert.deepEqual(response.body, "hello")
            })
            .end(done);
    });
    it('should push the user successfully', function (done) {
        request(application)
            .post('/api/registration')
            .send({name: 'melloDee'})
            .expect(200)
            .expect((response) => {
                assert.equal(response.body.name, 'melloDee');
            })
            .end(done);
    })
    it('should push the authenticated user fail', function (done) {
        request(application)
            .post('/api/login')
            .expect(200)
            .expect((response) => {
                assert.deepEqual(response.body.status, 'thou shall not pass');
            })
            .end(done);
    })
    it('should push the authenticated user successfully', function (done) {
        request(application)
            .post('/api/login')
            .send({name: 'melloDee', password: 'qwer1234'})
            .expect(200)
            .expect((response) => {
                assert.deepEqual(response.body.status, "success");
            })
            .end(done);
    })
    it('should logout if user exits', function (done) {
        request(application)
            .post('/api/logout')
            .send({name: 'melloDee', password: 'qwer1234'})
            .expect(200)
            .expect((response) => {
                assert.deepEqual(response.body.status, 'see ya');
            })
            .end(done);
    })
});

//    it("POST ", function () {
//      it("", function(done){
//          request(application)
//          .post("")
//          .send({

//          })
//          .set('Accept', 'application/json')
//          .expect({})
//          .end(done);
//      })
//  }