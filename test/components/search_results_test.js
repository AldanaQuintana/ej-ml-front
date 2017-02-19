import React from 'react';
import {shallow} from 'enzyme';
import SearchResults from '../../src/components/SearchResults';
const chai = require('chai'),
  expect = chai.expect;

const itemsResult = [{"id": "MLA621653626",
  "title": "Apple Ipod Shuffle 2gb 5ta Generacion",
  "price": {
  "currency": "ARS",
  "amount": 1690,
  "decimals": 2
                },
  "picture": "http://mla-s1-p.mlstatic.com/462621-MLA20808018617_072016-I.jpg",
  "condition": "new",
  "free_shipping": true
}, {"id": "MLA621653624",
  "title": "Apple Ipod OFERTA",
  "price": {
  "currency": "ARS",
  "amount": 1000,
  "decimals": 2
                },
  "picture": "http://mla-s1-p.mlstatic.com/462621-MLA20808018617_072016-I.jpg",
  "condition": "new",
  "free_shipping": false
}]


describe('SearchResults', () => {
  describe('when there are no results', () => {
    it('', () => {
      const searchResults = shallow(<SearchResults items={[]}/>);

      expect(searchResults.find("ItemCard")).to.have.length(0);
      expect(searchResults.find('.no-results-text').text()).to.eql('No hay resultados para la búsqueda');
    });
  });

  describe('when there are results', () => {
    it('', () => {
      const searchResults = shallow(<SearchResults items={itemsResult}/>);

      expect(searchResults.find("ItemCard")).to.have.length(2);
      expect(searchResults.find('.no-results-text')).to.have.length(0);
    });
  });
});