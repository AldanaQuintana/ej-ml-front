import React from 'react';
import {shallow} from 'enzyme';
import Image from '../../src/components/Image';
const chai = require('chai'),
  expect = chai.expect;


describe('Image', () => {
  describe('it should render an image tag with src pointing to the assets server', () => {
    const image = shallow(<Image src="/image.jpg"/>);

    expect(image.find("img")).to.have.length(1);
    expect(image.find("img").props().src).to.eql('http://localhost:8080/image.jpg');
  });
});