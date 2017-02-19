import React from 'react';

class Price extends React.Component{

  formattedPrice(){
    const value = this.props.value;

    const currency = '$';
    const strAmount = value.amount.toString();

    let amount = `${strAmount[0]}.${strAmount.slice(1, value.decimals + 1)}`;

    return `${currency} ${amount}`;
  }

  render(){
    return <div className="price">{this.formattedPrice()}</div>;
  }
}

module.exports = Price;