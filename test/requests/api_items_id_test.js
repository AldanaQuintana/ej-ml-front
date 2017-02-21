process.env.NODE_ENV = 'test';

const chai = require('chai'),
  should = chai.should(),
  chaiHttp = require('chai-http'),
  nock = require('nock'),
  server = require('../../src/app'),
  itemsResponses = require('../support/items_responses'),
  ML_API_BASE = 'https://api.mercadolibre.com';


chai.use(chaiHttp);

describe('GET /api/items/:id', () =>{
  const itemId = 'MLA621653626',
   itemPath = `/items/${itemId}`,
   itemDescPath = `/items/${itemId}/description`;

  beforeEach(function(){
    nock(ML_API_BASE)
      .get(itemPath)
      .reply(200, itemsResponses.itemOne());

    nock(ML_API_BASE)
      .get(itemDescPath)
      .reply(200, itemsResponses.itemOneDesc())
  });

  afterEach(function(){
    nock.cleanAll();
  });

  it('should respond with the right format', (done) => {
    chai.request(server)
      .get(`/api/items/${itemId}`)
      .end((err, res) =>{
        should.not.exist(err);

        res.body.should.eql({
          "author": {
            "name": "Aldana Laura",
            "lastname": "Quintana Munilla"
          },
          "item": {
            "id": "MLA621653626",
            "title": "Apple Ipod Shuffle 2gb 5ta Generacion",
            "price": {
              "currency": "ARS",
              "amount": 1690,
              "decimals": 0
            },
            "picture": "http://mla-s1-p.mlstatic.com/462621-MLA20808018617_072016-O.jpg",
            "condition": "new",
            "free_shipping": true,
            "seller_address": "Capital Federal",
            "sold_quantity": 173,
            "description": "iPod Shuffle utima generacion! Nuevos en caja sellada! EXCLUSIVE TECHNOLOGY ARGENTINA - 10 años en el Rubro de electronica y comunicaciones! Compre seguro!"
          }
        });

        res.status.should.eql(200);

        done();
      });
  });
});