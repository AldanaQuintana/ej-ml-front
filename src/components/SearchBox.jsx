import React from 'react';

class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = { value: props.value || '', buttonClass: '', focused: props.focused || false };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyBindings = this.handleKeyBindings.bind(this);
  }

  handleUserInput(event){
    this.setState({ value: event.target.value, buttonClass: '' });
  }

  handleSubmit(event){
    if(!this.state.value){
      event.preventDefault();

      let tooltipPosition = this.props.tooltipPosition || 'top';
      this.setState({ buttonClass: 'active-tooltip ' + tooltipPosition  });

      if(this.queryInput){ this.queryInput.focus(); };
    }
  }

  handleKeyBindings(event){
    const keyCode = event.which || event.keyCode;
    if ( keyCode === 9 || keyCode === 27 ){
      this.setState({ buttonClass: '' })
    }
  }

  componentDidMount(){
    if(this.queryInput && this.state.focused){
      this.queryInput.focus();
    };
  }

  render(){
    return <form action='/items' method='get' id="search-form" onSubmit={this.handleSubmit} onKeyDown={this.handleKeyBindings}>
            <input ref={(input) => { this.queryInput = input; }} value={this.state.value} type='text' name='search' onChange={this.handleUserInput} placeholder="Nunca dejes de buscar" />
            <button type='submit' className={this.state.buttonClass}>
              <span className="tooltip">¡Ingresá una búsqueda!</span>
              <div className="icon-search"></div>
            </button>
          </form>;
  }
}

module.exports = SearchBox;