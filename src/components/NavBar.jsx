import React from 'react';
import SearchBox from './SearchBox.jsx';
import Image from './Image.jsx';

class NavBar extends React.Component{
  render(){
    return <div className="navbar">
      <a href="/">
        <Image src="/src/images/logo-small-img.png" className="logo"/>
      </a>
      <div className="form-container"><SearchBox value={this.props.value} tooltipPosition={this.props.tooltipPosition} /></div>
    </div>;
  }
}

module.exports = NavBar;