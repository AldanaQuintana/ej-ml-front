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
  "free_shipping": true,
  "seller_address": "Capital Federal"
};


describe('ItemCard', () => {
  describe('when item has free shipping', () => {
    it('', () => {
      const itemCard = shallow(<ItemCard item={item} />);

      expect(itemCard.find("a[href='/items/MLA621653626']")).to.have.length(1);

      expect(itemCard.find(".image-placeholder")).to.have.length(1);

      expect(itemCard.find("Price")).to.have.length(1);
      expect(itemCard.find("Price").props().value).to.eql(item.price);

      expect(itemCard.find("FreeShippingIndicator")).to.have.length(1);
      expect(itemCard.find("FreeShippingIndicator").props().freeShipping).to.eq(true);

      expect(itemCard.find(".title")).to.have.length(1);
      expect(itemCard.find(".title").text()).to.eql(item.title);

      expect(itemCard.find(".address")).to.have.length(1);
      expect(itemCard.find(".address").text()).to.eql(item.seller_address);
    });
  });

  describe('when item does not have free shipping', () => {
    before(() => {
      item.free_shipping = false;
    });

    it('', () => {
      const itemCard = shallow(<ItemCard item={item} />);

      expect(itemCard.find("a[href='/items/MLA621653626']")).to.have.length(1);

      expect(itemCard.find(".image-placeholder")).to.have.length(1);

      expect(itemCard.find("Price")).to.have.length(1);
      expect(itemCard.find("Price").props().value).to.eql(item.price);

      expect(itemCard.find("FreeShippingIndicator")).to.have.length(1);
      expect(itemCard.find("FreeShippingIndicator").props().freeShipping).to.eq(false);

      expect(itemCard.find(".title")).to.have.length(1);
      expect(itemCard.find(".title").text()).to.eql(item.title);

      expect(itemCard.find(".address")).to.have.length(1);
      expect(itemCard.find(".address").text()).to.eql(item.seller_address);
    });
  });
});