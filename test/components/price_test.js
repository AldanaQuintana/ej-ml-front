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
      "decimals": 0
    } } showDecimals={true} />);

    expect(price.find(".price")).to.have.length(1);
    expect(price.find(".price").text()).to.eql('$ 1.690');

    expect(price.find(".decimals")).to.have.length(1);
    expect(price.find(".decimals").text()).to.eql('00');
  });

  it('', () => {
    const price = shallow(<Price value={ {
      "currency": "ARS",
      "amount": 1690123,
      "decimals": 0
    } } showDecimals={true} />);

    expect(price.find(".price")).to.have.length(1);
    expect(price.find(".price").text()).to.eql('$ 1.690.123');

    expect(price.find(".decimals")).to.have.length(1);
    expect(price.find(".decimals").text()).to.eql('00');
  });

  it('', () => {
    const price = shallow(<Price value={ {
      "currency": "ARS",
      "amount": 1690123,
      "decimals": 99
    } } showDecimals={true} />);

    expect(price.find(".price")).to.have.length(1);
    expect(price.find(".price").text()).to.eql('$ 1.690.123');

    expect(price.find(".decimals")).to.have.length(1);
    expect(price.find(".decimals").text()).to.eql('99');
  });

  it('', () => {
    const price = shallow(<Price value={ {
      "currency": "ARS",
      "amount": 1690123,
      "decimals": 1
    } } showDecimals={true} />);

    expect(price.find(".price")).to.have.length(1);
    expect(price.find(".price").text()).to.eql('$ 1.690.123');

    expect(price.find(".decimals")).to.have.length(1);
    expect(price.find(".decimals").text()).to.eql('10');
  });

  describe('when price is not present', () =>{
    it('', () => {
      const price = shallow(<Price value={ {
        "currency": "ARS",
        "amount": null,
        "decimals": null
      } } showDecimals={true} />);

      expect(price.find(".price")).to.have.length(1);
      expect(price.find(".price").text()).to.eql('Consultar Precio');

      expect(price.find(".decimals")).to.have.length(0);
    });
  });
});