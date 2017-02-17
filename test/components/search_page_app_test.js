import React from 'react';
import {shallow} from 'enzyme';
import SearchPageApp from '../../src/components/SearchPageApp';
const chai = require('chai'),
  expect = chai.expect;


describe('SearchPageApp', () => {
  it('', () => {
    const searchPageApp = shallow(<SearchPageApp/>);

    expect(searchPageApp.find("SearchBox")).to.have.length(1);
    expect(searchPageApp.find("Image")).to.have.length(1);
  });
});
