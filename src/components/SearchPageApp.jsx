import React from 'react';
import SearchBox from './SearchBox.jsx';
import Image from './Image.jsx';

class SearchPageApp extends React.Component{
  render(){
    return <span> <Image src="/src/images/logo-small.png" className="logo"/> <SearchBox /> </span>;
  }
}

module.exports = SearchPageApp;