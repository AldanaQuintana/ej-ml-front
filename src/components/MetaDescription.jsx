import React from 'react';

class MetaDescription extends React.Component{
  componentDidMount(){
    document.getElementById('meta-desc').content = this.props.content;
  }

  render(){
    return <div></div>;
  }
}

module.exports = MetaDescription;