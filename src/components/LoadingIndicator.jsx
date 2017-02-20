import React from 'react';

class LoadingIndicator extends React.Component{
  render(){
    return <div className='loading-indicator center-vh'>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  }
}

module.exports = LoadingIndicator;