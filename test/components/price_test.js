import React from 'react';
import {shallow} from 'enzyme';
import Price from '../../src/components/Price';
const chai = require('chai'),
  expect = chai.expect;

describe('Price', () => {
  it('', () => {
    const price = shallow(<Price value={ {
      "currency": "ARS",
      "amount": 1690,
      "decimals": 3
    } } />);

    expect(price.find(".price")).to.have.length(1);
    expect(price.find(".price").text()).to.eql('$ 1.690');
  });
});