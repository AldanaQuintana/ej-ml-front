import React from 'react';
import SearchBox from './SearchBox.jsx';
import NavBar from './NavBar.jsx';
import SearchResults from './SearchResults.jsx';
import _ from 'lodash';
import 'whatwg-fetch';

const displayResultsLimit = 4;

class ResultsPageApp extends React.Component{
  constructor(props){
    super(props);
    this.state = { loading: true, items: [], categories: [] }
  }

  componentDidMount(){
    fetch(`/api/items?q=${this.props.value}&limit=${displayResultsLimit}`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({loading: false, items: json.items, categories: json.categories});
      });
  }

  render(){
    const categoriesToDisplay = _.take(this.state.categories, 4);
    const breadCrumbs = _.map(categoriesToDisplay, (category) => {
        return <div className="category">{category}</div>;
      });

    return <span>
      <NavBar value={this.props.value} tooltipPosition="bottom" />
      <div className="category-breadcrumbs">{ breadCrumbs }</div>
      <SearchResults items={this.state.items} loading={this.state.loading}/>
    </span>;
  }
}

module.exports = ResultsPageApp;