import React from 'react';

class Price extends React.Component{

  formattedPrice(){
    const value = this.props.value;

    const currency = '$';
    const strAmount = value.amount.toString();

    let amount = `${strAmount[0]}.${strAmount.slice(1,  4)}`;

    return `${currency} ${amount}`;
  }

  render(){
    let decimals = '';

    if (this.props.showDecimals) {
      decimals = <div className="decimals">{this.props.value.decimals}</div>
    }

    return <div className="price-group">
      <div className="price">{this.formattedPrice()}</div>
      { decimals }
    </div>;
  }
}

module.exports = Price;