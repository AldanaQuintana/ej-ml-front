import React from 'react';
import {mount} from 'enzyme';
import ResultsPageApp from '../../src/components/ResultsPageApp';
const chai = require('chai'),
  expect = chai.expect;


describe('ResultsPageApp', () => {
  it('', () => {
    const resultsPageApp = mount(<ResultsPageApp value='asus tablet'/>);

    expect(resultsPageApp.find("SearchBox")).to.have.length(1);
    expect(resultsPageApp.find("input[type='text'][name='search']").props().value).to.eql('asus tablet');
  });
});
