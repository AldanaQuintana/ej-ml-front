import React from 'react';
import SearchBox from './SearchBox.jsx';

class ResultsPageApp extends React.Component{
  render(){
    return <span> <SearchBox value={this.props.value} /> </span>;
  }
}

module.exports = ResultsPageApp;