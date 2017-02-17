import React from 'react';
import {shallow} from 'enzyme';
import SearchBox from '../../src/components/SearchBox';
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

    expect(searchBox.find("button[type='submit']")).to.have.length(1);
  });

  describe('writing some input', () => {
    it('should change it\'s value', () => {
      const searchBox = shallow(<SearchBox />);
      const fakeEvent = {target: { value: 'a'}};
      searchBox.instance().handleUserInput(fakeEvent);

      expect(searchBox.find("input[type='text'][name='search']").props().value).to.eql('a');
    });
  });

  describe('submitting the form', () => {
    describe('when there is no text in the input', () => {
      const searchBox = shallow(<SearchBox />);
      const fakeSubmitEvent = { preventDefault: function(){} };
      searchBox.find("form").first().simulate('submit', fakeSubmitEvent);

      expect(searchBox.find("button[type='submit']").hasClass('active-tooltip')).to.eql(true);
    });

    describe('when there is text in the input', () => {
      const searchBox = shallow(<SearchBox />);

      const fakeInputEvent = {target: { value: 'a'}};
      searchBox.instance().handleUserInput(fakeInputEvent);

      const fakeSubmitEvent = { preventDefault: function(){} };
      searchBox.find("form").first().simulate('submit', fakeSubmitEvent);

      expect(searchBox.find("button[type='submit']").hasClass('active-tooltip')).to.eql(false);
    });
  });
});