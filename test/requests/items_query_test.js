process.env.NODE_ENV = 'test';

const chai = require('chai'),
  should = chai.should(),
  chaiHttp = require('chai-http'),
  nock = require('nock'),
  server = require('../../src/app'),
  searchResponses = require('../support/search_responses'),
  ML_API_BASE = 'https://api.mercadolibre.com';


chai.use(chaiHttp);

describe('GET /api/items?q=:query', () => {
  describe('without query', () => {
    let query = '';

    it('should fail', (done) => {
      chai.request(server)
        .get(`/api/items?q=${query}`)
        .end((err, res) =>{
          should.exist(err);

          res.status.should.eql(422);

          done();
        });
    });
  });

  describe('sending a query with limit of 5', () =>{
    let query = 'ipod',
    queryData = { q: query, limit: 5 },
    search_path = '/sites/MLA/search';


    beforeEach(function(){
      nock(ML_API_BASE)
        .get(search_path)
        .query(queryData)
        .reply(200, searchResponses.ipodLimitFive());
    });

    afterEach(function(){
      nock.cleanAll();
    });

    it('should respond with 5 items on the right format', (done) => {
            chai.request(server)
        .get(`/api/items?q=${query}&limit=5`)
        .end((err, res) =>{
          should.not.exist(err);

          res.body.should.eql({
            "author": {
              "name": "Aldana Laura",
              "lastname": "Quintana Munilla"
            },
            "categories": [
              "Electrónica", "iPod", "32GB"
            ],
            "items": [
              {
                "id": "MLA621653626",
                "title": "Apple Ipod Shuffle 2gb 5ta Generacion",
                "price": {
                  "currency": "ARS",
                  "amount": 1690,
                  "decimals": 99
                },
                "picture": "http://mla-s1-p.mlstatic.com/462621-MLA20808018617_072016-I.jpg",
                "condition": "new",
                "free_shipping": true
              },
              {
                "id": "MLA617433172",
                "title": "Ipod Touch 6g 16gb Nuevo! Sellado!! Garantia!!!",
                "price": {
                  "currency": "ARS",
                  "amount": 6800,
                  "decimals": 0
                },
                "picture": "http://mla-s2-p.mlstatic.com/230021-MLA20681272445_042016-I.jpg",
                "condition": "new",
                "free_shipping": false
              },
              {
                "id": "MLA615400378",
                "title": "Ipod Touch 5g 5ta Generación 32gb Retina",
                "price": {
                  "currency": "ARS",
                  "amount": 6590,
                  "decimals": 0
                },
                "picture": "http://mla-s1-p.mlstatic.com/243701-MLA20396016842_082015-I.jpg",
                "condition": "new",
                "free_shipping": false
              },
              {
                "id": "MLA627480393",
                "title": "Apple Pod Nano 7th Generacion",
                "price": {
                  "currency": "ARS",
                  "amount": 4800,
                  "decimals": 0
                },
                "picture": "http://mla-s1-p.mlstatic.com/783215-MLA25157847807_112016-I.jpg",
                "condition": "new",
                "free_shipping": false
              },
              {
                "id": "MLA619743680",
                "title": "Irig 2 Guitar Amplitube Interface P/ Iphone/ipad/ipod",
                "price": {
                  "currency": "ARS",
                  "amount": 1139,
                  "decimals": 0
                },
                "picture": "http://mla-s1-p.mlstatic.com/931111-MLA20497417841_112015-I.jpg",
                "condition": "new",
                "free_shipping": true
              }
            ]
          });

          done();
        });
    });
  });

  describe('sending a query with limit of 4', () => {
    let query = 'ipod',
      queryData = { q: query, limit: 4 },
      search_path = '/sites/MLA/search';


    beforeEach(function(){
      nock(ML_API_BASE)
        .get(search_path)
        .query(queryData)
        .reply(200, searchResponses.ipodLimitFour());
    });

    afterEach(function(){
      nock.cleanAll();
    });

    it('should respond with 4 items on the right format', (done) => {
      chai.request(server)
        .get(`/api/items?q=${query}&limit=4`)
        .end((err, res) =>{
          should.not.exist(err);

          res.body.should.eql({
            "author": {
              "name": "Aldana Laura",
              "lastname": "Quintana Munilla"
            },
            "categories": [
              "Electrónica", "iPod", "32GB"
            ],
            "items": [
              {
                "id": "MLA621653626",
                "title": "Apple Ipod Shuffle 2gb 5ta Generacion",
                "price": {
                  "currency": "ARS",
                  "amount": 1690,
                  "decimals": 99
                },
                "picture": "http://mla-s1-p.mlstatic.com/462621-MLA20808018617_072016-I.jpg",
                "condition": "new",
                "free_shipping": true
              },
              {
                "id": "MLA617433172",
                "title": "Ipod Touch 6g 16gb Nuevo! Sellado!! Garantia!!!",
                "price": {
                  "currency": "ARS",
                  "amount": 6800,
                  "decimals": 0
                },
                "picture": "http://mla-s2-p.mlstatic.com/230021-MLA20681272445_042016-I.jpg",
                "condition": "new",
                "free_shipping": false
              },
              {
                "id": "MLA615400378",
                "title": "Ipod Touch 5g 5ta Generación 32gb Retina",
                "price": {
                  "currency": "ARS",
                  "amount": 6590,
                  "decimals": 0
                },
                "picture": "http://mla-s1-p.mlstatic.com/243701-MLA20396016842_082015-I.jpg",
                "condition": "new",
                "free_shipping": false
              },
              {
                "id": "MLA627480393",
                "title": "Apple Pod Nano 7th Generacion",
                "price": {
                  "currency": "ARS",
                  "amount": 4800,
                  "decimals": 0
                },
                "picture": "http://mla-s1-p.mlstatic.com/783215-MLA25157847807_112016-I.jpg",
                "condition": "new",
                "free_shipping": false
              }
            ]
          });

          done();
        });
    });
  });
});