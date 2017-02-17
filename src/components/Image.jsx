import React from 'react';

class Image extends React.Component{
  render(){
    return <img src={`http://localhost:8080${this.props.src}`} className={this.props.className}/>;
  }
}

module.exports = Image;