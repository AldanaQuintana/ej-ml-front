import React from 'react';
import SearchBox from './SearchBox.jsx';
import Image from './Image.jsx';

class NavBar extends React.Component{
  render(){
    return <div>
      <Image src="/logo-small-img.png" />
      <SearchBox value={this.props.value} />
    </div>;
  }
}

module.exports = NavBar;