import React from 'react';
import Image from './Image.jsx';
import Price from './Price.jsx';

class ItemCard extends React.Component{
  render(){
    const item = this.props.item;

    const freeShippingIndicator = item.free_shipping ? <div className="icon-truck"></div> : '';

    return <div>
      <img src={item.picture} />
      <Price value={item.price}/>
      { freeShippingIndicator }
      <div className='title'>{item.title}</div>
    </div>;
  }
}

module.exports = ItemCard;