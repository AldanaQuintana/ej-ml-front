process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/app');

describe('Context test. Making a request to index', () => {
  it('should not fail', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) =>{
        should.not.exist(err);

        done();
      });
  });
});