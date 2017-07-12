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
    it('should push the authenticated user successfully', function (done) {
        request(application)
            .post('/api/login')
            //.send({name: 'melloDee'})
            .expect(200)
            .expect((response) => {
                assert.equal(response.body, [{ user: 'melloDee', password: 'qwer1234'}]);
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