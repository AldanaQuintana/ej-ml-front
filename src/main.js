import React from 'react';
import ReactDOM from 'react-dom';
import SearchPageApp from './components/SearchPageApp.jsx';
import ResultsPageApp from './components/ResultsPageApp.jsx';
import _ from 'lodash';

const apps = {
  "search-page": <SearchPageApp />,
  "results-page": <ResultsPageApp />
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