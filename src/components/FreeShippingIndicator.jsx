import React from 'react';

class FreeShippingIndicator extends React.Component{
  render(){
    if(this.props.freeShipping){
      return <div className="shipping-indicator icon-truck" title="Envío gratis"></div>;
    }else{
      return <div></div>;
    }
  }
}

module.exports = FreeShippingIndicator;