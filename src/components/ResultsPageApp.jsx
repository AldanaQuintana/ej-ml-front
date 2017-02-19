import React from 'react';
import SearchBox from './SearchBox.jsx';
import NavBar from './NavBar.jsx';
import SearchResults from './SearchResults.jsx';
import 'whatwg-fetch';

const displayResultsLimit = 4;

class ResultsPageApp extends React.Component{
  constructor(props){
    super(props);
    this.state = { loading: true, items: [] }
  }

  componentDidMount(){
    fetch(`/api/items?q=${this.props.value}&limit=${displayResultsLimit}`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({loading: false, items: json.items});
      });
  }

  render(){
    return <span> <NavBar value={this.props.value} tooltipPosition="bottom" /> <SearchResults items={this.state.items} loading={this.state.loading}/></span>;
  }
}

module.exports = ResultsPageApp;