import React from 'react';
import {shallow} from 'enzyme';
import SearchBox from '../../assets/javascripts/components/SearchBox';
const chai = require('chai'),
  expect = chai.expect;


describe('SearchBox', () => {
  it('renders the form', () =>{
    const searchBox = shallow(<SearchBox />);

    expect(searchBox.find("form")).to.have.length(1);
    expect(searchBox.find("form").props().action).to.eql('/items');
    expect(searchBox.find("form").props().method).to.eql('get');

    expect(searchBox.find("input[type='text'][name='search']")).to.have.length(1);
    expect(searchBox.find("input[type='text'][name='search']").props().value).to.eql('');

    expect(searchBox.find("input[type='submit']")).to.have.length(1);
    expect(searchBox.find("input[type='submit']").props().value).to.eql('Buscar');
  });

  describe('writing some input', () => {
    it('should change it\'s value', () => {
      const searchBox = shallow(<SearchBox />);
      const fakeEvent = {target: { value: 'a'}};
      searchBox.instance().handleUserInput(fakeEvent);

      expect(searchBox.find("input[type='text'][name='search']").props().value).to.eql('a');
    });
  });
});