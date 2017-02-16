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
    return <form action='/items' method='get'>
            <input value={this.state.value} type='text' name='search' onChange={this.handleUserInput}/>
            <button type='submit'>
              <div className="icon-search"></div>
            </button>
          </form>;
  }
}

module.exports = SearchBox;