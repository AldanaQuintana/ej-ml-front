import React from 'react';
import {mount} from 'enzyme';
import ItemPageApp from '../../src/components/ItemPageApp';
const chai = require('chai'),
  expect = chai.expect;


describe('ItemPageApp', () => {
  it('', () => {
    const itemPageApp = mount(<ItemPageApp value='asus tablet'/>);

    expect(itemPageApp.find("NavBar")).to.have.length(1);

    expect(itemPageApp.find("SearchBox")).to.have.length(1);
    expect(itemPageApp.find("input[type='text'][name='search']").props().value).to.eql('asus tablet');

    expect(itemPageApp.find("Item")).to.have.length(1);
  });
});
