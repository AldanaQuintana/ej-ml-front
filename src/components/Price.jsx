import React from 'react';

class Price extends React.Component{

  formattedPrice(){
    const value = this.props.value;

    const currency = '$';
    const strAmount = value.amount.toString();
    const reversed = strAmount.split("").reverse();

    let amountAry = [];

    for (var i = 0; i < reversed.length; i+=3) {
      amountAry.push([reversed[i + 2], reversed[i + 1], reversed[i]].join(""));
    }

    return `${currency} ${amountAry.reverse().join(".")}`;
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