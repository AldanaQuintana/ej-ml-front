import React from 'react';

class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: '', classN: ''};

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(event){
    this.setState({ value: event.target.value, classN: '' });
  }

  handleSubmit(event){
    if(!this.state.value){
      event.preventDefault();
      this.setState({ classN: 'active-tooltip top' });
      this.queryInput.focus();
    }
  }

  render(){
    return <form action='/items' method='get' id="search-form" onSubmit={this.handleSubmit}>
            <input ref={(input) => { this.queryInput = input; }} value={this.state.value} type='text' name='search' onChange={this.handleUserInput} placeholder="Nunca dejes de buscar" autoFocus="true"/>
            <button type='submit' className={this.state.classN}>
              <span className="tooltip">¡Ingresá una búsqueda!</span>
              <div className="icon-search"></div>
            </button>
          </form>;
  }
}

module.exports = SearchBox;