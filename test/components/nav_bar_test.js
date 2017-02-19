import React from 'react';
import {mount} from 'enzyme';
import NavBar from '../../src/components/NavBar';
const chai = require('chai'),
  expect = chai.expect;


describe('NavBar', () => {
  it('', () => {
    const navBar = mount(<NavBar value='asus tablet'/>);

    expect(navBar.find("Image")).to.have.length(1);
    expect(navBar.find("img").props().src).to.eql("http://localhost:8080/src/images/logo-small-img.png");

    expect(navBar.find("SearchBox")).to.have.length(1);
    expect(navBar.find("input[type='text'][name='search']").props().value).to.eql('asus tablet');
  });
});