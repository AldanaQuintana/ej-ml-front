import React from 'react';

class MetaDescription extends React.Component{
  componentDidMount(){
    if(this.props.content && this.props.content.length > 0){
      document.getElementById('meta-desc').content = this.props.content;
    }
  }

  render(){
    return <span></span>;
  }
}

module.exports = MetaDescription;