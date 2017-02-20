import React from 'react';
import ReactDOM from 'react-dom';
import SearchPageApp from './components/SearchPageApp.jsx';
import ResultsPageApp from './components/ResultsPageApp.jsx';
import ItemPageApp from './components/ItemPageApp.jsx';
import _ from 'lodash';


const searchRegex = /(\?|&)search=([^&]*)/;

const searchQuery = window.location.search;
let searchParam = '';
if ( searchRegex.test(searchQuery) ){
  searchParam = searchQuery.match(searchRegex,'')[2];
  searchParam = decodeURIComponent(searchParam.split("+").join(" "));
}

const apps = {
  "search-page": <SearchPageApp />,
  "results-page": <ResultsPageApp value={searchParam} />,
  "item-page": <ItemPageApp itemId={window.location.pathname.split("/items/")[1]} />
};

_.each(apps, function(app, nodeId){
  const node = document.getElementById(nodeId);

  if ( node ){
    ReactDOM.render(
      app,
      node
    );
  }
});