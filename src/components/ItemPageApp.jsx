import React from 'react';
import SearchBox from './SearchBox.jsx';
import NavBar from './NavBar.jsx';
import Item from './Item.jsx';

class ItemPageApp extends React.Component{
  render(){
    let breadCrumbs = '';

    return <span>
      <NavBar value={this.props.value} tooltipPosition="bottom" />
      <div className="category-breadcrumbs">{ breadCrumbs }</div>
      <Item />
    </span>;
  }
}

module.exports = ItemPageApp;