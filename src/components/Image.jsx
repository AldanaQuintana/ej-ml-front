import React from 'react';

class Image extends React.Component{
  render(){
    return <img src={`${process.env.ASSET_HOST}${this.props.src}`} className={this.props.className}/>;
  }
}

module.exports = Image;