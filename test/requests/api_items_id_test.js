process.env.NODE_ENV = 'test';

const chai = require('chai'),
  should = chai.should(),
  chaiHttp = require('chai-http'),
  nock = require('nock'),
  server = require('../../app'),
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
              "decimals": 2
            },
            "picture": "http://mla-s1-p.mlstatic.com/462621-MLA20808018617_072016-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "sold_quantity": 173,
            "description": '<center><img src="http://www.exclusivetechnology.com.ar/static/Header.jpg" title="EXT Expertos en tecnología. Mercadolider Platinum. Envíos gratis en 24hs o menos. Los mejores productos premium" alt="EXT Expertos en tecnología. Mercadolider Platinum. Envíos gratis en 24hs o menos. Los mejores productos premium" width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/Header-1.jpg" title="Apple - Samsung - Harman/Kardon - Bose - LG - Motorola" alt="Apple - Samsung - Harman/Kardon - Bose - LG - Motorola" width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/Header-1.5.jpg" title="¿Como hacemos para ser los mejores?" alt="¿Como hacemos para ser los mejores?" width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/Header-2.jpg" title="Trabajamos productos 100% originales en caja sellada. Nuestra prioridad es su satisfacción. Compre y experimente un servicio único de compra online." alt="Trabajamos productos 100% originales en caja sellada. Nuestra prioridad es su satisfacción. Compre y experimente un servicio único de compra online." width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/Header-2.5.jpg" title="Envíos a todo el país por Mercadoenvíos. Ventas por mayor y menor. Envíos por cadetería a CABA y GBA." alt="Envíos a todo el país por Mercadoenvíos. Ventas por mayor y menor. Envíos por cadetería a CABA y GBA." width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/cuerpo/apple-ipod-shuffle-2gb-2.jpg" title="apple-ipod-shuffle-2gb-2" alt="apple-ipod-shuffle-2gb-2" width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/Footer.jpg" title="Siempre consulte tock antes de ofertar." alt="Siempre consulte tock antes de ofertar." width="800" /></center>'
          }
        });

        res.status.should.eql(200);

        done();
      });
  });
});