process.env.NODE_ENV = 'test';

const chai = require('chai'),
  should = chai.should(),
  chaiHttp = require('chai-http'),
  server = require('../../src/app');


chai.use(chaiHttp);

describe('GET /', () =>{

  it('should not have errors', () => {
    chai.request(server)
      .get('/')
      .end((err, res) =>{
        should.not.exist(err);

        res.status.should.eql(200);

          done();
      });
  });
});
