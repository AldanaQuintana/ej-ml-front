import React from 'react';
import SearchBox from './SearchBox.jsx';
import NavBar from './NavBar.jsx';
import SearchResults from './SearchResults.jsx';
import MetaDescription from './MetaDescription.jsx';
import _ from 'lodash';
import 'whatwg-fetch';

const displayResultsLimit = 4;

const removeAccents = (strAccents) => {
  var strAccents = strAccents.split('');
  var strAccentsOut = new Array();
  var strAccentsLen = strAccents.length;
  var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  for (var y = 0; y < strAccentsLen; y++) {
    if (accents.indexOf(strAccents[y]) != -1) {
      strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
    } else
      strAccentsOut[y] = strAccents[y];
  }
  strAccentsOut = strAccentsOut.join('');
  return strAccentsOut;
}

class ResultsPageApp extends React.Component{
  constructor(props){
    super(props);
    this.state = { loading: true, items: [], categories: [] }
  }

  componentDidMount(){
    document.title = `${_.capitalize(this.props.value)} en Mercado Libre`;
    let encodedValue = removeAccents(this.props.value);

    fetch(`/api/items?q=${encodedValue}&limit=${displayResultsLimit}`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({loading: false, items: json.items, categories: json.categories});
      });
  }

  render(){
    const breadCrumbs = _.map(this.state.categories, (category) => {
        return <div className="category" key={category}>{category}</div>;
      });

    const metaDescription = this.state.items.length > 0 ? <MetaDescription content={`${_.capitalize(this.props.value)} en Mercado Libre. ¡Comprá ya la mejor oferta!`}/> : '';

    return <span>
      <NavBar value={this.props.value} tooltipPosition="bottom" />
      <div className="category-breadcrumbs">{ breadCrumbs }</div>
      <SearchResults items={this.state.items} loading={this.state.loading}/>
      { metaDescription }
    </span>;
  }
}

module.exports = ResultsPageApp;