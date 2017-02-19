import React from 'react';
import {shallow} from 'enzyme';
import ResultsPageApp from '../../src/components/ResultsPageApp';
const chai = require('chai'),
  expect = chai.expect;


describe('ResultsPageApp', () => {
  it('', () => {
    const resultsPageApp = shallow(<ResultsPageApp value='asus tablet'/>);

    expect(resultsPageApp.find("SearchBox")).to.have.length(1);
  });
});
