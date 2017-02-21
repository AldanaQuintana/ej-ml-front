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

    if (this.props.value.amount && this.props.showDecimals) {
      let strDecimals = this.props.value.decimals.toString();
      if ( strDecimals.length === 1 ){
        strDecimals = strDecimals + "0";
      }

      decimals = <div className="decimals">{strDecimals}</div>
    }

    let price = '';
    if(this.props.value.amount){
      price = this.formattedPrice();
    }else{
      price = 'Consultar Precio';
    }

    return <div className="price-group">
      <div className="price">{price}</div>
      { decimals }
    </div>;
  }
}

module.exports = Price;