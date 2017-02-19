import React from 'react';
import {shallow} from 'enzyme';
import ItemCard from '../../src/components/ItemCard';
const chai = require('chai'),
  expect = chai.expect;

let item = {"id": "MLA621653626",
  "title": "Apple Ipod Shuffle 2gb 5ta Generacion",
  "price": {
  "currency": "ARS",
  "amount": 1690,
  "decimals": 2
                },
  "picture": "http://mla-s1-p.mlstatic.com/462621-MLA20808018617_072016-I.jpg",
  "condition": "new",
  "free_shipping": true
};


describe('ItemCard', () => {
  describe('when item has free shipping', () => {
    it('', () => {
      const itemCard = shallow(<ItemCard item={item} />);

      expect(itemCard.find("a[href='/items/MLA621653626']")).to.have.length(1);

      expect(itemCard.find("img")).to.have.length(1);
      expect(itemCard.find("img").props().src).to.eql(item.picture);

      expect(itemCard.find("Price")).to.have.length(1);
      expect(itemCard.find("Price").props().value).to.eql(item.price);

      expect(itemCard.find(".icon-truck")).to.have.length(1);

      expect(itemCard.find(".title")).to.have.length(1);
      expect(itemCard.find(".title").text()).to.eql(item.title);
    });
  });

  describe('when item does not have free shipping', () => {
    before(() => {
      item.free_shipping = false;
    });

    it('', () => {
      const itemCard = shallow(<ItemCard item={item} />);

      expect(itemCard.find("a[href='/items/MLA621653626']")).to.have.length(1);

      expect(itemCard.find("img")).to.have.length(1);
      expect(itemCard.find("img").props().src).to.eql(item.picture);

      expect(itemCard.find("Price")).to.have.length(1);
      expect(itemCard.find("Price").props().value).to.eql(item.price);

      expect(itemCard.find(".icon-truck")).to.have.length(0);

      expect(itemCard.find(".title")).to.have.length(1);
      expect(itemCard.find(".title").text()).to.eql(item.title);
    });
  });
});