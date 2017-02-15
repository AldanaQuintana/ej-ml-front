import React from 'react';

class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event){
    this.setState({ value: event.target.value })
  }

  render(){
    return <input value={this.state.value} type='text' onChange={this.handleUserInput}/>;
  }
}

module.exports = SearchBox;