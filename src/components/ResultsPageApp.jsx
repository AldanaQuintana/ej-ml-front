import React from 'react';
import SearchBox from './SearchBox.jsx';
import NavBar from './NavBar.jsx';
import SearchResults from './SearchResults.jsx';

class ResultsPageApp extends React.Component{
  render(){
    return <span> <NavBar value={this.props.value} tooltipPosition="bottom" /> <SearchResults items={[]}/></span>;
  }
}

module.exports = ResultsPageApp;