import React from 'react';
import SearchBox from './SearchBox.jsx';
import NavBar from './NavBar.jsx';
import SearchResults from './SearchResults.jsx';

class ResultsPageApp extends React.Component{
  render(){
    return <span> <NavBar /> <SearchBox value={this.props.value} /> <SearchResults /></span>;
  }
}

module.exports = ResultsPageApp;