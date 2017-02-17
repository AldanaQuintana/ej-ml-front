import React from 'react';

class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: '', classN: ''};

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(event){
    this.setState({ value: event.target.value });
  }

  handleSubmit(event){
    if(!this.state.value){
      event.preventDefault();
      this.setState({ classN: 'active-tooltip' });
    }
  }

  render(){
    return <form action='/items' method='get' id="search-form" onSubmit={this.handleSubmit}>
            <input value={this.state.value} type='text' name='search' onChange={this.handleUserInput} placeholder="Nunca dejes de buscar" className={this.state.classN} data-tooltip="¡Ingresá una búsqueda!"/>
            <button type='submit'>
              <div className="icon-search"></div>
            </button>
          </form>;
  }
}

module.exports = SearchBox;