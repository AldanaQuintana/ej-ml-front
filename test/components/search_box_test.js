import React from 'react';
import {shallow} from 'enzyme';
import SearchBox from '../../assets/javascripts/components/SearchBox';
const chai = require('chai'),
  expect = chai.expect;


describe('SearchBox', () => {
  it('renders an input', () =>{
    const searchBox = shallow(<SearchBox />);

    expect(searchBox.find("input[type='text']")).to.have.length(1);
    expect(searchBox.find('input').props().value).to.eql('');
  });

  describe('writing some input', () => {
    it('should change it\'s value', () => {
      const searchBox = shallow(<SearchBox />);
      const fakeEvent = {target: { value: 'a'}};
      searchBox.instance().handleUserInput(fakeEvent);

      expect(searchBox.find('input').props().value).to.eql('a');
    });
  });
});