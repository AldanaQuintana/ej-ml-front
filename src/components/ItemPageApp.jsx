import React from 'react';
import SearchBox from './SearchBox.jsx';
import NavBar from './NavBar.jsx';
import Item from './Item.jsx';

class ItemPageApp extends React.Component{
  constructor(props){
    super(props);
    this.state = { item: null }
  }

  render(){
    let breadCrumbs = '';

    return <span>
      <NavBar value={this.props.value} tooltipPosition="bottom" />
      <div className="category-breadcrumbs">{ breadCrumbs }</div>
      <Item value={this.state.item}/>
    </span>;
  }
}

module.exports = ItemPageApp;