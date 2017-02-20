import React from 'react';
import {shallow} from 'enzyme';
import Item from '../../src/components/Item';
const chai = require('chai'),
  expect = chai.expect;

const itemVal = {
  "id": "MLA621653626",
  "title": "Apple Ipod Shuffle 2gb 5ta Generacion",
  "price": {
    "currency": "ARS",
    "amount": 1690,
    "decimals": 0
  },
  "picture": "http://mla-s1-p.mlstatic.com/462621-MLA20808018617_072016-I.jpg",
  "condition": "new",
  "free_shipping": true,
  "sold_quantity": 173,
  "description": '<center><img src="http://www.exclusivetechnology.com.ar/static/Header.jpg" title="EXT Expertos en tecnología. Mercadolider Platinum. Envíos gratis en 24hs o menos. Los mejores productos premium" alt="EXT Expertos en tecnología. Mercadolider Platinum. Envíos gratis en 24hs o menos. Los mejores productos premium" width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/Header-1.jpg" title="Apple - Samsung - Harman/Kardon - Bose - LG - Motorola" alt="Apple - Samsung - Harman/Kardon - Bose - LG - Motorola" width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/Header-1.5.jpg" title="¿Como hacemos para ser los mejores?" alt="¿Como hacemos para ser los mejores?" width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/Header-2.jpg" title="Trabajamos productos 100% originales en caja sellada. Nuestra prioridad es su satisfacción. Compre y experimente un servicio único de compra online." alt="Trabajamos productos 100% originales en caja sellada. Nuestra prioridad es su satisfacción. Compre y experimente un servicio único de compra online." width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/Header-2.5.jpg" title="Envíos a todo el país por Mercadoenvíos. Ventas por mayor y menor. Envíos por cadetería a CABA y GBA." alt="Envíos a todo el país por Mercadoenvíos. Ventas por mayor y menor. Envíos por cadetería a CABA y GBA." width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/cuerpo/apple-ipod-shuffle-2gb-2.jpg" title="apple-ipod-shuffle-2gb-2" alt="apple-ipod-shuffle-2gb-2" width="800" /> <img src="http://www.exclusivetechnology.com.ar/static/Footer.jpg" title="Siempre consulte tock antes de ofertar." alt="Siempre consulte tock antes de ofertar." width="800" /></center>'
};

const itemWithoutDescription = {
  "id": "MLA621653626",
  "title": "Apple Ipod Shuffle 2gb 5ta Generacion",
  "price": {
    "currency": "ARS",
    "amount": 1690,
    "decimals": 0
  },
  "picture": "http://mla-s1-p.mlstatic.com/462621-MLA20808018617_072016-I.jpg",
  "condition": "new",
  "free_shipping": true,
  "sold_quantity": 173,
  "description": ''
};

describe('Item', () => {
  it('', () => {
    const item = shallow(<Item value={itemVal} />);

    expect(item.find("img")).to.have.length(1);
    expect(item.find("img").props().src).to.eql(itemVal.picture);

    expect(item.find(".status-info")).to.have.length(1);
    expect(item.find(".status-info").text()).to.eql('Nuevo - 173 vendidos');

    expect(item.find(".title")).to.have.length(1);
    expect(item.find(".title").text()).to.eql(itemVal.title);

    expect(item.find("Price")).to.have.length(1);
    expect(item.find("Price").props().value).to.eql(itemVal.price);

    expect(item.find("a")).to.have.length(1);
    expect(item.find("a").text()).to.eql('Comprar');

    expect(item.find(".description-title")).to.have.length(1);
    expect(item.find(".description-title").text()).to.eql('Descripción del producto');

    expect(item.find(".description")).to.have.length(1);
    expect(item.find(".description").text()).to.eql(itemVal.description);
  });

  describe('when item has no description', () => {
    const item = shallow(<Item value={itemWithoutDescription} />);

    expect(item.find(".description-title")).to.have.length(0);

    expect(item.find(".description")).to.have.length(0);
  });
});